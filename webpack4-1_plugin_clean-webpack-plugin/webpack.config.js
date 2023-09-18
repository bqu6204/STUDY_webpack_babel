var path = require("path");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, "dist "),
    filename: "bundle2.js",
  },
  plugins: [new CleanWebpackPlugin()],
};
