const assign = require('object-assign');

/**
 * mergeProps - Merges the properties of two objects,
 * and return a single unified object.
 * @param {Object} config, Object with properties to be overwritten or added
 * @param {Object} envConfig, set of properties to merger
 * @returns {Object} newConfig, new object with the merged properties
 */
const mergeProps = (config, toMergeConfig) => {
	let newValue;
	let newConfig = assign({}, config);

	if (toMergeConfig) {
		for (var key in toMergeConfig) {

			if (typeof toMergeConfig[key] === 'object' && !Array.isArray(toMergeConfig[key])) {
				newValue = mergeProps(config[key], toMergeConfig[key]);
			} else if (Array.isArray(toMergeConfig[key])) {
				newValue = [].concat(config[key], toMergeConfig[key]);
			} else {
				newValue = toMergeConfig[key]
			};

			newConfig[key] = newValue;
		};
	};

	return newConfig;
};

module.exports = mergeProps;