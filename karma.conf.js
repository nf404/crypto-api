module.exports = function (config) {
  config.set({
//    basePath: '',
//    autoWatch: true,
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'src/*.js',
//      'test/*.js',
      'test/test.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['mocha'], // 'progress', 'coverage', 'coverage-istanbul',
    preprocessors: {
      'src/*.js': ['webpack'], // , 'coverage'
      'test/*.js': ['webpack'] // , 'sourcemap'
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'lcovonly', subdir: 'karma'},
        {type: 'json', subdir: 'karma'},
        {type: 'html', subdir: 'karma'}
      ]
    },
    webpack: {
      module: {
/*        rules: [
          // instrument only testing sources with Istanbul
          {
            test: /\.js$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.js$/ //,            include: require('path').resolve('src/')
          }
        ],*/
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015',
//            options: { sourceMap: 'inline', plugins: ['istanbul'] },
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