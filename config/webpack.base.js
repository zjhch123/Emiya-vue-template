const webpack = require('webpack');
const paths = require('./paths');

const path = require('path');

module.exports = {
  context: paths.appSrc,
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@components': path.join(paths.appSrc, 'components')
    }
  },
  entry: {
    index: paths.appIndexJS
  },
  output: {
    path: paths.appBuildPath,
    publicPath: '/',
    filename: 'static/js/[name]-[hash].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: [
            {
              loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
          ]
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: []
}
