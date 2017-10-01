var gulp = require('gulp');
var watch = require('gulp-watch'); 
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function() {
  console.log('Hoorayj - you created a Gulp task.');
});

gulp.task('html', function() {
  console.log('Something useful');
});

gulp.task('styles', function() {
  return gulp.src('./app/assests/styles/styles.css')
    .pipe(postcss([autoprefixer, cssvars, nested]))
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
