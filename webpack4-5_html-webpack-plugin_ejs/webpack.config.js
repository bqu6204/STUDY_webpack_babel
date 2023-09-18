var path = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Hello world",
      filename: "home.html",
    }),
  ],
};
