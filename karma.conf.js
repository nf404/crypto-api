module.exports = function(config) {
    config.set({
        basePath: '',
        autoWatch: true,
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'https://cdnjs.cloudflare.com/ajax/libs/chai/3.4.1/chai.min.js',
            'lib/crypto-api.js',
            'lib/enc.*.js',
            'lib/hasher.*.js',
            'lib/mac.*.js',
            'test/test-vectors/hash.js',
            'test/test-vectors/hmac.js',
            'test/nodejs.js'
        ],
        plugins: [
            'karma-coverage',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ],
        browsers: ['PhantomJS'],

        reporters: ['progress', 'coverage', 'mocha'],
        preprocessors: {
            'lib/*.js': ['coverage']
        },
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'lcovonly', subdir: 'karma' },
                { type: 'json', subdir: 'karma'}
            ]
        }
    });
};