const { webpackInit, webpackWatch }                   	  = require("./dev/webpack");
const { browserSync, browserSyncInit, browserSyncReload } = require("./dev/browserSync");


const compiler = webpackInit(null, function(){
	
	browserSyncInit(browserSync);
	webpackWatch(compiler, function(){
		browserSyncReload(browserSync);
	});
});




/**
 * Start webpack in watch mode, and browserSync with live reload
 */



