"use strict";

module.exports = [
    {
        context: __dirname,
        entry: "./src/json-report-builder.js",
        mode: "development",
        devtool: "source-map",
        output: {
            path: __dirname,
            filename: "./lib/json-report-builder.js",
            library: "parser",
            libraryTarget: "var"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                }
            ]
        },
        target: "web"
    }
];