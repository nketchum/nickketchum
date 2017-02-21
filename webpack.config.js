'use strict'

var webpack = require('webpack')
var path = require('path')

var CleanPlugin = require('clean-webpack-plugin')
var CopyPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var sassIncludes  = '?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
    sassIncludes += '&includePaths[]=' + path.resolve(__dirname, './node_modules/singularitygs/stylesheets')
    sassIncludes += '&includePaths[]=' + path.resolve(__dirname, './node_modules/breakpoint-sass/stylesheets')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://nickketchum.dev/',
    filename: 'index.min.js'
  },
  module: {
    rules: [
      { test: /\.(sass|scss)$/, loaders: ['style-loader', 'css-loader', ('sass-loader' + sassIncludes), 'import-glob-loader'] }
    ]
  },
  plugins: [
    new CleanPlugin(['dist'], {
      root: path.resolve(__dirname, './'),
      verbose: true,
      dry: false
    }),
    new CopyPlugin([
      { from: 'src/assets/css',   to: './styles' },
      { from: 'src/assets/jpg',   to: './images' },
      { from: 'src/assets/ico',   to: './images' },
      { from: 'src/assets/svg',   to: './images' },
      { from: 'src/assets/ttf',   to: './fonts' },
      { from: 'src/assets/woff',  to: './fonts' },
      { from: 'src/assets/woff2', to: './fonts' }
    ],
      { ignore: ['.DS_Store', 'Thumbs.db'] }
    ),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      mangle: true,
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),
    new webpack.ProvidePlugin({
      Sticky: 'sticky-js'
    }),
    new webpack.ProvidePlugin({
      LazyLoad: 'vanilla-lazyload'
    })
  ]
}
