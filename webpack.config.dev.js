const webpack = require("webpack");
const config = require("./webpack.config");

module.exports = Object.assign(config, {
  entry: config.entry.concat(["webpack-hot-middleware/client?reload=true"]),
  plugins: config.plugins.concat([
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ])
});
