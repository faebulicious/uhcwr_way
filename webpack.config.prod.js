const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
    },
});