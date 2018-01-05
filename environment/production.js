const { join }            = require('path');
const package             = require('../package.json');
const webpack             = require('webpack');
const imageWebpackLoader  = require('image-webpack-loader');

module.exports = (env, basePath) => { 
	let name = package.name;

	return {
		target: "web",

		output: {
			path          : join(basePath, env.npm_package_config_public_dir),
			filename 	  : 'js/[name].bundle.js',
			library       : name,
			libraryTarget : 'umd'
		},

		module: {
			rules: [
				{
					test: /\.(gif|png|jpeg|svg)$/i,
					use: [
						'file-loader', 
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: {
									progressive: true,
									quality: 65
								},
								optipng: {
									quality: 65
								},
								pngquant: {
									quality: '65-90',
									speed: 4
								},
								gifsicle: {
									interlaced: false,
								},
								webp: {
									quality: 75
								}
							}
						}
					]
				}
			]
		},
		
		plugins: [
			new webpack.BannerPlugin("version: " + package.version)
		],

		devtool: false
	}
};