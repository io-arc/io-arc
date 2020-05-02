import PathBuild from '@io-arc/path-build'
import {
  TDirName,
  TDirNameKey,
  TDirPathKey,
  TFileName,
  TUrl
} from '@io-arc/types'
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

/** Working space absolute path */
export const WS_ROOT_ABSOLUTE: TDirPathKey = PathBuild.absolute([WS_ROOT])

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
 * Output directory path
 */
export const DIST_ABSOLUTE: TDirPathKey = PathBuild.absolute([DIST])

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
export const WS_STATIC_PATH: TDirPathKey = getWsPath('wsDir.static', 'static')

/**
 * Working space HTML (including AltHTML) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.html
 * @default ['src', 'html']
 */
export const WS_HTML_ARRAY: TDirNameKey[] = getWsArr('wsDir.html', 'html')

/**
 * Working space HTML (including AltHTML) directory path
 */
export const WS_HTML_PATH: TDirPathKey = PathBuild.relative(WS_HTML_ARRAY)

/**
 * Working space HTML (including AltHTML) directory absolute path
 */
export const WS_HTML_PATH_ABSOLUTE: TDirPathKey = PathBuild.absolute(
  WS_HTML_ARRAY
)

/**
 * pug compile output to PHP
 *
 * @default false
 */
export const OUTPUT_IN_PHP = getConfig<boolean>('options.pug.php', false)

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
 * @default [{tag: 'img',attribute: 'src',type: 'src'},{tag: 'img',attribute: 'srcset',type: 'srcset'},{tag: 'img',attribute: 'data-src',type: 'src'},{tag: 'img',attribute: 'data-srcset',type: 'srcset'},{tag:'source',attribute: 'src',type: 'src'}]
 */
export const TARGET_HTML_FILE_LOADER = getConfig<{ [p: string]: string }[]>(
  'options.fileLoader.html.target',
  [
    { tag: 'img', attribute: 'src', type: 'src' },
    { tag: 'img', attribute: 'srcset', type: 'srcset' },
    { tag: 'img', attribute: 'data-src', type: 'src' },
    { tag: 'img', attribute: 'data-srcset', type: 'srcset' },
    { tag: 'source', attribute: 'src', type: 'src' }
  ]
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
 * Working space CSS (including AltCSS) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.css
 * @default ['src', 'css']
 */
export const WS_CSS_ARRAY: TDirNameKey[] = getWsArr('wsDir.css', 'css')

/**
 * Working space CSS (including AltCSS) directory path
 */
export const WS_CSS_PATH: TDirPathKey = PathBuild.relative(WS_CSS_ARRAY)

/**
 * Working space CSS (including AltCSS) directory absolute path
 */
export const WS_CSS_PATH_ABSOLUTE: TDirPathKey = PathBuild.absolute(
  WS_CSS_ARRAY
)

/**
 * CSS build using file-loader
 *
 * @default true
 */
export const USE_CSS_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.css.use',
  true
)

/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export const IS_HASH_CSS_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.css.hash',
  true
)

/**
 * CSS build minify option
 *
 * config key: options.css.minify
 * @default false
 */
export const CSS_MINIFY: boolean = getConfig<boolean>(
  'options.css.minify',
  false
)

/**
 * CSS output (including AltCSS) directory name array
 *
 * config key: deployDir.css
 * @default ['common', 'css']
 */
export const OUTPUT_CSS_ARRAY: TDirNameKey[] = getConfig<TDirNameKey[]>(
  'deployDir.css',
  ['common', 'css']
)

/**
 * CSS output (including AltCSS) absolute directory path
 */
export const OUTPUT_CSS_PATH_ABSOLUTE: TDirPathKey = PathBuild.absolute([
  DIST,
  ...OUTPUT_CSS_ARRAY
])

/**
 * Working space JS (including AltJS) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.js
 * @default ['src', 'js']
 */
export const WS_JS_ARRAY: TDirNameKey[] = getWsArr('wsDir.js', 'js')

/** Working space JS (including AltJS) directory path */
export const WS_JS_PATH: TDirPathKey = PathBuild.relative(WS_JS_ARRAY)

/** Working space JS (including AltJS) directory absolute path */
export const WS_JS_PATH_ABSOLUTE: TDirPathKey = PathBuild.absolute(WS_JS_ARRAY)

/**
 * TypeScript Config file
 *
 * config key: options.js.tsconfig
 * @default 'tsconfig.json'
 */
export const TSCONFIG: TFileName = getConfig<TFileName>(
  'options.js.tsconfig',
  'tsconfig.json'
)

/**
 * File names for splitting the common logic
 *
 * @default null
 */
export const JS_SPLIT_FILENAME = getConfig<string | null>(
  'options.js.splitFilename',
  null
)

/**
 * TypeScript Config file
 *
 * config key: options.js.tsconfig
 * @default 'tsconfig.json'
 */
export const TSCONFIG: TFileName = getConfig<TFileName>(
  'options.js.tsconfig',
  'tsconfig.json'
)

/**
 * JS build source map output option
 *
 * @default false
 */
export const JS_SOURCE_MAP = getConfig<boolean>('options.js.sourceMap', false)

/**
 * JS build using file-loader
 *
 * @default true
 */
export const USE_JS_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.js.use',
  true
)

/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export const IS_HASH_JS_FILE_LOADER = getConfig<boolean>(
  'options.fileLoader.js.hash',
  true
)

/**
 * JS build minify option
 *
 * config key: options.js.minify
 * @default false
 */
export const JS_MINIFY = getConfig<boolean>('options.js.minify', false)

/**
 * JavaScript output (including AltJS) directory name array
 *
 * config key: deployDir.js
 * @default ['common', 'js']
 */
export const OUTPUT_JS_ARRAY: TDirNameKey[] = getConfig<TDirNameKey[]>(
  'deployDir.js',
  ['common', 'js']
)

/** JS output (including AltJS) absolute directory path */
export const OUTPUT_JS_PATH_ABSOLUTE: TDirPathKey = PathBuild.absolute([
  DIST,
  ...OUTPUT_JS_ARRAY
])

/**
 * Json output directory name array
 *
 * config key: deployDir.json
 * @default ['common', 'json']
 */
export const OUTPUT_JSON_ARRAY: TDirNameKey[] = getConfig<TDirNameKey[]>(
  'deployDir.json',
  ['common', 'data']
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
export const WS_YAML2JSON_PATH: TDirPathKey = getWsPath(
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
 */
export const DEPLOY_YAML2JSON_ARRAY: TDirNameKey[] = [
  DIST,
  ...OUTPUT_JSON_ARRAY
]

/**
 * Image directory absolute path for file-loader
 * First string is '<OS root>/src/' to absolutely
 */
export const WS_IMG_PATH_ABSOLUTE: TDirNameKey = getWsAbsolutePath(
  'wsDir.imgLoader',
  'img'
)

/**
 * Image output directory name array.
 *
 * config key: deployDir.img
 * @default ['common', 'img']
 */
export const OUTPUT_IMG_ARRAY: TDirNameKey[] = getConfig<TDirNameKey[]>(
  'deployDir.img',
  ['common', 'img']
)

/**
 * Image deploy directory array for using file-loader
 * Array first is DIST constant
 */
export const DEPLOY_IMG_ARRAY: TDirNameKey[] = [DIST, ...OUTPUT_IMG_ARRAY]

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
