//import $config from './config/config';
import gulp from 'gulp';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import notify from 'gulp-notify';
import mocha from 'gulp-mocha';

/**
 * Unit Test solo para el servidor por ahora
 */
gulp.task('test', () => {
    return gulp.src([
        'app/**/*Test.js'
    ])
    .pipe(mocha());
});

gulp.task('livereload', () => {
    livereload({ start: true });
});

gulp.task('start-dev', () => {
    livereload.listen();

    nodemon({
        script: 'server.js',
        ext: 'js', 
        env: {
            'NODE_ENV': 'develepment'
        }
    }).on('restart', () => {
        gulp.src('server.js')
        .pipe(livereload())
        .pipe(notify('Reloading page, please wait...'));
    });
});

gulp.task('start', () => {
    nodemon({
        script: 'server.js',
        ext: 'js', 
        env: {
            'NODE_ENV': 'production'
        }
    });
});

gulp.task('default', ['livereload', 'start-dev']);