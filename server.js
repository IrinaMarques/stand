const netutil = require('netutil');


/**
 * Starts the web server 
 * @param {Number} port
 */
const startServer = (port) => {
	require('live-server').start({
		
		/**
		 * Set the server port. Defaults to 8080.
		 */
		port     : port, 

		/**
		 * Set root directory that's being served.
		 * Defaults to cwd.
		 */
		root     : process.env.npm_package_config_public_dir || 'public',

		/**
		 * When set, serve this file for every 404 
		 * (useful for single-page applications)
		 * @type {String}
		 */
		file     : "index.html"
	});
};

(function(){
	let port = process.env.npm_package_config_port;

    if(port) return startServer(port);

	netutil.findFreePort(20000, 60000, '127.0.0.1', function(err, port) {
        startServer(port)
    });
})();