module.exports = {
  entry: './src/client/client.jsx',
  output: {
    filename: 'bundle.js',
    path: './public/javascripts'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}
