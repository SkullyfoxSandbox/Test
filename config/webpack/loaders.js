const path = require('path');

module.exports = isProd => [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                babelrc: true,
                cacheDirectory: true,
            }
        }
    },
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                    disable: isProd
                }
            }
        ]
    },
    {
        test: /\.(scss|sass)$/i,
        use: [
            !isProd && 'css-hot-loader',
            isProd
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: !isProd,
                    modules: true,
                    localIdentName: '[name]-[local]--[hash:base64:5]'
                }
            },
            'sass-loader'
        ].filter(loader => loader !== false)
    }
];
