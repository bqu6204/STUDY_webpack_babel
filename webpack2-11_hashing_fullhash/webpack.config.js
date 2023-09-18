const path = require("path");

module.exports = {
  entry: { app1: "./src/a.js", app2: "./src/b.js" },
  mode: "none",
  output: {
    filename: "[name]-[fullhash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
};
