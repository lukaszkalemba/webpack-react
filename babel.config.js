const { isProduction } = require('./config');

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(
    Boolean
  ),
};
