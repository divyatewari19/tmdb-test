const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
 const {DefinePlugin} = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
    ],
    devServer: {
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.css$/i,
                // include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], }
            
        ]
    }
}