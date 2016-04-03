var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var uglify     = require('gulp-uglify');
var streamify  = require('gulp-streamify');
var source     = require('vinyl-source-stream');
var util       = require('gulp-util');

gulp.task('build', function() {
  browserify('./src/build.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', function(err) {
      util.log(util.colors.bgRed(err.message));
      util.beep();
      this.emit('end');
    })
    .pipe(source('signature.js'))
    .pipe(streamify(uglify())) // can comment this line for development
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ['watch', 'build']);
