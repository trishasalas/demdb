const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('app.css');
const extractFonts = new ExtractTextPlugin('fonts.css');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './App.js',
  },
  module: {
    loaders: [
      {
        test: /App\.css/,
        loader: extractStyles.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader',
        }),
      },
      {
        test: /Font\.css/,
        loader: extractFonts.extract({
          loader: 'css-loader',
        }),
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['url-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    extractStyles,
    extractFonts,
  ],
};
