var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var base  = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebPackPlugin({
         template: 'src/index.html',
         inject: 'body',
         filename: 'index.html'
     }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.ts/,
      loaders: ['react-hot', 'babel', 'awesome-typescript-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  }

};

module.exports = base;