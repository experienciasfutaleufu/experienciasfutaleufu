import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "page",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            type: "image",
            label: "Landing  Daytime Image",
            name: "landingImageSrc",
          },
          {
            type: "image",
            label: "Landing DarkMode Image",
            name: "landingDarkImageSrc",
          },
          {
            type: "rich-text",
            label: "Intro Text",
            isBody: false,

            name: "introtext",
          },
        ],
        ui: {
          router: ({ document }) => {
            //TODO: change this around later
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return undefined;
          },
        },
      },

      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
