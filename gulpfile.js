var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin')
var browserSync = require('browser-sync').create();

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
