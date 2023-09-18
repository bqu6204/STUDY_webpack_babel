const path = require("path");

module.exports = {
  entry: "./a.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
