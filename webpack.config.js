const webpack = require("webpack")
const webpackFailPlugin = require("webpack-fail-plugin")
const fs = require("fs")
const path = require("path")

let plugins = [
    webpackFailPlugin,
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    function () {
        this.plugin("done", function (stats) {
            fs.writeFileSync(
                path.join(__dirname, "public", "js-manifest.json"),
                JSON.stringify({
                    "client.js": "client-" + stats.hash + ".js"
                })
            )
        })
    }
]

if (process.env.NODE_ENV === "production") {
    plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    )
}

module.exports = {
    entry: "./src/client/client.js",
    output: {
        filename: "public/js/client-[hash].js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015", "stage-2", "stage-3"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js"]
    },
    plugins
}
