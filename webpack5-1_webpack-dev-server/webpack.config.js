var path = require("path");

module.exports = {
  mode: "none",
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
