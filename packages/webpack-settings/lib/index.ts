import { TTaskName } from '@io-arc/types'
import { Configuration } from 'webpack'
import { webpackPerformanceDefault, webpackStatsDefault } from './data'
import { blue, yellow, green } from 'kleur'
import {
  BUILD,
  IS_PRODUCTION,
  JS_SPLIT_FILENAME,
  NODE_ENV,
  SITE_AUTHOR,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL
} from '@io-arc/env'

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
export const jsSplitChunks: object =
  NODE_ENV === BUILD.TEST || JS_SPLIT_FILENAME === null
    ? {}
    : {
        splitChunks: {
          name: JS_SPLIT_FILENAME,
          chunks: 'all',
          minChunks: 2
        }
      }

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
