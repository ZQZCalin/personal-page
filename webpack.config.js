const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const devMode = true;

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // auto clean "dist" folder
        clean: true,
    },

    // Development Mode
    mode: (devMode) ? "development" : "production",
    devtool: (devMode) ? "inline-source-map":"",
    devServer: {
        contentBase: "./dist",
    },

    module: {
        rules: [
            {
                // load css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // load image
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: "asset/resource",
            },
            {
                // load other assets (pdf)
                test: /\.pdf/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // HTML plugin: auto generate "dist" folder
        new HTMLWebpackPlugin({
            // title: "Output Management",
            title: "Development",
        }),
    ],
};