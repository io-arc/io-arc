import { TDirNameKey, TDirPathKey } from '@io-arc/types'
import { SITE_ROOT } from '@io-arc/env'

/**
 * Website assets directory path
 * @param dir - directory name array
 * @constructor
 */
export const AssetsDirPath = (dir: TDirNameKey[]): TDirPathKey => {
  return SITE_ROOT + dir.join('/')
}
