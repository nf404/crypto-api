const path = require('path');

module.exports = {
  entry: {
    'benchmark': './src/example/benchmark.js',
    'benchmark-other': './src/example/benchmark-other.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/example'),
    filename: '[name].js'
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
  }
};