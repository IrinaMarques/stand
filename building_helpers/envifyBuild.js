const { join } = require('path');
const assign   = require('object-assign');
const { logError, logInfo, colors } = require('./debugOutup');

let pkg = {};
let regExpPattern = '';

/**
 * Loads the project manifest and returns it.
 * @returns {object} packge.json
 */
const requirePkg = () => {
	if(pkg.name) return pkg;

	const basePath = process.env.basePath;
	pkg = require(join(basePath, 'package.json'));
	return pkg;
};

/**
 * Builds a dynamic regex to match UI modules,
 * This will allow babel to convert any UI code to ES5.
 * @returns {RegExp} Pattern to match all UI modules
 */
const buildPattern = () => {
	if(regExpPattern) return regExpPattern;

	const dependencies = requirePkg().dependencies;
	let patterns = [];
	
	Object.keys(dependencies).map((key) => {
	
		if(key.indexOf('ui-') > -1 && dependencies[key].indexOf('git+') > -1) {
			patterns.push(''.concat('node_modules\\', key,'|node_modules\\\\', key, '|node_modules\/', key));
		};
	});

	regExpPattern = patterns.join('|');
	return regExpPattern;
};

/**
 * loadEnviFile - Resolves the environment configurations localization, 
 * loads the file, and return the content of it.
 * @param {String} basePath, absolute path for the project folder.
 * @returns {Object} environment configurations.
 */
const loadEnviFile = (basePath) => {
	let env       		= process.env;
	let envType   		= env.NODE_ENV || 'production';
	let environmentDir  = env.npm_package_config_environment_dir;
	
	env._basePath = basePath;

	try {
		logInfo('> WEBPACK:BUILD STARTS AS: ' + colors(envType, 'red'));
		return require(join(basePath, environmentDir, envType.trim()))(env, basePath);
	}catch(e) {
		logError(e);
		return function(){return{}};
	};
};

/**
 * mergeProps - Merges the properties of two objects,
 * and return a single unified object.
 * @param {Object} config, Object with properties to be overwritten or added
 * @param {Object} envConfig, set of properties to merger
 * @returns {Object} newConfig, new object with the merged properties
 */
const mergeProps = (config, envConfig) => {
	let newValue;
	let newConfig = assign({}, config);
	
	if(envConfig){
		for(var key in envConfig){

			if( typeof envConfig[key] === 'object' && !Array.isArray(envConfig[key])) {
				newValue = mergeProps(config[key], envConfig[key]);
			}else if( Array.isArray(envConfig[key]) ){
				newValue = [].concat(config[key], envConfig[key]);
			}else{
				newValue = envConfig[key]
			};

			newConfig[key] = newValue;
		};
	};

	return newConfig;
};


const BabelExcludeNotUIModules = (modulePath) => {
	
	const pattern = buildPattern();

	// All files inside node_modules or test will be excluded
	// However the files inside a "ui-" module will be processed
	const test = ((/node_modules/.test(modulePath)) && !(new RegExp(pattern).test(modulePath)) || (/test/.test(modulePath)));

	if(!test) logInfo(colors('> BABEL FILE: ', 'green') + modulePath);
	return test;
};

exports.loadEnviFile = loadEnviFile;
exports.mergeProps = mergeProps;
exports.BabelExcludeNotUIModules =  BabelExcludeNotUIModules;