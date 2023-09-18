const path = require("path");

module.exports = {
  entry: "./a.js",
  mode: "none",
  output: {
    filename: "[fullhash].js",
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
