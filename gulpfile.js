var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var concat = require('gulp-concat');

var paths = {
  scripts: ['client/**/*.js','client/**/*.jsx']
};

gulp.task('build', function() {
  var b = browserify({
    entries: ['./client/app.js'],
    transform: [reactify],
    debug: true
  });

  return b.bundle()
    .pipe(source('./client/app.js'))
    .pipe(streamify(concat('app.js')))
    .pipe(gulp.dest('./public/scripts/'));
});

gulp.task('build:watch', function() {
  gulp.watch(paths.scripts, ['build']);
});

gulp.task('default', ['build','build:watch']);
