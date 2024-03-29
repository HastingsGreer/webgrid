const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'static'),
    compress: true,
    port: 8000
  },
  devtool: 'source-map',
  mode: 'development'
}
