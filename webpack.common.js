const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
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
    plugins: [
        new HtmlWebpackPlugin({title: "Webpack sandbox"}),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            consts: path.resolve(__dirname, 'src/consts/'),
            containers: path.resolve(__dirname, 'src/containers/'),
        },
    },
}
