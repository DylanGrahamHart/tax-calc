var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


// File paths
var cssPaths = 'public/app.scss';

gulp.task('css', function() {
  gulp.src(cssPaths)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    // .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
  gulp.watch(cssPaths, ['css']);
});

gulp.task('default', ['watch', 'css']);