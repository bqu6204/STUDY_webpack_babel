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
        test: /\.jpeg$/,
        use: "file-loader",
        include: /src/,
      },
    ],
  },
};
