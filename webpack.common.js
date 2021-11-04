const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: ["@babel/polyfill", "./src/index.js"],
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'public/index.html'}),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            consts: path.resolve(__dirname, 'src/consts/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            images: path.resolve(__dirname, 'public/images'),
        },
    },
}
