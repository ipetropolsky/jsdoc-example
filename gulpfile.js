const gulp = require('gulp');
const del = require('del');
const taskListing = require('gulp-task-listing');
const ghPages = require('./gulp/ghPages');
const jsdoc = require('./gulp/jsdoc');
const runSequence = require('run-sequence');


gulp.task('clean', (callback) => {
    del('./build/**').then(() => {
        callback();
    });
});

gulp.task('jsdoc', (callback) => {
    jsdoc.run('js', callback, true);
});

gulp.task('build', (callback) => {
    runSequence('clean', 'jsdoc', callback);
});

gulp.task('gh-pages', ['build'], () => {
    return ghPages.run('./build/docs/**/*');
});

gulp.task('default', (callback) => {
    taskListing();
    callback();
});
