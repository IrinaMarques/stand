module.exports = (env) => { 
	return {
		target : "web",
		devtool: 'source-map',
		
		module: {
			rules: [
				{
					test: /\.(gif|png|jpeg|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: ['url-loader?name=assets/images/[name].[ext]&limit=10000']
				}
			]
		}
	}
};