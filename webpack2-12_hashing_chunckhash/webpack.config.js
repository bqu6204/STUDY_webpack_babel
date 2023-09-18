const path = require("path");

module.exports = {
  entry: {
    app1: "./src/a.js",
    app2: "./src/b.js",
  },
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:8].js",
  },
};
