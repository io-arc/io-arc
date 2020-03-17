import { TDirName, TDirNameKey } from '@io-arc/types'
import config from 'config'
import path from 'path'

function dir(arr: TDirNameKey[], isAbsolute = false): TDirNameKey {
  const p = isAbsolute ? path.resolve : path.join
  let res: TDirNameKey = ''

  arr.forEach((d: TDirNameKey): void => {
    res = p(res, d)
  })

  return res
}

export default class PathBuild {
  /**
   * relative path build
   * @param arr - Array for directory name
   */
  public static relative(arr: TDirNameKey[]): TDirNameKey {
    return dir(arr)
  }

  /**
   * absolute path build
   * @param arr - Array for directory name
   */
  public static absolute(arr: TDirNameKey[]): TDirNameKey {
    return dir(arr, true)
  }

  /**
   * Root relative path build
   * @param arr - Array for directory name
   */
  public static rootRelative(arr: TDirNameKey[]): TDirName {
    const root = config.get<TDirName>('siteRoot')
    return arr.length === 0 ? root : `${root + PathBuild.relative(arr)}/`
  }
}
