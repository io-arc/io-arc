import PathBuild from '@io-arc/path-build'
import { TDirName, TDirNameKey } from '@io-arc/types'
import config from 'config'

export const BUILD = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
  NONE: 'none'
} as const

export type BUILD = typeof BUILD[keyof typeof BUILD]

export const MODE = {
  ONCE: 'once',
  WATCH: 'watch'
} as const

export type MODE = typeof MODE[keyof typeof MODE]

const _env = ((): BUILD => {
  if (config.has('overrideEnv')) {
    return config.get<BUILD>('overrideEnv')
  }

  return (process.env.NODE_ENV as BUILD) || BUILD.DEVELOPMENT
})()

/** Build environment */
export const NODE_ENV = _env

/** Run environment */
export const MODE_ENV: MODE = (process.env.MODE_ENV as MODE) || MODE.ONCE

/** Working space directory */
export const WS_ROOT: TDirNameKey = 'src'

const getConfig = <T>(key: string, def: T): T =>
  config.has(key) ? config.get<T>(key) : def

const getWsArr = (key: string, defaultDir: TDirNameKey): TDirNameKey[] => {
  // use default directory name
  if (!config.has(key)) return [WS_ROOT, defaultDir]

  const d = config.get<TDirNameKey>(key)

  // use default directory name
  if (d === '') return [WS_ROOT, defaultDir]

  return [WS_ROOT, d]
}

/**
 * Output directory
 *
 * config key: 'outputDir'
 * @default 'dist'
 */
export const DIST: TDirNameKey = getConfig('outputDir', 'dist')

const getWsPath = (key: string, defaultDir: TDirNameKey): TDirNameKey =>
  PathBuild.relative(getWsArr(key, defaultDir))

const getDeployArr = (
  key: string,
  defaultDir: TDirNameKey[]
): TDirNameKey[] => {
  if (!config.has(key)) return [DIST, ...defaultDir]

  const d = config.get<TDirNameKey[]>(key)
  return [DIST, ...d]
}

/**
 * Working space for copy directory name array
 * Array first is 'src' to absolutely
 *
 * config key: wsDir.static
 * @default ['src', 'static']
 */
export const WS_STATIC_ARRAY: TDirNameKey[] = getWsArr('wsDir.static', 'static')

/**
 * Working space for copy directory path
 * First string is 'src/' to absolutely
 *
 * config key: wsDir.static
 * @default `src/static`
 */
export const WS_STATIC_PATH: TDirNameKey = getWsPath('wsDir.static', 'static')

/**
 * Working space for YAML to JSON directory name array
 * Array first is 'src' to absolutely
 *
 * config key: wsDir.yaml2json
 * @default ['src', 'yaml2json']
 */
export const WS_YAML2JSON_ARRAY: TDirNameKey[] = getWsArr(
  'wsDir.yaml2json',
  'yaml2json'
)

/**
 * Working space YAML to JSON directory path
 * First string is 'src/‘ to absolutely
 *
 * config key: wsDir.yaml2json
 * @default 'src/yaml2json'
 */
export const WS_YAML2JSON_PATH: TDirNameKey = getWsPath(
  'wsDir.yaml2json',
  'yaml2json'
)

/**
 * YAML to JSON convert minify option
 *
 * config key: options.json.minify
 * @default false
 */
export const JSON_MINIFY: boolean = getConfig('options.json.minify', false)

/**
 * YAML to JSON deploy directory array
 * Array first is DIST constant
 *
 * config key: deployDir.json
 * @default [DIST, 'common', 'data']
 */
export const DEPLOY_YAML2JSON_ARR: TDirNameKey[] = getDeployArr(
  'deployDir.json',
  ['common', 'data']
)

/**
 * WebSite root
 * @default '/'
 */
export const SITE_ROOT: TDirName = getConfig('siteRoot', '/')

/**
 * Site root relative path build
 * @param arr - Array for directory name
 */
export const siteRootRelative = (arr: TDirNameKey[]): TDirNameKey =>
  arr.length === 0 ? SITE_ROOT : `${SITE_ROOT + PathBuild.relative(arr)}/`
