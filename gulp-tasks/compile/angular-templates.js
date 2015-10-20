/**
 * Created by x084676 on 10/16/2015.
 */

var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    tap = require('gulp-tap'),
    path = require('path'),
    jade = require('gulp-jade');

gulp.task('angular-templates', function () {
    return gulp.src('./client/**/*.tpl.{html,jade}')
        .pipe(tap(function (file, t) {
            if (path.extname(file.path) === '.jade') {
                return t.through(jade, []);
            }
        }))
        .pipe(templateCache({
            transformUrl: function (url) {
                return url.replace(/\.tpl\.(html|jade)$/, 'tpl.html')
            },
            standalone: true
        }))
        .pipe(gulp.dest('./dist'));
});