var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=100000'
        }]
    }
}
