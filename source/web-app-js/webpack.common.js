const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'flow'],
            plugins: [require('babel-plugin-transform-class-properties')]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Output management'
    })
  ]
};