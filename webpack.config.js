const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'benchmark': './src/example/benchmark.js',
    'benchmark-other': './src/example/benchmark-other.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/example'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new UnminifiedWebpackPlugin()
  ]
};