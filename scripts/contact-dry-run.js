const assert = require("node:assert/strict");

function createContactPayload(data) {
  const formData = new FormData();
  formData.append("_wpcf7", "327");
  formData.append("_wpcf7_unit_tag", "d409a3d");
  formData.append("yname", data["your-name"].trim());
  formData.append("yemail", data["your-email"].trim());
  formData.append("ymessage", data["your-message"].trim());
  return formData;
}

async function submitContactDryRun(data, options) {
  const emailUrl = options.emailUrl;
  const post = options.post;

  if (!emailUrl) {
    throw new Error("missing_config");
  }

  const formData = createContactPayload(data);
  const result = await post(emailUrl, formData, { timeout: 10000 });

  if (result?.data?.status && result.data.status !== "mail_sent") {
    throw new Error("mail_not_sent");
  }

  return { ok: true, formData };
}

function formDataToObject(formData) {
  const obj = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }
  return obj;
}

async function run() {
  const sample = {
    "your-name": "  Test User  ",
    "your-email": "  test@example.com  ",
    "your-message": "  Hello from dry run  ",
  };

  let mockCalls = 0;
  const successPost = async (_url, _formData, _config) => {
    mockCalls += 1;
    return { data: { status: "mail_sent" } };
  };

  const success = await submitContactDryRun(sample, {
    emailUrl: "https://example.invalid/contact",
    post: successPost,
  });

  const payload = formDataToObject(success.formData);
  assert.equal(payload._wpcf7, "327");
  assert.equal(payload._wpcf7_unit_tag, "d409a3d");
  assert.equal(payload.yname, "Test User");
  assert.equal(payload.yemail, "test@example.com");
  assert.equal(payload.ymessage, "Hello from dry run");
  assert.equal(mockCalls, 1);

  await assert.rejects(
    () => submitContactDryRun(sample, { emailUrl: "", post: successPost }),
    /missing_config/
  );

  const nonSentPost = async () => ({ data: { status: "validation_failed" } });
  await assert.rejects(
    () =>
      submitContactDryRun(sample, {
        emailUrl: "https://example.invalid/contact",
        post: nonSentPost,
      }),
    /mail_not_sent/
  );

  const networkErrorPost = async () => {
    throw new Error("ECONNRESET");
  };
  await assert.rejects(
    () =>
      submitContactDryRun(sample, {
        emailUrl: "https://example.invalid/contact",
        post: networkErrorPost,
      }),
    /ECONNRESET/
  );

  console.log("contact dry-run tests passed");
  console.log("no real network or email was used");
}

run().catch((error) => {
  console.error("contact dry-run tests failed");
  console.error(error);
  process.exit(1);
});
