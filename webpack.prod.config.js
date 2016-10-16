var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var base = require('./webpack.config');

base.entry = [
    './src/index.tsx'
  ];
base.plugins = [
  new HtmlWebPackPlugin({
         template: 'src/index.html',
         inject: 'body',
         filename: 'index.html'
     })
];

base.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  };

module.exports = base;