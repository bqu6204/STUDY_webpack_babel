const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"), // base directory
  entry: "./js/a.js", // it would be root/src/js/a.js
  mode: "none",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
