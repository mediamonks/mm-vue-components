const path = require('path');
const config = require('../../config');
const webpackHelpers = require('./webpackHelpers');

const projectRoot = path.resolve(__dirname, '../../../');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    app: [
      './src/polyfill/index.js',
      './src/bootstrap.js'
    ],
  },
  output: {
    path: path.join(projectRoot, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.scss'],
    alias: {
      modernizr$: path.join(projectRoot, '.modernizrrc'),
      TweenLite: path.resolve(projectRoot, 'node_modules/gsap/src/uncompressed/TweenLite'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [webpackHelpers.getBabelLoaderConfig(isDevelopment)],
        include: [path.join(projectRoot, 'src')],
        exclude: /node_modules/,
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr-loader!json-loader',
      },
      {
        test: /\.(glsl|txt)$/,
        use: 'raw-loader',
      },
      {
        test: /\.ts$/,
        include: [path.join(projectRoot, 'src')],
        use: [
          webpackHelpers.getBabelLoaderConfig(isDevelopment),
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(projectRoot, './tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: [
              {
                loader: 'svg-inline-loader',
              },
              webpackHelpers.getSvgoLoaderConfig(),
            ]
          },
          {
            use: [
              {
                loader: 'url-loader',
              },
              webpackHelpers.getSvgoLoaderConfig(),
            ]
          }
        ],
      },
    ],
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
