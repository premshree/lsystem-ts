const path = require('path');

const targets = [
  {
    target: 'web',
    filename: 'l-system.browser.js',
  },
  {
    target: 'node',
    filename: 'l-system.js',
  },
];

const configurer = (target, filename) => ({
  entry: './src/l-system.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target, // "web" is default
  output: {
    filename,
    library: 'LSystem',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, './build'),
  },
});

module.exports = targets.map((target) => configurer(target.target, target.filename));
