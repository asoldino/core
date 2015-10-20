/**
 * Created by x084676 on 10/14/2015.
 */

'use strict';

var gulp = require('gulp');

gulp.task('clean-dist', startCleanDist);

function startCleanDist() {
    var del = require('del')

    return del([
        'dist/**/*'
    ]);
}