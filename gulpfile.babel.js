import gulp from 'gulp';
import browserSync from 'browser-sync';
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

// Initialize browser-sync and watch
gulp.task('browser-sync', ['scss'], () => {
  browserSync.init({
    proxy: "localhost:5000"  // Flask server
  });

  // Watch for Flask app and template changes.
  gulp.watch('wwwlsstio/**/*.{py,jinja}', ['browser-sync-reload']);
  // Watch SCSS
  gulp.watch(`${dirs.scss}/**/*.scss`, ['scss']);
});

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

  // Write out CSS
  stream.pipe(gulp.dest(dirs.static));
  // Stream CSS into the browser
  stream.pipe(browserSync.stream());
  return stream;
});

// Reload Browser Sync (synchronously)
gulp.task('browser-sync-reload', (done) => {
  browserSync.reload();
  done();
});

// Default task
gulp.task('default', ['browser-sync']);
