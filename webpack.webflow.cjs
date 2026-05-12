const { styledComponentsBundleConfig } = require("@webflow/styled-components-utils");
const path = require("node:path");

module.exports = [
  styledComponentsBundleConfig,
  {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  }
];
