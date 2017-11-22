var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  watch: true,

  context: path.resolve('app'),
  entry: './main.js',

  devtool: 'source-map',

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ 
          use: 'css-loader?sourceMap',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          fallback: 'style-loader'
        })
      }           
    ]
  },

  plugins: [
    new ExtractTextPlugin('app.css')
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 1337
  }
  
}