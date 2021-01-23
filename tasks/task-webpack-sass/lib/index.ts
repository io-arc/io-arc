import { WebpackExtends } from '@io-arc/utils'
import { Configuration, RuleSetLoader } from 'webpack'
import {
  CSS_MINIFY,
  CSS_POSTCSS_MQ_PACKER,
  IS_HASH_CSS_FILE_LOADER,
  MODE,
  MODE_ENV,
  NODE_ENV,
  OUTPUT_CSS_ARRAY,
  OUTPUT_CSS_PATH_ABSOLUTE,
  OUTPUT_IMG_ARRAY,
  USE_CSS_FILE_LOADER,
  WS_CSS_PATH_ABSOLUTE
} from '@io-arc/env'
import { TFileName, TWebpackMode } from '@io-arc/types'
import { FileListObject } from '@io-arc/file-list'
import { ImageLoader } from '@io-arc/webpack-loaders-image'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import { performance, progressBar, stats } from '@io-arc/webpack-settings'

const cssLoader: RuleSetLoader = {
  loader: 'css-loader',
  options: {
    url: USE_CSS_FILE_LOADER,
    sourceMap: false,
    import: true
  }
}

const resolveUrlLoader: RuleSetLoader = {
  loader: 'resolve-url-loader',
  options: {
    sourceMap: false,
    keepQuery: true
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const miniCssExtractPluginLoader: RuleSetLoader = {
  loader: miniCssExtractPlugin.loader,
  options: { hmr: false }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqpacker = require('css-mqpacker')

const postCssPlugins = [autoprefixer({ grid: 'autoplace', flexbox: 'no-2009' })]
if (CSS_POSTCSS_MQ_PACKER) postCssPlugins.push(mqpacker())

const postCssLoader: RuleSetLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: false,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    plugins: () => postCssPlugins
  }
}

const sassLoader: RuleSetLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: false,
    sassOptions: {
      outputStyle: 'expanded'
    }
  }
}

const plugins = []
if (CSS_MINIFY) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const safe = require('postcss-safe-parser')

  plugins.push(
    new optimizeCssAssetsPlugin({
      cssProcessorOptions: {
        parser: safe,
        discardComments: { removeAll: true }
      }
    })
  )
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackFixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const progressBarPlugin = require('progress-bar-webpack-plugin')

const rules = []

// User extend
const extend = new WebpackExtends('css')
const externals = extend.externals()
const extendsLoaders = extend.loaders()
if (extendsLoaders != null) rules.push(...extendsLoaders)
const extendPlugins = extend.plugins()
if (extendPlugins != null) plugins.push(...extendPlugins)

export const css: Configuration = {
  mode: NODE_ENV as TWebpackMode,
  context: WS_CSS_PATH_ABSOLUTE,
  watch: MODE_ENV === MODE.WATCH,
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files1 = FileListObject(WS_CSS_PATH_ABSOLUTE, 'sass')
      const files2 = FileListObject(WS_CSS_PATH_ABSOLUTE, 'scss')
      resolve({ ...files1, ...files2 })
    }),
  output: {
    path: OUTPUT_CSS_PATH_ABSOLUTE
  },
  externals,
  module: {
    rules: [
      {
        test: /\.s([ac])ss$/i,
        exclude: /node_modules/,
        use: [
          miniCssExtractPluginLoader,
          cssLoader,
          resolveUrlLoader,
          postCssLoader,
          sassLoader
        ]
      },
      ImageLoader(OUTPUT_CSS_ARRAY, OUTPUT_IMG_ARRAY, IS_HASH_CSS_FILE_LOADER),
      ...rules
    ]
  },
  plugins: [
    new TaskMessage('sass'),
    new webpackFixStyleOnlyEntriesPlugin({
      extensions: ['sass', 'scss', 'css']
    }),
    new miniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new progressBarPlugin(progressBar('sass')),
    ...plugins
  ],
  devtool: false,
  cache: true,
  stats: stats(),
  performance: performance()
}
