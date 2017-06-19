const gulp = require('gulp');
const del = require('del');
const ghPages = require('gulp-gh-pages');

function run(path) {
    const directory = 'gh-pages-temp';

    return gulp.src(path)
        .pipe(ghPages({
            remoteUrl: 'git@github.com:ipetropolsky/jsdoc-example.git',
            cacheDir: directory,
            branch: 'gh-pages'
        }).on('end', () => {
            del(directory);
        }));
}

module.exports = {
    run
};
