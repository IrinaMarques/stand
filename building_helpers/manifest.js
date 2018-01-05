const { join } = require('path');

let pkg = {};

/**
 * Loads the project manifest and returns it.
 * @returns {object} packge.json
 */
const requirePkg = () => {
	if (pkg.name) return pkg;

	const basePath = process.env.basePath;
	pkg = require(join(basePath, 'package.json'));
	return pkg;
};

module.exports = requirePkg;