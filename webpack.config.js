var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.min.js',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
  },
  devtool: debug ? 'cheap-module-source-map' : null,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
