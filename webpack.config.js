const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "src/app.js")],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: ["file-loader"]
      },
      {
        test: /(\.css|\.scss)$/,
        include: path.join(__dirname, "src"),
        loaders: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            query: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 })
  ]
};
