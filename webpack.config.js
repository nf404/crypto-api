'use strict';

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'crypto-api': './src/crypto-api.js',
    'example/hasher-basic': './example/hasher-basic.js',
    'example/hasher-file': './example/hasher-file.js',
    'example/benchmark': './example/benchmark.js',
    'example/benchmark-other': './example/benchmark-other.js',
    'example/unit-tests': './example/unit-tests.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'Hasher method basic usage',
      chunks: ['example/hasher-basic'],
      filename: 'example/hasher-basic.html',
      template: 'example/hasher-basic.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Hashing files',
      chunks: ['example/hasher-file'],
      filename: 'example/hasher-file.html',
      template: 'example/hasher-file.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Benchmark',
      chunks: ['example/benchmark'],
      filename: 'example/benchmark.html',
      template: 'example/benchmark.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Benchmark',
      chunks: ['example/benchmark-other'],
      filename: 'example/benchmark-other.html',
      template: 'example/benchmark-other.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Unit tests',
      chunks: ['example/unit-tests'],
      filename: 'example/unit-tests.html',
      template: 'example/unit-tests.html'
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'bootstrap',
          entry: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
        },
      ],
      files: ['example/hasher-file.html'],
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'astrobench',
          entry: [
            'https://cdn.rawgit.com/kupriyanenko/astrobench/master/dist/astrobench.min.js',
            'https://cdn.rawgit.com/kupriyanenko/astrobench/master/src/style.css'
          ],
        },
      ],
      files: ['example/benchmark.html', 'example/benchmark-other.html'],
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'crypto-js',
          entry: 'https://cdn.rawgit.com/brix/crypto-js/master/crypto-js.js'
        },
        {
          module: 'jshashes',
          entry: 'https://cdn.rawgit.com/h2non/jshashes/master/hashes.js'
        },
        {
          module: 'jsSHA',
          entry: 'https://cdn.rawgit.com/Caligatio/jsSHA/master/src/sha.js'
        },
        {
          module: 'asmCrypto',
          entry: 'https://cdnjs.cloudflare.com/ajax/libs/asmCrypto/0.0.11/asmcrypto.js'
        },
      ],
      files: ['example/benchmark-other.html'],
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'mocha',
          entry: [
            'https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js',
            'https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css'
          ],
        },
      ],
      files: ['example/unit-tests.html'],
    }),
    new UnminifiedWebpackPlugin()
  ]
};