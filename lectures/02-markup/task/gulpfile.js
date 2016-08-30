var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    rigger = require('gulp-rigger'),
    connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
      root: ['./'],
      livereload: true
    });
});


gulp.task('less', function () {
  gulp.src('./assets/less/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  watch(['./assets/less'], function (event, cb) {
    gulp.start('less');
  });
});

gulp.task('build', ['less']);
gulp.task('default', ['connect', 'build', 'watch']);