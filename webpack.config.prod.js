const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const env = process.env.NODE_ENV;

module.exports = {
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: '/public/',
    filename: "bundle.js"
  }, 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true
            }
          }]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "main.css" }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ]
}