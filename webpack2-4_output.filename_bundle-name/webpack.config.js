const path = require("path");

module.exports = {
  entry: {
    app1: "./a.js",
    app2: "./f.js",
  },
  mode: "none",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname),
  },
};
