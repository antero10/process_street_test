var gulp = require('gulp'),
    openURL = require('open'),
    bower = require('gulp-bower'),
    connect = require('gulp-connect');


gulp.task('start:server', function() {
  connect.server({
    root: ['app','.'],
    livereload: true,
    host: '0.0.0.0',
    port: 9000
  });
});

gulp.task('bower_install', function() {
  return bower();
});

gulp.task('serve', ['bower_install','start:server'], function () {
  openURL('http://localhost:9000');
});
