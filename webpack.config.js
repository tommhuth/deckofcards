const webpack = require("webpack") 
const { version } = require("./package.json")
const path = require("path")

let plugins = [ 
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.APP_VERSION": JSON.stringify(version)
    })
] 

module.exports = {
    entry: "./src/client/client.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/client.js"
    },
    module: {
        rules: [
            { test: /\.json$/, loader: "json" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader" 
            }
        ]
    },
    resolve: {
        extensions: [ ".js"]
    },
    plugins
}
