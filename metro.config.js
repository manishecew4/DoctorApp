const { withRozenite } = require('@rozenite/metro');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {};

module.exports = withRozenite(mergeConfig(getDefaultConfig(__dirname), config), { enabled: process.env.WITH_ROZENITE === 'true' });