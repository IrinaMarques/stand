const browserSync = require("browser-sync");
const path        = require('path');
const url         = require("url");
const fs          = require("fs");
const netutil     = require('netutil');



const root       = path.resolve(__dirname, '../../../');
const publicDir  = process.env.npm_package_config_public_dir;
const middleware = function(req, res, next) {
    let fileName   = url.parse(req.url);
    let fileExists = false;

    fileName   = fileName.href.split(fileName.search).join("");
    fileExists = fs.existsSync(path.join(root, publicDir, fileName));
    
    if (!fileExists && fileName.indexOf("browser-sync-client") < 0) req.url = "/index.html" ;
    return next();
};
const startBS = function(bs, port){
    bs.init({
        server: {
            baseDir    : publicDir, 
            middleware : middleware
        }, 

        port: port
    });

    return bs;
};



exports.browserSync = browserSync.create();

exports.browserSyncReload = function(bs){
    bs.reload();
    return bs;
};

exports.browserSyncInit = function(bs){
    let port = process.env.npm_package_config_port;

    if(port) return startBS(bs, port);
    
    netutil.findFreePort(20000, 60000, '127.0.0.1', function(err, port) {
        startBS(bs, port)
    });

    return bs;
};

