const logger = require('./logger');
const childProcess = require('child_process');
const jsdocCommand = require.resolve('jsdoc/jsdoc.js');

function run(path, callback, failOnError) {
    childProcess.exec(
        [
            jsdocCommand,
            path,
            '-r',
            '-c', './.jsdoc'
        ].join(' '),
        (error) => {
            if (error) {
                if (failOnError) {
                    return callback(error);
                }
                logger.logError(error);
            }
            callback();
        }
    );
}

module.exports = {
    run
};
