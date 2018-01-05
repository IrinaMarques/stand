const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

const { loadEnviFile } = require('./building_helpers/envifyBuild');
const loadTargetConfigFiles = require('./building_helpers/targetBuild');
const mergeProps = require('./building_helpers/merge');
const { isEnvTypeProduction } = require('./building_helpers/environment');
const requireManifest = require('./building_helpers/manifest');
const { logInfo, logError, logWarning, devLog } = require('./building_helpers/debugOutup');


const webpackConfig = (basePath, context, output, env, pkg, configs, definitions) => {
	return {
		context: context,

		entry: {
			main: './main.js'
		},

		output: {
			publicPath: '/',
			path: join(basePath, output),
			filename: 'js/[name].bundle.js',
			chunkFilename: 'js/[name].bundle.js'
		},

		resolve: {
			extensions: ['.js', '.jsx'],

			alias: {
				dashboardImages: join(context, 'assets/dashboard/images/'),
				standImages: join(context, 'assets/stand/images/')
			}
		},

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'env', {
										modules: false,
										debug: true,
										targets: {
											browsers: ['last 2 Chrome versions'],
											uglify: true
										}
									}
								],
								'react'
							],
							plugins: [
								'syntax-dynamic-import', //This will enabel async import('<module>').then(...)
								'transform-runtime' // This will avoid the duplication of babel helpers
							]
						}
					}],
					exclude: [/node_modules/, /test/]
				}, {
					test: /TranslationsHandler.js/,
					use: [{
						loader: StringReplacePlugin.replace({
							replacements: [{
								pattern: /<!-- @defaultLng (\w*?) -->/ig,
								replacement: (match, p1, offset, string) => definitions[p1]
							}]
						})
					}],
				}, {
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader?sourceMap"
					}),
				}, {
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
							{
								loader: "css-loader?sourceMap"
							}, {
								loader: "sass-loader?sourceMap"
							}
						]
					}),
				}, {
					test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
					exclude: [join(context, 'assets/dashboard/images/'), join(context, 'assets/stand/images/')],
					loader: ['url-loader?name=assets/fonts/[name].[ext]&limit=10000'],
				}, {
					test: /\.mp3$/,
					use: ['file-loader?name=assets/audios/[name].[ext]&limit=10000&mimetype=audio/mpeg'],
				}
			]
		},

		plugins: [
			new CleanWebpackPlugin(['index.js', output], { 'root': basePath }),

			new webpack.EnvironmentPlugin(['NODE_ENV']),

			new webpack.DefinePlugin(configs),

			new HtmlWebpackPlugin({
				title: env.npm_package_name,
				template: './index.html'
			}),

			new ExtractTextPlugin("css/[name].css")
		],

		stats: {
			colors: true
		},

		devtool: 'source-map'
	}
};

const log = (context, output, env, pkg, configs) => {
	logInfo('> TASK STARTED BY: ' + devLog(require("os").userInfo().username) + '\n');
	logInfo('> MODULE NAME: ' + devLog(pkg.name) + '\n');
	logInfo('> MODULE VERSION: ' + devLog(pkg.version) + '\n');
	logInfo('> SRC DIR: ' + devLog(context) + '\n');
	logInfo('> OUTPUT DIR: ' + devLog(output) + '\n \n');
	logInfo('> BUILD ENVIRONMENT: ' + devLog(env.NODE_ENV, 'red') + '\n');
	logInfo('> BUILD CONFIGURATIONS TARGET: ' + devLog(env.TARGET, 'red') + '\n');
	console.log(configs);
	logInfo('\n \n');
};

const defaultConfigs = pkg => mergeProps({
	'__VERSION__': JSON.stringify(pkg.version),
	'__NAME__': JSON.stringify(pkg.namespace || pkg.name),
	'__DESCRIPTION__': JSON.stringify(pkg.description),
	'__PRODUCTION__': JSON.stringify(isEnvTypeProduction()),
	'__MAINTAINERS__': JSON.stringify(pkg.maintainers)
}, loadTargetConfigFiles());

const getDefinitions = configs => {
	try {
		return JSON.parse(configs['__DEFINITIONS__']);
	} catch (e) {
		logWarning('"definitions" folder with configurations files is required inside the "build_target_configs"!')
		logError(e);
		return {};
	};
};

module.exports = (function () {
	const basePath = process.env.basePath = resolve(__dirname, './');
	const pkg = requireManifest();
	const pkgConf = pkg.config;
	const env = process.env;
	const context = join(basePath, pkgConf['src_dir']);
	const output = pkgConf['public_dir'];
	const configs = defaultConfigs(pkg);
	const definitions = getDefinitions(configs);

	const _commonWebpackConfig = webpackConfig(basePath, context, output, env, pkg, configs, definitions)
	const _envWebpackConfig = loadEnviFile();
	const _finalWebpackConfig = mergeProps(_commonWebpackConfig, _envWebpackConfig);

	log(context, join(basePath, output), env, pkg, configs);

	return _finalWebpackConfig;
})();