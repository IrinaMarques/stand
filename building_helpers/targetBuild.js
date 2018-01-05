/**
 * 
 * This module will collect and assemble required configurations per target, 
 * eg: (COMMON aka index.js, DEV, CI, QA, PRO).
 * 
 */

const fs                                = require('fs-extra');
const { join }                          = require('path');
const assign                            = require('object-assign');
const requireManifest                   = require('./manifest');
const mergeProps                        = require('./merge');
const { logError, logInfo, logWarning } = require('./debugOutup');
const { isEnvTypeDevelopment } 			= require('./environment');


const loadDependenciesTargetConfigFiles = (basePath, modulePath, moduleManifest, targetType) => {
	const env = process.env;
	const targetDir = (moduleManifest.config.build_target_configs_dir || '').trim();
	const path = join(modulePath, targetDir);

	let configs = {};
	let tempConfigs = {};
	let configKey = '';
	let devConfPath = '';

	if (!targetDir) return configs;

	fs.readdirSync(path).forEach(folderName => {
		try {
			configKey = ''.concat('__', folderName.toUpperCase(), '__');
			devConfPath = join(basePath, ''.concat(folderName, '_DEV'));
			tempConfigs = assign(
				require(join(path, folderName))(env, basePath),
				require(join(path, folderName, targetType))(env, basePath));

			if (isEnvTypeDevelopment()) {
				try {
					tempConfigs = assign(tempConfigs,
						require(devConfPath)(env, basePath) || {});
				} catch (error) {
					logWarning(error);
				};
			};

			configs[configKey] = JSON.stringify(tempConfigs);
		} catch (error) {
			logError(error);
		};
	});

	return configs;
};

const loadTargetConfigFiles = () => {
	const env = process.env;
	const basePath = env.basePath;
	const targetType = ((env.TARGET || 'DEV').trim().toUpperCase());
	const targetDir = (env.npm_package_config_build_target_configs_dir || '').trim();

	return loadDependenciesTargetConfigFiles(basePath, basePath, requireManifest(), targetType);;
};

module.exports = loadTargetConfigFiles;