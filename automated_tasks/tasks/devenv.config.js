const { fork }                = require('child_process');
const rimraf                  = require('rimraf');
const { resolve }             = require('path');
const { throwError, logInfo } = require('../../building_helpers/debugOutup');
const { 
	browserSync, 
	browserSyncInit, 
	browserSyncReload } = require("./dev/browserSync");

const child = fork(__dirname + '/dev/webpackForkProcess');

/**
 * Start webpack in watch mode, and browserSync with live reload
 */
child.on('message', (response) => {
	switch(response) {
		case 'INIT':
			return browserSyncInit(browserSync);
		case 'RELOAD':
			return browserSyncReload(browserSync);
	};
});

/**
 * Task shutdown detected
 */
if (process.platform === "win32") {
	var rl = require("readline").createInterface({
		input : process.stdin,
		output: process.stdout
	});

	rl.on("SIGINT", function () {
		process.emit("SIGINT");
	});
};

process.on("SIGINT", function () {
	//graceful shutdown
	logInfo('> shutdown');

	rimraf(resolve('./', process.env.npm_package_config_public_dir), () => {

		child.kill('SIGKILL');
		process.exit(0);
	});
});
