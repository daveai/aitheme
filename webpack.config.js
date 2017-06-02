var express = require('express');
module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx','.css'],
        modules:['node_modules','theme_js']
    },
    devServer: {
        historyApiFallback: true,
        setup(app){
            app.use(express.static("./assets/"))
        }
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "underscore-template-loader",
                query: {
                    engine: 'lodash',
                }
            },
            {test: /\.css$/, loader:   ['style-loader', 'css-loader']},
            {test: /\.scss$/, loader:   ["sass-loader"]},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|gif|png)$/,loader: 'file-loader?emitFile=false&name=[path][name].[ext]'}
        ]
    }
};