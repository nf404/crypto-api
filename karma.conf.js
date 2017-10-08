module.exports = function (config) {
  config.set({
//    basePath: '',
//    autoWatch: true,
//    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test/test.js'
    ],/*
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ],*/
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage', 'mocha'],
    preprocessors: {
      'src/*.js': ['webpack'], // 'coverage',
      'test/*.js': ['webpack']
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'lcovonly', subdir: 'karma'},
        {type: 'json', subdir: 'karma'}
      ]
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015'
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};