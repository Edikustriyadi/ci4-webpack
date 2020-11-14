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
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                    "presets": [
                        "@babel/preset-env",
                    ]
                    }
                }
            },
            {
                test: /\.css$/, 
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.html/,
                use:['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath:'public/img',
                            publicPath:'public/img'

                        }
                    }
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