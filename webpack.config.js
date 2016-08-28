const path       = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const bundleName = 'bundle.js'
const outputDir  = path.join(__dirname, 'dist')
const sourceDir  = path.join(__dirname, 'src')

module.exports = {
  entry: path.join(sourceDir, 'index.tsx'),
  output: {
    path:     outputDir,
    filename: bundleName
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css'],
    root: [sourceDir]
  },
  module: {
    loaders: [{
      test:    /\.tsx?$/,
      exclude: /node_modules/,
      loader:  'babel-loader!ts-loader'
    }, {
      test:    /\.css$/,
      exclude: /node_modules/,
      loader:  'style-loader!css-loader'
    }]
  },
  plugins: [
    new HtmlPlugin({
      minify:   { collapseWhitespace: true },
      template: path.join(sourceDir, 'index.html')
    })
  ]
}
