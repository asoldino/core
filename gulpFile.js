(function () {
    process.chdir('.');

    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({lazy: false});

    var requireDir  = require( 'require-dir' );

    requireDir('./gulp-tasks', {recurse: true});

    var paths = {
        index: './client/index.html',
        root: './client',
        html: './client/**/*.html',
        scripts: './client/app/**/*.js',
        styles: './client/app/**/*.css'
    };

    gulp.task('default', $.sequence('clean-dist', 'publish-html', 'angular-templates', 'watch', 'server'));
    gulp.task('server', startServer);

    function startServer() {
        require('./server');

    }

})();