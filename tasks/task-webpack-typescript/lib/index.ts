import {
  DIST,
  ESLINT,
  IS_HASH_JS_FILE_LOADER,
  JS_SOURCE_MAP,
  MODE,
  MODE_ENV,
  OUTPUT_IMG_ARRAY,
  OUTPUT_JS_ARRAY,
  OUTPUT_JS_PATH_ABSOLUTE,
  USE_JS_FILE_LOADER,
  WS_JS_PATH_ABSOLUTE,
  WS_ROOT_ABSOLUTE
} from '@io-arc/env'
import { FileListObject } from '@io-arc/file-list'
import OutputDirDiff from '@io-arc/output-dir-diff'
import PathBuild from '@io-arc/path-build'
import { TFileName } from '@io-arc/types'
import { WebpackExtends } from '@io-arc/utils'
import { ImageLoader, ImageMinPlugin } from '@io-arc/webpack-loaders-image'
import {
  EslintLoader,
  TypescriptLoader,
  workerLoader,
  yamlLoader
} from '@io-arc/webpack-loaders-js'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import {
  jsOptimization,
  performance,
  progressBar,
  stats,
  webpackDefine
} from '@io-arc/webpack-settings'
import webpack, { Configuration } from 'webpack'

const rules = [TypescriptLoader()]

if (USE_JS_FILE_LOADER) {
  rules.push(
    ImageLoader(OUTPUT_JS_ARRAY, OUTPUT_IMG_ARRAY, IS_HASH_JS_FILE_LOADER)
  )
}

const plugins = []
plugins.push(ImageMinPlugin)

if (MODE_ENV === MODE.ONCE) {
  const root = new OutputDirDiff([DIST, ...OUTPUT_JS_ARRAY], [])

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const VisualizerPlugin = require('webpack-visualizer-plugin')

  plugins.push(
    new VisualizerPlugin({
      filename: root.targetRelativePath() + 'stats/index.html'
    })
  )
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const progressBarPlugin = require('progress-bar-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PrettierPlugin = require('prettier-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ConfigWebpackPlugin = require('config-webpack')

// User extends
const extend = new WebpackExtends('js')
const externals = extend.externals()
const extendsLoaders = extend.loaders()
if (extendsLoaders != null) rules.push(...extendsLoaders)
const extendPlugins = extend.plugins()
if (extendPlugins != null) plugins.push(...extendPlugins)

export const js: Configuration = {
  mode: 'none',
  context: WS_JS_PATH_ABSOLUTE,
  externals,
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files1 = FileListObject(WS_JS_PATH_ABSOLUTE, 'ts', true)
      const files2 = FileListObject(WS_JS_PATH_ABSOLUTE, 'tsx', true)
      resolve({ ...files1, ...files2 })
    }),
  output: {
    path: OUTPUT_JS_PATH_ABSOLUTE,
    filename: '[name].js',
    publicPath: PathBuild.relative(OUTPUT_JS_ARRAY),
    chunkFilename: '[name].js'
  },
  optimization: jsOptimization,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': WS_ROOT_ABSOLUTE,
      '@': WS_ROOT_ABSOLUTE
    }
  },
  module: {
    exprContextCritical: false,
    rules: [workerLoader, ...rules, yamlLoader, EslintLoader(ESLINT)]
  },
  plugins: [
    new TaskMessage('TypeScript'),
    new ConfigWebpackPlugin(),
    new webpack.DefinePlugin(webpackDefine),
    new progressBarPlugin(progressBar('TypeScript')),
    new PrettierPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.yaml', '.yml']
    }),
    ...plugins
  ],
  devtool: JS_SOURCE_MAP ? 'source-map' : false,
  cache: true,
  stats: stats(),
  performance: performance()
}
