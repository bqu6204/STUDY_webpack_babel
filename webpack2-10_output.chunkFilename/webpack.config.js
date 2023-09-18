const path = require("path");

module.exports = {
  entry: "./src/a.js",
  mode: "none",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[chunkhash:8].js",
  },
};
