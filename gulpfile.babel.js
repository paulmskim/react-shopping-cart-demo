import gulp from 'gulp';
import del from 'del';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import runSequence from 'run-sequence';

const SRC_JS_FILES = 'src/js/**/*.js';
const TEST_FILES = 'test/unit/test.js';

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
