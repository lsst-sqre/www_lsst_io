import gulp from 'gulp';
import sass from 'gulp-sass';
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

// Print the current environment setting
gulp.task('environment', () => console.log(`${env}`));

// Compile Scss
// gulp scss
gulp.task('scss', () => {
  return gulp.src(`${dirs.scss}/app.scss`)
    .pipe(sass.sync({ includePaths: sassIncludes }).on('error', sass.logError))
    .pipe(gulp.dest(dirs.static))
});
