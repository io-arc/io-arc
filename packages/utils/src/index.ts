import { TDirNameKey, TDirPathKey } from '@io-arc/types'
import { SITE_ROOT } from '@io-arc/env'
import PathBuild from '@io-arc/path-build'

/**
 * Website assets directory path
 * @param dir - directory name array
 * @constructor
 */
export const AssetsDirPath = (dir: TDirNameKey[]): TDirPathKey => {
  return SITE_ROOT + dir.join('/')
}

/**
 * Site root relative path build
 * @param arr - Array for directory name
 */
export const siteRootRelative = (arr: TDirNameKey[]): TDirPathKey =>
  arr.length === 0 ? SITE_ROOT : `${SITE_ROOT + PathBuild.relative(arr)}/`
