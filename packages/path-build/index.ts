import { TDirNameKey } from '@io-arc/types'
import config from 'config'

export const BUILD_ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
  NONE: 'none'
} as const

export type BUILD_ENV = typeof BUILD_ENV[keyof typeof BUILD_ENV]

export const MODE = {
  ONCE: 'once',
  WATCH: 'watch'
} as const

export type MODE = typeof MODE[keyof typeof MODE]

/** Working space directory */
export const WS_ROOT: TDirNameKey = 'src'

/**
 * Output directory
 * @default dist
 */
export const DIST: TDirNameKey = config.has('outputDir')
  ? config.get('outputDir')
  : 'dist'

const _env = ((): BUILD_ENV => {
  if (config.has('overrideEnv')) {
    return config.get<BUILD_ENV>('overrideEnv')
  }

  return (process.env.NODE_ENV as BUILD_ENV) || BUILD_ENV.DEVELOPMENT
})()

/** Build environment */
export const NODE_ENV = _env
