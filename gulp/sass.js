// Requires
const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Definitions
const env = process.env.NODE_ENV;

const config = {
  entry: ['scss/components/**/*.scss', 'scss/common.scss'],
  files: ['scss/**/*.scss'],
  output: 'css',
};

gulp.task('sass:compile', () => {
  const processors = [
    autoprefixer()
  ];

  const sassOptions = {
    errLogToConsole: true,
    outputStyle: (env === 'dev') ? 'expanded' : 'compressed',
  };

  return gulp.src(config.entry)
    // .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.output));
});

gulp.task('watch', () => {
  gulp.watch(config.files, gulp.series('sass:compile'));
});