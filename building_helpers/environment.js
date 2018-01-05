const getEnvType = () => ((process.env.NODE_ENV || 'production').trim().toLowerCase());

const isEnvTypeProduction = () => (getEnvType() === 'production');

const isEnvTypeDevelopment = () => (getEnvType() === 'development');

exports.getEnvType = getEnvType;
exports.isEnvTypeProduction = isEnvTypeProduction;
exports.isEnvTypeDevelopment = isEnvTypeDevelopment;