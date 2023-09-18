const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    app1: ["./src/a.js"],
    app2: ["./src/b.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[contenthash:8].js",
  },
};
