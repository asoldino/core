/**
 * Created by x084676 on 10/14/2015.
 */

'use strict';

var gulp = require('gulp');

gulp.task('publish-html', startPublishHtml);

function startPublishHtml() {
    gulp.src('./client/**/*.html')
        .pipe(gulp.dest('./dist'));
}