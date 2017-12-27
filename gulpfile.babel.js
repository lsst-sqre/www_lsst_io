import gulp from 'gulp';
import minimist from 'minimist';

// parse command line options
// --env dev (default) | prod
const options = minimist(process.argv);
const env = options.env || 'dev';

// Print the current environment setting
gulp.task('environment', () => console.log(`${env}`));
