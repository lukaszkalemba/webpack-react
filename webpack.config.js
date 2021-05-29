const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';
const target = isProduction ? 'browserslist' : 'web';

module.exports = {
  mode: mode,
  target: target,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
