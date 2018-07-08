const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "babel-polyfill",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]-[local]--[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(pdf|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `webpack building [:bar] ${chalk.green.bold(":percent")}`,
      complete: chalk.hex("#224dff")("="),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
