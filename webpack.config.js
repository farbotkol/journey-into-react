//================
// Import webpack
//================
var webpack = require('webpack');

//================
// This is the complicated part, where we'll be configuring our
// webpack file to work with our application.
//================
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
};
