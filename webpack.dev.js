module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        'static': {
            directory: './dist'
        }
    }
};
