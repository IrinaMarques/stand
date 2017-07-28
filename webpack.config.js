const { resolve, join }  = require('path');
const { logInfo }  		 = require('./building_helpers/debugOutup');
const webpack            = require('webpack');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { mergeProps, loadEnviFile, BabelExcludeNotUIModules } = require('./building_helpers/envifyBuild');

module.exports = (function(){
	let env       = process.env;
	let basePath  = resolve(__dirname, './');
	let context   = join(basePath, env.npm_package_config_src_dir);
	let output    = env.npm_package_config_public_dir;

	process.env.basePath = basePath;

	logInfo('> SRC DIR: ' + context);
	logInfo('> OUTPUT DIR: ' + output);

	return mergeProps({
		context : context,
		
		entry   : {
			main: './js/main.js'
		},

		output: {
			path         : join(basePath, output),
			publicPath   : '/',
			filename     : 'js/[name].bundle.js',
			chunkFilename: 'js/[name].bundle.js'
		},

		resolve: {
			extensions: ['.js', '.jsx']
		},

		module: {
			rules: [{
				test: /\.(js|jsx)$/,
				use : [{
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'env', {
									modules: false,
									debug  : true,
									targets: {
										browsers: ['last 2 versions', 'ie >= 9']
									}
								}
							], 
							[
								'es2015', {
									modules: false
								}
							], 
							'react', 
							'stage-2'
						],
						plugins: [
							'syntax-dynamic-import', //This will enabel async import('<module>').then(...)
							'transform-runtime' // This will avoid the duplication of babel helpers
						]
					}
				}],
				exclude: [/node_modules/,/test/]
			}, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                	fallback: "style-loader",
                	use     : "css-loader?sourceMap"
				})
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                	fallback: "style-loader",
                	use     : "css-loader?sourceMap!sass-loader?sourceMap"
				})
            }, {
                test: /\.(svg|ttf|woff|woff2|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: ['url-loader']
            }]
		},

		plugins: [
			new CleanWebpackPlugin(['index.js'], { 'root': basePath }),
			
			new webpack.EnvironmentPlugin(['NODE_ENV']),

			new HtmlWebpackPlugin({
				title        : env.npm_package_name,
				template     : './index.html'
			}),
			
			new ExtractTextPlugin("css/[name].css")
		],

		stats: {
	        colors : true
	    },

		devtool : 'source-map'
	}, loadEnviFile(basePath));
})();