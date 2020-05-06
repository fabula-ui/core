const gulp = require('gulp');
const rimraf = require('rimraf').sync;

gulp.task('clean', async () => {
  rimraf('css');
});