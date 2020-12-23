import {
  BUILD,
  IS_PRODUCTION,
  JS_MINIFY,
  JS_SPLIT_FILENAME,
  JS_TERSER,
  NODE_ENV,
  SITE_AUTHOR,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL
} from '@io-arc/env'
import { TTaskName } from '@io-arc/types'
import { blue, green, yellow } from 'kleur'
import webpack, { Configuration } from 'webpack'
import { webpackPerformanceDefault, webpackStatsDefault } from './data'
import Optimization = webpack.Options.Optimization

/**
 * webpack config stats
 * @param stats
 */
export const stats = (stats?: Configuration['stats']): Configuration['stats'] =>
  stats || webpackStatsDefault

/**
 * webpack config performance
 * @param performance
 */
export const performance = (
  performance?: Configuration['performance']
): Configuration['performance'] => performance || webpackPerformanceDefault

/**
 * webpack progressbar plugin config
 * @param task
 */
export const progressBar = (
  task: TTaskName
): { format: string; clear: boolean } => ({
  format: `${blue(` ${task} `)} ${yellow(':percent')}/${green(
    ':total%'
  )} (:elapseds)`,
  clear: true
})

/**
 * Splitting the common logic
 */
const splitChunks: Optimization =
  NODE_ENV === BUILD.TEST || JS_SPLIT_FILENAME === null
    ? {}
    : {
        splitChunks: {
          name: JS_SPLIT_FILENAME,
          chunks: 'all',
          minChunks: 2
        }
      }

// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin')

const minimize: Optimization = JS_MINIFY
  ? {
      minimize: true,
      minimizer: [new TerserPlugin(JS_TERSER)]
    }
  : {}

/**
 * Webpack optimization
 */
export const jsOptimization: Optimization = { ...minimize, ...splitChunks }

/**
 * Global constant for webpack
 */
export const webpackDefine = {
  IS_PRODUCTION: JSON.stringify(IS_PRODUCTION),
  SITE_TITLE: JSON.stringify(SITE_TITLE),
  SITE_URL: JSON.stringify(SITE_URL),
  SITE_AUTHOR: JSON.stringify(SITE_AUTHOR),
  SITE_ROOT: JSON.stringify(SITE_ROOT)
}
