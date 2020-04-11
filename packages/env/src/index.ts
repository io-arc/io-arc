import PathBuild from '@io-arc/path-build'
import { TDirName, TDirNameKey, TDirPathKey, TUrl } from '@io-arc/types'
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

/** Production build mode */
export const IS_PRODUCTION: boolean = NODE_ENV === BUILD.PRODUCTION

/**
 * config data
 * @param key
 * @param def
 */
const getConfig = <T>(key: string, def: T): T =>
  config.has(key) ? config.get<T>(key) : def

/**
 * Output directory
 *
 * config key: 'outputDir'
 * @default 'dist'
 */
export const DIST: TDirNameKey = getConfig<TDirNameKey>('outputDir', 'dist')

/**
 * Working directory name array
 * @param key
 * @param defaultDir
 */
const getWsArr = (key: string, defaultDir: TDirNameKey): TDirNameKey[] => {
  // use default directory name
  if (!config.has(key)) return [WS_ROOT, defaultDir]

  const d = config.get<TDirNameKey>(key)

  // use default directory name
  if (d === '') return [WS_ROOT, defaultDir]

  return [WS_ROOT, d]
}

/**
 * Working space path
 * @param key
 * @param defaultDir
 */
const getWsPath = (key: string, defaultDir: TDirNameKey): TDirNameKey =>
  PathBuild.relative(getWsArr(key, defaultDir))

/**
 * Working space absolute path
 * @param key
 * @param defaultDir
 */
const getWsAbsolutePath = (key: string, defaultDir: TDirNameKey): TDirNameKey =>
  PathBuild.absolute(getWsArr(key, defaultDir))

/**
 * Deploying directory array
 * @param key
 * @param defaultDir
 */
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
 * Working space HTML (including Compiler) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.html
 * @default ['src', 'html']
 */
export const WS_HTML_ARRAY: TDirNameKey[] = getWsArr('wsDir.html', 'html')

/**
 * HTML build using file-loader
 *
 * @default true
 */
export const USE_HTML_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.html.use',
  true
)

/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export const IS_HASH_HTML_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.html.hash',
  true
)

/**
 * Target for file-loader
 *
 * @default [':srcset', 'img:src', 'audio:src', 'video:src', 'source:src']
 */
export const TARGET_HTML_FILE_LOADER = getConfig<string[]>(
  'options.fileLoader.html.target',
  [':srcset', 'img:src', 'audio:src', 'video:src', 'source:src']
)

/**
 * HTML build minify option
 *
 * config key: options.html.minify
 * @default false
 */
export const HTML_MINIFY: boolean = getConfig<boolean>(
  'options.html.minify',
  false
)

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
export const JSON_MINIFY: boolean = getConfig<boolean>(
  'options.json.minify',
  false
)

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
 * Image directory absolute path for file-loader
 * First string is '<OS root>/src/' to absolutely
 */
export const WS_IMG_PATH_ABSOLUTE: TDirNameKey = getWsAbsolutePath(
  'wsDir.imgLoader',
  'img'
)

/**
 * Image deploy directory array for using file-loader
 * Array first is DIST constant
 *
 * config key: deployDir.img
 * @default [DIST, 'common', 'img']
 */
export const DEPLOY_IMG_ARRAY: TDirNameKey[] = getDeployArr('deployDir.img', [
  'common',
  'img'
])

/**
 * Website domain url
 *
 * config key: url
 * @default ''
 */
export const SITE_DOMAIN: TUrl = getConfig<TUrl>('url', '')

/**
 * WebSite root
 * @default '/'
 */
export const SITE_ROOT: TDirName = getConfig<TDirName>('siteRoot', '/')

/**
 * Site root relative path build
 * @param arr - Array for directory name
 */
export const siteRootRelative = (arr: TDirNameKey[]): TDirPathKey =>
  arr.length === 0 ? SITE_ROOT : `${SITE_ROOT + PathBuild.relative(arr)}/`

/**
 * Website root url
 * `SITE_DOMAIN` + `SITE_ROOT` with no slash for last
 *
 * @default ''
 */
export const SITE_URL: TUrl =
  SITE_DOMAIN !== '' ? SITE_DOMAIN + SITE_ROOT.replace(/\/$/, '') : ''

/**
 * Website title
 *
 * config key: title
 * @default ''
 */
export const SITE_TITLE: string = getConfig<string>('title', '')

/**
 * Website author
 *
 * @default ''
 */
export const SITE_AUTHOR: string = getConfig<string>('author', '')

/**
 * Website description
 *
 * @default ''
 */
export const SITE_DESCRIPTION: string = getConfig<string>('description', '')
