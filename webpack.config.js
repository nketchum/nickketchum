'use strict'

var webpack = require('webpack')
var path = require('path')

var CleanPlugin = require('clean-webpack-plugin')
var CopyPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

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
      { test: /\.(sass|scss)$/, loaders: ['style-loader', 'css-loader', ('sass-loader' + sassIncludes), 'import-glob-loader'] },
      { test: /webfonts\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}) }
    ]
  },
  plugins: [
    new CleanPlugin(['dist'], {
      root: path.resolve(__dirname, './'),
      verbose: true,
      dry: false
    }),
    new CopyPlugin([
      { from: 'src/index.html' },
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
    new ExtractTextPlugin('webfonts.css'),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      mangle: true,
      compress: { warnings: false }
    }),
    // new HtmlWebpackPlugin({
    //   inlineSource: '.(js|css)$'
    // }),
    // new HtmlWebpackInlineSourcePlugin(),
    new webpack.ProvidePlugin({
      Sticky: 'sticky-js'
    }),
    new webpack.ProvidePlugin({
      LazyLoad: 'vanilla-lazyload'
    })
  ]
}
