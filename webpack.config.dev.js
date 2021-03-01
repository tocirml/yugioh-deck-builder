const webpack = require('webpack');
const path = require('path'); // from node
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web', //    need to check, could be 'node' or 'web'
  devtool: 'cheap-module-source-map', //    let us see original code in browser for debugging
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // __dirname is a variable available, means current folder, absolute path
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    stats: 'minimal', // reduces information it writes on the command line
    overlay: true, //overlay any error that ocur in the browser
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:3001'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', //target html
      template: './public/index.html', //source html
    }),
  ],
};
