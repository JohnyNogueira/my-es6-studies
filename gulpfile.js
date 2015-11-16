'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');

gulp.task('run', () => {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('compiled'));
});
 