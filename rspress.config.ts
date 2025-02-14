import path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  base: '/rspress-helloworld/',
  title: "My Site",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
  globalStyles: path.resolve(__dirname, "styles/index.css"),
  globalUIComponents: [
    path.resolve(__dirname, "shared/AppButton.tsx"),
    [
      path.resolve(__dirname, "shared/compUi.tsx"),
      {
        foo: "bar",
      },
    ]
  ],
});
