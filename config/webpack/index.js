const loaders = require('./loaders.js');
const plugins = require('./plugins.js');
const path = require('path');

module.exports = env => {
    console.log(env);
    const isProd = env.NODE_ENV === 'production';
    return {
        target: 'web',
        mode: env.NODE_ENV,
        devtool: !isProd ? 'eval-source-map' : 'inline-source-maps',
        entry: {
            app: path.resolve(__dirname, '../../src/index.js')
        },
        devServer: {
            contentBase: path.resolve(__dirname, '../../public'),
            hot: true
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../../public'),
            publicPath: '/assets/'
        },
        module: {
            rules: loaders(isProd)
        },
        plugins: plugins(isProd),
    };
};
