import { TTaskName } from '@io-arc/types'
import { Configuration } from 'webpack'
import { webpackPerformanceDefault, webpackStatsDefault } from './data'
import { blue, yellow, green } from 'kleur'
import { BUILD, JS_SPLIT_FILENAME, NODE_ENV } from '@io-arc/env'

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
