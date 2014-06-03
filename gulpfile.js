// Include gulp
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src('js/FrameManager.js', { read: false } )
        .pipe(browserify({
            debug : true,
            standalone: 'leftylayout'
        }))
        .pipe(rename("leftylayout.js"))
        .pipe(gulp.dest('dist'))
        .pipe(uglify({

        }))
        //.pipe(rename("leftylayout.min.js"))
        //.pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['scripts',  'watch']);