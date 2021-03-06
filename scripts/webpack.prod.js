const path = require('path')
const externals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    main: [
      'webpack/hot/poll?1000',
      path.join(__dirname, '../src/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../output'),
    libraryTarget: 'commonjs'
  },
  devtool: 'sourcemap',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  externals: [externals({
    whitelist: [/webpack\/hot\/poll/]
  })]
};
