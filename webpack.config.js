const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
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
            
        ]
    }
}