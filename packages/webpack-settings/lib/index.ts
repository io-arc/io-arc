import { TTaskName } from '@io-arc/types'
import { Configuration } from 'webpack'
import { webpackPerformanceDefault, webpackStatsDefault } from './data'
import { blue, yellow, green } from 'kleur'

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
