const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    jsx: './index.jsx',
    html: './index.html',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    preLoaders: [
      // Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      // { test: /\.css$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
