const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: {
                    loader: 'babel-loader' // specify the loader
                } 
            },
            {
                test: /\.css$/, 
                use: [
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js','.json']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
    ]
    
}