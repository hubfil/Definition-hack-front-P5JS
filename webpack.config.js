const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'data.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'static'),
    },
    compress: true,
    port: 9000,
  },
};