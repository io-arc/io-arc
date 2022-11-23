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
import { FileListObject } from '@io-arc/file-list'
import { TFileName, TWebpackMode } from '@io-arc/types'
import { AssetsDirPath, WebpackExtends } from '@io-arc/utils'
import { ImageLoader, ImageMinPlugin } from '@io-arc/webpack-loaders-image'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import { performance, progressBar, stats } from '@io-arc/webpack-settings'
import handlebars from 'handlebars'
import { Configuration } from 'webpack'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const extractTextPlugin = require('extract-text-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const progressBarPlugin = require('progress-bar-webpack-plugin')

const rules = []
const plugins = []

const imageminPlugin = ImageMinPlugin()
if (imageminPlugin != null) plugins.push(ImageMinPlugin)

// User extends
const extend = new WebpackExtends('html')
const externals = extend.externals()
const extendsLoaders = extend.loaders()
if (extendsLoaders != null) rules.push(...extendsLoaders)
const extendPlugins = extend.plugins()
if (extendPlugins != null) plugins.push(...extendPlugins)

export const html: Configuration = {
  mode: NODE_ENV as TWebpackMode,
  context: WS_HTML_PATH_ABSOLUTE,
  watch: MODE_ENV === MODE.WATCH,
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files = FileListObject(WS_HTML_PATH_ABSOLUTE, 'html')
      resolve(files)
    }),
  output: {
    path: DIST_ABSOLUTE,
    publicPath: '',
    filename: '[name].html'
  },
  externals,
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: extractTextPlugin.extract({
          fallback: '',
          publicPath: DIST,
          use: [
            {
              loader: 'html-loader',
              options: {
                attributes: USE_HTML_FILE_LOADER
                  ? { list: TARGET_HTML_FILE_LOADER }
                  : false,
                minimize: HTML_MINIFY,

                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                preprocessor: (content, loaderContext) => {
                  let result

                  try {
                    // Use Handlebars to output the same result as webpack.DefinePlugin
                    result = handlebars.compile(content)({
                      IS_PRODUCTION: IS_PRODUCTION,
                      SITE_TITLE: SITE_TITLE,
                      SITE_URL: SITE_URL,
                      SITE_AUTHOR: SITE_AUTHOR,
                      SITE_DESCRIPTION: SITE_DESCRIPTION,
                      SITE_ROOT: SITE_ROOT,
                      CSS_DIR: AssetsDirPath(OUTPUT_CSS_ARRAY),
                      IMG_DIR: AssetsDirPath(OUTPUT_IMG_ARRAY),
                      JS_DIR: AssetsDirPath(OUTPUT_JS_ARRAY),
                      JSON_DIR: AssetsDirPath(OUTPUT_JSON_ARRAY)
                    })
                  } catch (e) {
                    loaderContext.emitError(e)
                    return content
                  }

                  return result
                }
              }
            }
          ]
        })
      },
      ImageLoader([], OUTPUT_IMG_ARRAY, IS_HASH_HTML_FILE_LOADER),
      ...rules
    ]
  },
  plugins: [
    new TaskMessage('html'),
    new extractTextPlugin({
      filename: '[name].html',
      disable: false,
      allChunks: true
    }),
    new progressBarPlugin(progressBar('html')),
    ...plugins
  ],
  devtool: false,
  cache: true,
  stats: stats(),
  performance: performance()
}
