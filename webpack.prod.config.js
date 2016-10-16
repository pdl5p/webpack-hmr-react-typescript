var path = require('path');
var webpack = require('webpack');

var base = require('./webpack.config');

base.entry = [
    './src/index.tsx'
  ];
base.plugins = [];

module.exports = base;