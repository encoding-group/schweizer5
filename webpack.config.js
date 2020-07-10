const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const postLoader = require('./src/js/post-loader')();
const MarkdownIt = require('markdown-it')()
  .use(require('markdown-it-front-matter'), (fm) => {
    console.log(fm);
  });

MarkdownIt.render(postLoader[1]);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   use: 'html-loader'
      // },
      {
        test:/\.hbs$/i,
        loader: 'handlebars-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    title: 'Test title',
    template: './src/index.hbs',
    filename: './index.html',
    templateParameters: {
      foo: 'bar'
    }
  })]
};
