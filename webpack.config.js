const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

const content = require('./src/js/content-loader')();
const dataLoader = require('./src/js/data-loader');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
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
          helperDirs: [path.join(__dirname, 'src', 'helpers')],
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
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
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
          sizes: [600, 900, 1200, 1800],
          quality: 80,
          outputPath: './uploads',
          name: '[name]-[width].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Schweizer 5',
      template: './src/index.hbs',
      filename: './index.html',
      templateParameters: {
        meta: dataLoader('./data/meta.json'),
        info: dataLoader('./data/info.json'),
        credits: dataLoader('./data/credits.json'),
        content,
      },
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Impressum | Schweizer 5',
      template: './src/imprint.hbs',
      filename: './imprint.html',
      templateParameters: {
        meta: dataLoader('./data/meta.json'),
        info: dataLoader('./data/info.json'),
        credits: dataLoader('./data/credits.json'),
      },
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.svg',
      cache: true,
      prefix: 'favicon/',
      inject: true
    })
  ],
};
