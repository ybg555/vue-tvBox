var webpack = require('webpack');
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname,'./src/main.js')
  },
  output: {
    path: path.resolve(__dirname,'./dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  cache: true,
  debug: true,
  //devtool: "#inline-source-map"

}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.BannerPlugin('This file is created by Blade')
  ]
} else {
  module.exports.devtool = '#source-map'
}
