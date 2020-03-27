import { WS_ROOT } from '@io-arc/env'
import PathBuild from '@io-arc/path-build'
import { TDirNameKey } from '@io-arc/types'
import config from 'config'

export default class TargetDirectory {
  /**
   * Get working directory array name
   * @param key - config property
   * @param defaultDir - Default directory name if key name does not exist or empty
   */
  public static wsArray(key: string, defaultDir: TDirNameKey): TDirNameKey[] {
    // use default directory name
    if (!config.has(key)) return [WS_ROOT, defaultDir]

    const d = config.get<TDirNameKey>(key)

    // use default directory name
    if (d === '') return [WS_ROOT, defaultDir]

    return [WS_ROOT, d]
  }

  /**open
   * Get working directory path
   * @param key - config property
   * @param defaultDir - Default directory name if key name does not exist or empty
   */
  public static wsPath(key: string, defaultDir: TDirNameKey): TDirNameKey {
    return PathBuild.relative(TargetDirectory.wsArray(key, defaultDir))
  }
}
