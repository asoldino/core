// Karma configuration
// Generated on Mon Oct 19 2015 13:29:59 GMT+0200 (W. Europe Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'jasmine'],

        browserify: {
            debug: true,
            transform: [['babelify', {stage: 0}]],
            bundleDelay: 1000
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: '.*/client/',
            stripSuffix: '',
            // prepend this to the
            prependPrefix: '',

            // - setting this option will create only a single module that contains templates
            //   from all the files, so you can load them all with module('foo')
            // - you may provide a function(htmlPath, originalPath) instead of a string
            //   if you'd like to generate modules dynamically
            //   htmlPath is a originalPath stripped and/or prepended
            //   with all provided suffixes and prefixes
            moduleName: 'templates'
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../../client/app/index.js': ['browserify'],
            '../../client/app/**/*.tpl.html': ['ng-html2js']
        },


        // list of files / patterns to load in the browser
        files: [
            '../../client/app/index.js',
            '../../node_modules/angular-mocks/angular-mocks.js',
            '../../client/**/*spec.js',

            {pattern: '../../client/**/*.js', watched: true, included: false, served: false},
            {pattern: '../../client/**/*.tpl.html', watched: true, included: true, served: true}
        ],


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}
