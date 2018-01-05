const { join } 	          = require('path');
const { createIndexJS }   = require('../building_helpers/generateAssets');
const package 	           = require('../package.json');
const webpack  	          = require('webpack');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const GenerateAssetPlugin = require('generate-asset-webpack-plugin');
const imageWebpackLoader  = require('image-webpack-loader');

module.exports = (env, basePath) => { 
	let name      = package.name;
	let utilities = join(basePath, env.npm_package_config_src_dir, 'sass/utilities/');
	let dist_dir  = join(basePath, env.npm_package_config_dist_dir);
	
	return {
		target: 'node',

		output: {
			path          : dist_dir,
			filename      : ''.concat('js/', name, '.js'),
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
			new CleanWebpackPlugin([env.npm_package_config_dist_dir], { 'root': basePath }),
			
			new webpack.BannerPlugin('version: ' + package.version),
			
			new CopyWebpackPlugin([{
				context: utilities,
				from: '*',
				to: join(dist_dir, 'sass')
			}]),
			
			new GenerateAssetPlugin({
				filename: '../index.js',
				fn: (compilation, cb) => cb(null, createIndexJS(compilation, package)),
			}),

			new webpack.IgnorePlugin(/vertx/),
		]
	}
};