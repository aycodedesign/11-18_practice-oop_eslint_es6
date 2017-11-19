/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();


gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/*.html', () => {
    browserSync.reload();
  });


  // watch for any changes to our js files
  watch('./app/assets/js/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });
});