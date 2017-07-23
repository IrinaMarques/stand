const notifier = require('node-notifier');

/**
 * Changes the terminal text color
 * @param {String} log, text to change color
 * @param {String} color, the desired color
 * @returns {String} log
 */
const colors = (log, color) => {
    if(!log || !color) return log;

    switch(color) {
        case 'red':
            return ('\033[31m' + log + '\x1b[0m');

        case 'yellow':
            return ('\x1b[33m' + log + '\x1b[0m');

        case 'green':
            return ('\x1b[32m' + log + '\x1b[0m');

        default:
            return log;
    };
};

/**
 * Throws the error to the terminal and system push notification.
 * The error object must have a title and message.
 * @param {Object} error, object with the title and message to output
 * @param {String} color, whose the output text should be
 */
const throwError = (error, color) => {
    logError(error.msg, color);
	notifier.notify({ title: error.title, message: error.msg });
};

/**
 * Throws the error to the terminal
 * @param {String} error, text to output
 * @param {String} color, whose the output text should be <optional>
 */
const logError = (error, color) => {
	console.error( colors(error, (color || 'red')) );
};

/**
 * Throws a message to the terminal
 * @param {String} msg, text to output
 * @param {String} color, whose the output text should be <optional>
 */
const logInfo = (msg, color) => {
	console.log( (color ? colors(msg, color) : msg) );
};

exports.colors     = colors;
exports.throwError = throwError;
exports.logError   = logError;
exports.logInfo    = logInfo;