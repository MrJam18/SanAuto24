const path = require('path');


module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './build/lib/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    },
}