var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var paths = {
  scripts: ['client/**/*.js','client/**/*.jsx'],
  stylesheets: ['client/**/*.scss']
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

gulp.task('sass', function () {
  gulp.src('./client/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('server:watch', function() {
  gulp.watch(paths.scripts, ['build']);
  gulp.watch(paths.stylesheets, ['sass'])
});

gulp.task('default', ['build','sass','server:watch']);
