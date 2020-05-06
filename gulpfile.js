const gulp = require('gulp');
const requireDir = require('require-dir');

// Pulling in all tasks from the tasks folder
requireDir('./gulp', {recurse: true});

gulp.task('build', gulp.series('clean', 'sass:compile'));
gulp.task('default', gulp.series('clean', 'sass:compile', 'watch'));