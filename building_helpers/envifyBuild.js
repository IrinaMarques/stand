/**
 * 
 * This module is an helper for webpack. Its job its to merge common configuration (webpack.config)
 * and specific configuration (eg: 'environment/development'), this way allowing webpack to have building variations.
 * 
 */

const { join } = require('path');
const mergeProps = require('./merge');
const requireManifest = require('./manifest');
const { logError, logInfo, logWarning, devLog, colors } = require('./debugOutup');
const { getEnvType, isEnvTypeProduction, isEnvTypeDevelopment } = require('./environment');


/**
 * loadEnviFile - Resolves the environment configurations localization, 
 * loads the file, and return the content of it.
 * @param {String} basePath, absolute path for the project folder.
 * @returns {Object} environment configurations.
 */
const loadEnviFile = () => {
	const env      = process.env;
	const basePath = env.basePath;
	const envType  = getEnvType();
	const envDir   = (env.npm_package_config_environment_dir || '').trim();
	const filePath = join(basePath, envDir, envType);
	
	try {
		return require(filePath)(env, basePath);
	}catch(e) {
		logError(e);
		return function(){return{}};
	};
};

exports.loadEnviFile = loadEnviFile;