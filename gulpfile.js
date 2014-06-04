// Include gulp
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');

gulp.task('scripts', function() {
    gulp.src('js/FrameManager.js', { read: false } )
        .pipe(browserify({
            debug : false,
            standalone: 'leftylayout'
        }))
        .pipe(rename("leftylayout.js"))
        .pipe(gulp.dest('dist'))
        .pipe(uglify({

        }))
        //.pipe(rename("leftylayout.min.js"))
        //.pipe(gulp.dest('dist'));
});

gulp.task('tests', function () {
    gulp.src('specs/*Spec.js', { read: false } )
        .pipe(browserify())
        .pipe(jasmine());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('specs/**.js', ['tests']);
});

// Default Task
gulp.task('default', ['scripts',  'tests', 'watch']);