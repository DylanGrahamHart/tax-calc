var path = require('path');

module.exports = {
  watch: true,
  context: path.resolve('app'),
  entry: './main.js',
  // devtool: 'source-map',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve('public'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 1337
  }
}
