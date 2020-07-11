const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const content = require('./src/js/content-loader')();
const dataLoader = require('./src/js/data-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [path.join(__dirname, 'src', 'partials')],
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Test title',
      template: './src/index.hbs',
      filename: './index.html',
      templateParameters: {
        meta: dataLoader('./data/meta.json'),
        info: dataLoader('./data/info.json'),
        credits: dataLoader('./data/credits.json'),
        content,
      },
    }),
  ],
};
