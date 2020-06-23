// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Configuration, RuleSetRule } from 'webpack'
import {
  DIST,
  DIST_ABSOLUTE,
  HTML_MINIFY,
  IS_HASH_HTML_FILE_LOADER,
  IS_PRODUCTION,
  MODE,
  MODE_ENV,
  NODE_ENV,
  OUTPUT_CSS_ARRAY,
  OUTPUT_IMG_ARRAY,
  OUTPUT_IN_PHP,
  OUTPUT_JS_ARRAY,
  OUTPUT_JSON_ARRAY,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL,
  TARGET_HTML_FILE_LOADER,
  USE_HTML_FILE_LOADER,
  WS_HTML_PATH_ABSOLUTE
} from '@io-arc/env'
import { TFileName, TFilePath, TWebpackMode } from '@io-arc/types'
import { FileListObject } from '@io-arc/file-list'
import { AssetsDirPath } from '@io-arc/utils'
import { ReadYaml } from '@io-arc/read-yaml'
import { ImageLoader } from '@io-arc/webpack-loaders-image'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import { performance, progressBar, stats } from '@io-arc/webpack-settings'
import { PugLintLoader } from '@io-arc/webpack-loaders-pug-linter'

const htmlLoader: RuleSetRule = {
  loader: 'html-loader',
  options: {
    attributes: USE_HTML_FILE_LOADER ? { list: TARGET_HTML_FILE_LOADER } : false
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const phpFilter = require('pug-php-filter')

const pugLoader: RuleSetRule = {
  loader: 'pug-html-loader',
  options: {
    doctype: 'html',
    pretty: !HTML_MINIFY,
    cache: true,
    filters: {
      php: phpFilter
    },
    // global variable
    data: {
      IS_PRODUCTION: IS_PRODUCTION,
      SITE_TITLE: SITE_TITLE,
      SITE_URL: SITE_URL,
      SITE_AUTHOR: SITE_AUTHOR,
      SITE_DESCRIPTION: SITE_DESCRIPTION,
      SITE_ROOT: SITE_ROOT,
      CSS_DIR: AssetsDirPath(OUTPUT_CSS_ARRAY),
      IMG_DIR: AssetsDirPath(OUTPUT_IMG_ARRAY),
      JS_DIR: AssetsDirPath(OUTPUT_JS_ARRAY),
      JSON_DIR: AssetsDirPath(OUTPUT_JSON_ARRAY),
      readYAML: <T>(path: TFilePath): T | '' => {
        const dir = path.split('/')
        const filename = dir.pop()

        if (filename === undefined || !/ya?ml$/i.test(filename)) return ''
        const key = filename.replace(/.ya?ml$/i, '')

        return ReadYaml(key, [WS_HTML_PATH_ABSOLUTE, ...dir])
      }
    }
  }
}

const ext = OUTPUT_IN_PHP ? 'php' : 'html'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const extractTextPlugin = require('extract-text-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const progressBarPlugin = require('progress-bar-webpack-plugin')

export const html: Configuration = {
  mode: NODE_ENV as TWebpackMode,
  context: WS_HTML_PATH_ABSOLUTE,
  watch: MODE_ENV === MODE.WATCH,
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files = FileListObject(WS_HTML_PATH_ABSOLUTE, 'pug')
      resolve(files)
    }),
  output: {
    path: DIST_ABSOLUTE,
    publicPath: '',
    filename: `[name].${ext}`
  },
  module: {
    rules: [
      PugLintLoader(/^(?!_).*\.pug$/i, 'pug-lint-loader'),
      {
        test: /\.pug$/i,
        use: extractTextPlugin.extract({
          fallback: '',
          publicPath: DIST,
          use: [htmlLoader, pugLoader]
        })
      },
      ImageLoader([], OUTPUT_IMG_ARRAY, IS_HASH_HTML_FILE_LOADER)
    ]
  },
  plugins: [
    new TaskMessage('pug'),
    new extractTextPlugin({
      filename: `[name].${ext}`,
      disable: false,
      allChunks: true
    }),
    new progressBarPlugin(progressBar('pug'))
  ],
  devtool: false,
  cache: true,
  stats: stats(),
  performance: performance()
}
