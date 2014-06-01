// Include gulp
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
    gulp.src('js/App.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(gulp.dest('build'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'));
});

gulp.task('html', function() {
    gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/**.js', ['scripts']);
    gulp.watch('index.html', ['html']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'html',  'sass', 'watch']);