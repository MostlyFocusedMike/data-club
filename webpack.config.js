const path = require('path');

module.exports = {
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules : [{
            test: /\.css?$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        alias: {
            MainStyle: path.resolve(__dirname, 'src/styles/main_style.css')
        }
    }
}
// https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
// setup differs slighltly from traversy