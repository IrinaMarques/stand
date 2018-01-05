const { webpackInit, webpackWatch } = require("./webpack");

process.on('message', (m) => {

});

const compiler = webpackInit(null, function(){
	process.send('INIT');

	webpackWatch(compiler, function(){
		process.send('RELOAD');
	});
});