import gulp from 'gulp';
import del from 'del';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import importer from 'node-sass-globbing';
import plumber from 'gulp-plumber';
import { log } from 'gulp-util';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import rename from 'gulp-rename';

const SRC_JS_FILES = 'src/js/**/*.js';
const SRC_SCSS_FILES = 'src/sass/**/*.scss';
const TEST_FILES = 'test/unit/test.js';
const SASS_CONFIG = {
  style: 'expanded',
  importer: importer,
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
  ],
};

gulp.task('default', () => {
  // do nothing
});

gulp.task('coverage:clean', () => (
  del(['coverage'])
));

gulp.task('coverage:instrument', () => (
  gulp.src(SRC_JS_FILES)
    .pipe(istanbul({
      instrumenter: Instrumenter,
    }))
    .pipe(istanbul.hookRequire())
));

gulp.task('coverage:report', (done) => (
  gulp.src(SRC_JS_FILES, { read: false })
    .pipe(istanbul.writeReports())
));

gulp.task('unit-test', () => (
  gulp.src(TEST_FILES, { read: false })
    .pipe(mocha({
      reporter: 'spec',
    }))
));

gulp.task('unit-test:coverage', (done) => {
  runSequence(
    'coverage:clean',
    'coverage:instrument',
    'unit-test',
    'coverage:report',
    done
  );
});

gulp.task('sass', () => {
  log('Generate CSS files ' + (new Date()).toString());
  gulp.src(SRC_SCSS_FILES)
    .pipe(plumber())
    .pipe(sass(SASS_CONFIG))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 9'] }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', () => {
  log('Watching scss files for modifications');
  gulp.watch(SRC_SCSS_FILES, ['sass']);
});
