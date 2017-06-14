const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //cache: true,
  //debug: true,
  //progress: true,
  // devtool: 'hidden-source-map',
  devtool: 'source-map',
  // devtool: 'cheap-module-eval-source-map',

  entry: {
    app: path.resolve(__dirname, 'app', 'main.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/main.css',
      allChunks: true,
    })
  ],

  module: {
    // allowSyntheticDefaultImports for System.import
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['ng-annotate-loader','babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
     /* {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=/images/[name].[ext]'
        //loader: 'url?limit=1000&name=images/[hash].[ext]'
      },*/
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },

  devServer: {
    publicPath: '/',
    contentBase: './public'
  }
};
