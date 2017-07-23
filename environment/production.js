const { join } = require('path');
const package  = require('../package.json');
const webpack  = require('webpack');

module.exports = function(env, basePath){ 
	let name = package.name;

	return {
		target: "web",

		output: {
			path          : join(basePath, env.npm_package_config_public_dir),
			filename 	  : 'js/[name].bundle.js',
			library       : name,
			libraryTarget : 'umd'
		},
		
		plugins: [
			new webpack.BannerPlugin("version: " + package.version)
		]
	}
};