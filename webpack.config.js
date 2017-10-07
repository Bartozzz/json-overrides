const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
        "./src/index.js",
    ],

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: "jsonOverrides",
        libraryTarget: "umd",
    },

    context: __dirname,
    target: "web",

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
            },
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },

            output: {
                comments: false,
                semicolons: true,
            },
        }),
    ],
};
