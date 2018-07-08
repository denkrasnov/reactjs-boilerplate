const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/public/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
