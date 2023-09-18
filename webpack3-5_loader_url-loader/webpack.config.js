const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/a.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: { limit: 1024 * 150 },
        },
        include: /src/,
      },
    ],
  },
};
