const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: './src/scripts/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
          },
        },
      },
      {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
    ],
  },
};