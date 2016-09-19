var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssbeautify = require('gulp-cssbeautify');
var uglify = require('gulp-uglifyjs');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('style.css', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('autoprefixer', function() {
  gulp.src('style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('prefixed-css'))
});

gulp.task('beautify', function(){
  gulp.src('style.css')
    .pipe(cssbeautify())
    .pipe(gulp.dest('beauty-css'))
});

gulp.task('uglify', function() {
  gulp.src('js/*.js')
    .pipe(uglify('main.min.js', {
      outSourceMap: true
    }))
    .pipe(gulp.dest('min-js'))
});

gulp.task('minify-css', function() {
    return gulp.src('css/style.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('min-css'))
});
