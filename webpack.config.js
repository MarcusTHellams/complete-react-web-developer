const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const extractCSS = new ExtractTextPlugin('static/css/[name].css');
const extractSass = new ExtractTextPlugin('static/css/[name].css');
const {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'react', 'react-dom'
        ],
        main: './src/index.js'
    },
    resolve: {
        extensions: ['.jsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    devtool: 'inline-source-map',
    output: {
        path: path.join(path.join(process.cwd(), 'dist')),
        filename: 'static/js/[name].js',
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/, /\.(js|jsx)$/, /\.css$/, /\.scss$/, /\.json$/
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.(js)|(jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                // exclude: /node_modules/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: './src',
        watchContentBase: true,
        overlay: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({     sourceMap: true }),
        extractSass,
        extractCSS,
        new webpack
            .optimize
            .CommonsChunkPlugin({
                names: [
                    'common', 'vendor'
                ],
                minChunks: 2
            }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new BaseHrefWebpackPlugin({baseHref: '/'})
    ]
};