/**
 * Will generate the index.js file with the dynamic path to the compiled bundle
 * @param {Object} compilation
 * @param {Object} pkg - application manifest package.json
 * @returns {String}
 */
const createIndexJS = (compilation, pkg) => {
    let path = './'.concat(pkg.config.src_dir, '/main')
    
    return (`'use strict';\n /** THIS FILE IS DYNAMICALLY GENERATED **/\n module.exports = require('`+ path +`');`);
};

exports.createIndexJS = createIndexJS;