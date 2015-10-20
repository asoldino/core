/**
 * Created by x084676 on 10/19/2015.
 */

var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('ci', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        browsers: ['Chrome'],
        reporters: ['html', 'progress']
    }, done).start();
});