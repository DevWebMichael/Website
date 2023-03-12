import { defineConfig as e } from "tinacms";
const t = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master", i = e({
  branch: t,
  clientId: "472f0ce5-f1be-459c-785cc9057a1b",
  token: "371c01c4f19a9e17eb0ef46917b696d99deb87ae",
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: !0,
            required: !0
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: !0
          }
        ]
      }
    ]
  }
});
export {
  i as default
};
