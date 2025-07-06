import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "assets/uploads",
    public_folder: "/assets/uploads",
    site_url: "https://aimoralcode.org",
    collections: [
      {
        name: "blog",
        label: "Blog",
        folder: "_posts",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
