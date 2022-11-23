import {
  CSS_POSTCSS_AUTOPREFIXER_OPTION,
  CSS_POSTCSS_MQ_PACKER,
  DIST,
  ESLINT,
  IS_HASH_JS_FILE_LOADER,
  JS_SOURCE_MAP,
  MODE,
  MODE_ENV,
  OUTPUT_IMG_ARRAY,
  OUTPUT_JS_ARRAY,
  OUTPUT_JS_PATH_ABSOLUTE,
  USE_CSS_FILE_LOADER,
  USE_JS_FILE_LOADER,
  VUE_LOADER_ASSETS,
  VUE_PUG_LINT_FILE,
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
import { PugLintLoader } from '@io-arc/webpack-loaders-pug-linter'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import {
  jsOptimization,
  performance,
  progressBar,
  stats,
  webpackDefine
} from '@io-arc/webpack-settings'
import webpack, { Configuration, RuleSetLoader } from 'webpack'

const cssLoader: RuleSetLoader = {
  loader: 'css-loader',
  options: {
    url: USE_CSS_FILE_LOADER,
    sourceMap: false,
    import: true,
    modules: false
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqpacker = require('css-mqpacker')

const postCssPlugins = [autoprefixer(CSS_POSTCSS_AUTOPREFIXER_OPTION)]
if (CSS_POSTCSS_MQ_PACKER) postCssPlugins.push(mqpacker())

const postCssLoader: RuleSetLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: false,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    plugins: () => postCssPlugins
  }
}

const rules = []

if (USE_JS_FILE_LOADER) {
  rules.push(
    ImageLoader(OUTPUT_JS_ARRAY, OUTPUT_IMG_ARRAY, IS_HASH_JS_FILE_LOADER)
  )
}

const plugins = []

const imageminPlugin = ImageMinPlugin()
if (imageminPlugin != null) plugins.push(ImageMinPlugin)

if (MODE_ENV === MODE.ONCE) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const VisualizerPlugin = require('webpack-visualizer-plugin')

  const root = new OutputDirDiff([DIST, ...OUTPUT_JS_ARRAY], [])
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
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ConfigWebpackPlugin = require('config-webpack')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pugLint = VUE_PUG_LINT_FILE
  ? require(`${process.cwd()}/${VUE_PUG_LINT_FILE}`)
  : null

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
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files = FileListObject(WS_JS_PATH_ABSOLUTE, 'ts', true)
      resolve(files)
    }),
  output: {
    path: OUTPUT_JS_PATH_ABSOLUTE,
    filename: '[name].js',
    publicPath: PathBuild.relative(OUTPUT_JS_ARRAY),
    chunkFilename: '[name].js'
  },
  optimization: jsOptimization,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': WS_ROOT_ABSOLUTE,
      '@': WS_ROOT_ABSOLUTE
    }
  },
  externals,
  module: {
    exprContextCritical: false,
    rules: [
      workerLoader,
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transformAssetUrls: VUE_LOADER_ASSETS
        }
      },
      TypescriptLoader(true),
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        options: {
          doctype: 'html',
          pretty: true
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', cssLoader, postCssLoader]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          cssLoader,
          postCssLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: { outputStyle: 'expanded' }
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          cssLoader,
          postCssLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: { outputStyle: 'expanded', indentedSyntax: true }
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          cssLoader,
          postCssLoader,
          {
            loader: 'stylus-loader',
            options: { sourceMap: false, 'include css': true, define: null }
          }
        ]
      },
      ...rules,
      yamlLoader,
      EslintLoader(ESLINT),
      PugLintLoader(/\.vue$/, 'vue-pug-lint-loader', pugLint)
    ]
  },
  plugins: [
    new TaskMessage('Vue'),
    new webpack.DefinePlugin(webpackDefine),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    }),
    new progressBarPlugin(progressBar('Vue')),
    new PrettierPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.yaml', '.yml', '.vue']
    }),
    new VueLoaderPlugin(),
    new ConfigWebpackPlugin(),
    ...plugins
  ],
  devtool: JS_SOURCE_MAP ? 'source-map' : false,
  cache: true,
  stats: stats(),
  performance: performance()
}
