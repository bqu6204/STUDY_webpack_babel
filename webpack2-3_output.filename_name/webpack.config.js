const path = require("path");

module.exports = {
  entry: "./a.js",
  mode: "none",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname),
  },
};
