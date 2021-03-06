import { TDirNameKey } from '@io-arc/types'
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
}
