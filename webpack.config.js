const path = require( "path" );
const webpack = require( "webpack" );

module.exports = {
    entry: [
        "./src/index.js",
    ],

    output: {
        path: path.resolve( __dirname, "./dist" ),
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
                options: {
                    presets: ["flow", "es2015", "es2016", "es2017", "stage-0"],
                    plugins: ["transform-runtime", "add-module-exports"],
                },
            },
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            compress: {
                warnings: false,
            },

            output: {
                comments: false,
                semicolons: true,
            },
        } ),
    ],
};
