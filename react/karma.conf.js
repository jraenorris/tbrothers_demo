var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      'test/testHelper.js'
    ],
    preprocessors: {
      'test/testHelper.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'eval-source-map',
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|test)/,
            loader: 'isparta'
          }
        ]
      },
      resolve: {
        root: path.resolve(__dirname, 'src'),
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'spec',
      'coverage'
    ],
    specReporter: {
      maxLogLines: 1,
      suppressPassed: true
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      type: 'html'
    }
  })
}
