import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import minimist from 'minimist';

// parse command line options
// --env dev (default) | prod
const options = minimist(process.argv);
const env = options.env || 'dev';


// Source and build directories
const dirs = {
  scss: 'scss', // Scss source directory
  static: 'wwwlsstio/static', // Flask app static assets directory
};

// Sass modules installed via npm: these are added to node-sass's search paths.
const sassIncludes = [
  'node_modules',
];

// clean-css configurations, mapped to environment
// https://github.com/jakubpawlowicz/clean-css
let cleanCssConfig = new Map();
cleanCssConfig.set('dev', {
  compatibility: '*',
  level: 2,
  format: 'beautify'
});
cleanCssConfig.set('prod', {
  compatibility: '*',
  level: 2
});

// Print the current environment setting
gulp.task('environment', () => console.log(`${env}`));

// Compile Scss
// gulp scss
gulp.task('scss', () => {
  let stream = gulp.src(`${dirs.scss}/app.scss`)
    // Initialize sourcemaps
    .pipe(sourcemaps.init())
    // Compile scss
    .pipe(sass.sync({ includePaths: sassIncludes }).on('error', sass.logError))
    // Optimize css
    .pipe(cleanCSS(cleanCssConfig.get(env)));

  if (env === 'dev') {
    // Write out sourcemaps
    stream.pipe(sourcemaps.write());
  }

  stream.pipe(gulp.dest(dirs.static));
  return stream;
});
