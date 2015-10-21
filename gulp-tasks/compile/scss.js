/**
 * Created by x084676 on 10/21/2015.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    eventstream = require('event-stream'),
    concat = require('gulp-concat'),
    reload = require('browser-sync').reload;

gulp.task('sass', function () {
    return gulp.src('./client/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
                outputStyle: 'compressed'
            }
        ).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});

gulp.watch('./client/**/*.scss', ['sass']);