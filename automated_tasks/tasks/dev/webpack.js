const webpack        = require('webpack');
const webpackConfig  = require('../../../webpack.config');
const { throwError, logInfo } = require('../../../building_helpers/debugOutup');

const errorHandler = function(error, stats, reload){
	let jsonStats = stats.toJson({minimal:true});

	logInfo(stats.toString({
		chunks: false,  // Makes the build much quieter
		colors: true    // Shows colors in the console
	}));
	
	if(error){
	 	throwError(error.stack || error);
		(error && error.details && throwError(error.details));
		return;
	}
	
	(reload && reload());

	if(jsonStats.errors.length > 0)
		return throwError(handleSoftErrors(jsonStats.errors));
	
	if(jsonStats.warnings.length > 0)
		throwError(handleWarnings(jsonStats.warnings), 'yellow');
};

const shortError = function(error){
	let errorsList = error[0].split(/\r?\n/);
	errorsList.splice(3, errorsList.length -3);
	return errorsList.join('\n');
}

const handleSoftErrors = function(error){
	let msg = shortError(error);
	return {title: 'webpack:build Error', msg: msg};
};

const handleWarnings = function(error){
	let msg = shortError(error);
	return {title: 'webpack:build Warning', msg: msg};
};



exports.webpackInit = function(error, next){
    return webpack(webpackConfig, function(err, stats){
        
        if (err || stats.hasErrors()){
            
            (error && error(err, stats));
            return errorHandler(err, stats);
        };
        
        (next && next());
    });
};


exports.webpackWatch = function(compiler, reload){
    return compiler.watch({ 
        aggregateTimeout : 300, // wait so long for more changes
        poll             : true // use polling instead of native watchers
        // pass a number to set the polling interval
    }, function(err, stats) {
        errorHandler(err, stats, reload);
    });
};