var gulp = require('gulp'),
    openURL = require('open'),
    connect = require('gulp-connect');


gulp.task('start:server', function() {
  connect.server({
    root: ['app','.'],
    livereload: true,
    host: '0.0.0.0',
    port: 9000
  });
});

gulp.task('serve', ['start:server'], function () {
  openURL('http://localhost:9000');
});
