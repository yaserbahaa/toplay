const path = require('path');

module.exports = {
  entry: './server.js',
  target:"node",
  mode: 'development',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx',],
  },

module: {
    rules: [
      // ...
      {
        test: [/\.html$/ , /\.cs$/,/\.node$/] ,
        use: ['ignore-loader','file-loader']
      }
    ]
 },
};