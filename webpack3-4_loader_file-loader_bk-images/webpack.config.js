const path = require("path");

module.exports = {
  mode: "none",
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { esModule: false } },
        ],
      },
      {
        test: /\.jpg$/,
        use: "file-loader",
      },
    ],
  },
};
