/**
 * Created by x084676 on 10/21/2015.
 */

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });
});