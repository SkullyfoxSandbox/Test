const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = isProd => [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        __DEV__ : !isProd
    }),
    new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /en|fr/
    ),
    new HtmlWebpackPlugin({
        title: 'Foxhub Web Radio',
        template: path.resolve(__dirname, '../../src/index.html')
    }),
    new WriteFilePlugin(),
    new CleanWebpackPlugin(['public/assets'], {
        root: path.join(__dirname, '../../'),
    }),
    new MiniCssExtractPlugin(),
    isProd && new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    isProd && new CompressionPlugin()
].filter(plugin => plugin !== false)
