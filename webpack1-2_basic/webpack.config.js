var path = require("path");

module.exports = {
  entry: "./a.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  },
};
