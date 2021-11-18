const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.js');
const common = require('./webpack.common.js');

module.exports = process.env.NODE_ENV === "production" ? common : merge(common, dev);
