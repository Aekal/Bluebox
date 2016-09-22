var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssbeautify = require('gulp-cssbeautify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


// Browser Sync - live preview
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('css/style.css', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});

// CSS Beautify - format css styles to be easy to read
gulp.task('beautify', function(){
  gulp.src('css/style.css')
    .pipe(cssbeautify())
    .pipe(gulp.dest('dest/css'))
});

// Autoprefixer - prefixes for browsers support
gulp.task('autoprefixer', function() {
  gulp.src('css/style.css')
  .pipe(autoprefixer({
    browsers: ['Safari >= 6.1', 'IE >= 10', 'Firefox >= 28'],
    cascade: false}))
    .pipe(gulp.dest('dest/css'))
  });

// Mix beautify and autoprefixer
gulp.task('mix-css', function(){
  gulp.src('css/style.css')
  .pipe(cssbeautify())
  .pipe(autoprefixer({
    browsers: ['Safari >= 6.1', 'IE >= 10', 'Firefox >= 28'],
    cascade: false}))
  .pipe(gulp.dest('dest/css'))
  });

// Minify css & create source map
gulp.task('min-css', function() {
  return gulp.src('css/style.css')
  .pipe(sourcemaps.init())
  .pipe(concat('style.min.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('maps'))
});

// Minify JS
gulp.task('uglify', function() {
  gulp.src('js/main.js')
    .pipe(sourcemaps.init())
      .pipe(concat('main.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('maps'));
});
