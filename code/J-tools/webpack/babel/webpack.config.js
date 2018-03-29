const path = require('path');

const paths = {
  DEST: path.resolve(__dirname, 'dest'),
  SOURCE: path.resolve(__dirname, 'source'),
};

module.exports = {
  entry: path.join(paths.SOURCE,'code.js'),
  output: {
    filename: 'code.js',
    path: paths.DEST
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
