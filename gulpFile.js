(function () {
    process.chdir('.');

    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({lazy: false});

    require('require-dir')('./gulp-tasks', {recurse: true});

    gulp.task('default', $.sequence('clean-dist', 'publish-html', 'angular-templates', 'sass', 'watch', 'serve'));
})();