var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

////

var cssPaths = 'public/scss/**/*.scss';

gulp.task('css', function() {
  gulp.src(cssPaths)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/scss'}))
    .pipe(rename(function(path){ path.basename = 'app' }))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch(cssPaths, ['css']);
});

gulp.task('default', ['watch', 'css']);