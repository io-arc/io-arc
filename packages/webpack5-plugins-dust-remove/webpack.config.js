const path = require('path')
const { FileListObject } = require('@io-arc/file-list')
const DustRemovePlugin = require('./index')
const {
  DUMMY_FILES_DIRECTORY,
  MODE_ENV,
  MODE,
  NODE_ENV
} = require('@io-arc/env')

module.exports = [
  {
    mode: NODE_ENV,
    watch: MODE_ENV === MODE.WATCH,
    context: path.resolve(__dirname, 'src', 'html'),
    entry: () => {
      return new Promise((resolve) => {
        const files = FileListObject(
          path.resolve(__dirname, 'src', 'html'),
          'html'
        )
        resolve(files)
      })
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      compareBeforeEmit: true,
      filename: `${DUMMY_FILES_DIRECTORY}/[name].html`
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          type: 'asset/resource',
          generator: {
            filename: '[path]/[name].html'
          }
        },
        {
          test: /\.html$/i,
          use: [{ loader: 'extract-loader' }, { loader: 'html-loader' }]
        }
      ]
    },
    plugins: [new DustRemovePlugin()]
  },
  {
    mode: NODE_ENV,
    watch: MODE_ENV === MODE.WATCH,
    context: path.resolve(__dirname, 'src', 'pug'),
    entry: () => {
      return new Promise((resolve) => {
        const files = FileListObject(
          path.resolve(__dirname, 'src', 'pug'),
          'pug'
        )
        resolve(files)
      })
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      compareBeforeEmit: true,
      filename: `${DUMMY_FILES_DIRECTORY}/[name].html`
    },
    module: {
      rules: [
        {
          test: /\.pug$/i,
          type: 'asset/resource',
          generator: {
            filename: '[path][name].html'
          }
        },
        {
          test: /\.pug$/i,
          use: [
            { loader: 'extract-loader' },
            { loader: 'html-loader' },
            { loader: 'pug-html-loader', options: { doctype: 'html' } }
          ]
        }
      ]
    },
    plugins: [new DustRemovePlugin()]
  }
]
