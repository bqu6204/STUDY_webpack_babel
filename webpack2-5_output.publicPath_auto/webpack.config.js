const path = require("path");

module.exports = {
  entry: "./a.js",
  mode: "none",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
