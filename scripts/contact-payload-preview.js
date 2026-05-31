function createContactPayload(data) {
  const formData = new FormData();
  formData.append("_wpcf7", "327");
  formData.append("_wpcf7_unit_tag", "d409a3d");
  formData.append("yname", data["your-name"].trim());
  formData.append("yemail", data["your-email"].trim());
  formData.append("ymessage", data["your-message"].trim());
  return formData;
}

function formDataToObject(formData) {
  const obj = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }
  return obj;
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (!arg.startsWith("--")) continue;

    const key = arg.slice(2);
    const next = argv[i + 1];

    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

function run() {
  const args = parseArgs(process.argv.slice(2));

  const sample = {
    "your-name": args.name || "Test User",
    "your-email": args.email || "test@example.com",
    "your-message": args.message || "Hello from payload preview",
  };

  const payload = formDataToObject(createContactPayload(sample));

  console.log("contact payload preview");
  console.log(JSON.stringify(payload, null, 2));
  console.log("no network request made");
  console.log("no email sent");
}

run();
