const util = require('gulp-util');
const chalk = require('chalk');

const logMessage = function(taskName, message) {
    util.log((taskName ? `${chalk.cyan(taskName)} ` : '') + chalk.yellow(message));
};

const logError = function(error) {
    let message;

    if (error.message) {
        message = (error.plugin ? `${chalk.cyan(error.plugin)}: ` : '') + chalk.red(error.message);
    } else {
        message = chalk.red(error);
    }

    util.log(message);
};

module.exports = {
    logError,
    logMessage
};
