const path = require('path');
const nodeExternals = require('webpack-node-externals');

// module.exports = [
//   {
//     entry: './server/server.js',
//     mode: 'development',
//     target: 'node',
//     externals: [nodeExternals()],
//     output: {
//       path: path.resolve(__dirname, 'dist/server'),
//       filename: 'server.bundle.js',
//       libraryTarget: 'commonjs2',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx|ts|tsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//           },
//         },
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader'],
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['.js', 'jsx', '.ts', '.tsx'],
//     },
//   },

//   {
//     entry: './server/client.js',
//     mode: 'development',
//     target: 'web',
//     output: {
//       path: path.resolve(__dirname, 'dist/client'),
//       filename: 'client.bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx|ts|tsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//           },
//         },
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader'],
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     },
//   },
// ];

module.export = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
};
