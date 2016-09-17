var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssbeautify = require('gulp-cssbeautify');

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
    .pipe(gulp.dest('new_css'))
});

gulp.task('beautify', function(){
  gulp.src('style.css')
    .pipe(cssbeautify())
    .pipe(gulp.dest('beauty-css'))
});
