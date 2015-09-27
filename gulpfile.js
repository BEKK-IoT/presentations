var gulp = require('gulp'),
  connect = require('gulp-connect'),
  minimist = require('minimist'),
  rename = require('gulp-rename');

var options = minimist(process.argv.slice(2));
var pres = options.pres;
var path = options.path || './presentations/';

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('javascript', function() {
	gulp.src('./app/app.js')
	  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('presentation', function() {
  gulp.src(path + pres + '.txt')
    .pipe(rename('content.txt'))
    .pipe(gulp.dest('./app/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/app.js'], ['javascript']);
  gulp.watch([path + '*.txt'], ['presentation']);
});

gulp.task('serve', ['presentation', 'connect', 'watch']);
