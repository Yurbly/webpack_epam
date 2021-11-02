const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        'static': {
            directory: './dist'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({title: "Webpack sandbox"}),
    ]
}
