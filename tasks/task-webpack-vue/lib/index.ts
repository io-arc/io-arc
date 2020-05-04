import webpack, { Configuration, RuleSetLoader } from 'webpack'
import {
  DIST,
  IS_HASH_JS_FILE_LOADER,
  JS_MINIFY,
  JS_SOURCE_MAP,
  MODE,
  MODE_ENV,
  OUTPUT_IMG_ARRAY,
  OUTPUT_JS_ARRAY,
  OUTPUT_JS_PATH_ABSOLUTE,
  USE_CSS_FILE_LOADER,
  USE_JS_FILE_LOADER,
  VUE_LOADER_ASSETS,
  WS_JS_PATH_ABSOLUTE,
  WS_ROOT_ABSOLUTE
} from '@io-arc/env'
import { TFileName } from '@io-arc/types'
import { FileListObject } from '@io-arc/file-list'
import PathBuild from '@io-arc/path-build'
import {
  jsSplitChunks,
  performance,
  progressBar,
  stats,
  webpackDefine
} from '@io-arc/webpack-settings'
import TaskMessage from '@io-arc/webpack-plugins-task-message'
import OutputDirDiff from '@io-arc/output-dir-diff'
import { workerLoader, yamlLoader } from '@io-arc/webpack-loaders-js'
import { ImageLoader } from '@io-arc/webpack-loaders-image'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const progressBarPlugin = require('progress-bar-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PrettierPlugin = require('prettier-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VisualizerPlugin = require('webpack-visualizer-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const cssLoader: RuleSetLoader = {
  loader: 'css-loader',
  options: {
    url: USE_CSS_FILE_LOADER,
    sourceMap: false,
    import: true,
    modules: true
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqpacker = require('css-mqpacker')

const postCssLoader: RuleSetLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: false,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    plugins: () => [
      autoprefixer({ grid: 'autoplace', flexbox: 'no-2009' }),
      mqpacker()
    ]
  }
}

const rules = []

if (USE_JS_FILE_LOADER) {
  rules.push(
    ImageLoader(OUTPUT_JS_ARRAY, OUTPUT_IMG_ARRAY, IS_HASH_JS_FILE_LOADER)
  )
}

const plugins = []

if (JS_MINIFY) {
  plugins.push(
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        extractComments: 'all',
        compress: {
          // eslint-disable-next-line @typescript-eslint/camelcase
          drop_console: true
        }
      }
    })
  )
}

if (MODE_ENV === MODE.ONCE) {
  const root = new OutputDirDiff([DIST, ...OUTPUT_JS_ARRAY], [])
  plugins.push(
    new VisualizerPlugin({
      filename: root.targetRelativePath() + 'stats/index.html'
    })
  )
}

export const js: Configuration = {
  mode: 'none',
  context: WS_JS_PATH_ABSOLUTE,
  entry: (): Promise<{ [p: string]: TFileName }> =>
    new Promise<{ [p: string]: TFileName }>((resolve): void => {
      const files1 = FileListObject(WS_JS_PATH_ABSOLUTE, 'js', true)
      const files2 = FileListObject(WS_JS_PATH_ABSOLUTE, 'ts', true)
      resolve({ ...files1, ...files2 })
    }),
  output: {
    path: OUTPUT_JS_PATH_ABSOLUTE,
    filename: '[name].js',
    publicPath: PathBuild.relative(OUTPUT_JS_ARRAY),
    chunkFilename: '[name].js'
  },
  optimization: jsSplitChunks,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': WS_ROOT_ABSOLUTE,
      '@': WS_ROOT_ABSOLUTE
    }
  },
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
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      // TODO: TypScript
      // TODO: pug
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
      yamlLoader
      // TODO: EslintLoader(ESLINT)
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
    ...plugins
  ],
  devtool: JS_SOURCE_MAP ? 'source-map' : false,
  cache: true,
  stats: stats(),
  performance: performance()
}
