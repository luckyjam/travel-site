var gulp = require('gulp');
var watch = require('gulp-watch'); 
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log('Hoorayj - you created a Gulp task.');
});

gulp.task('html', function() {
  console.log('Something useful');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, autoprefixer, cssVars, nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
 watch('./app/index.html', function() {
   gulp.start('html');
 });
 watch('./app/assets/styles/**/*.css', function() {
   gulp.start('styles');
 });
});
