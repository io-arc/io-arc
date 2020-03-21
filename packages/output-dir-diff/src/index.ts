import PathBuild from '@io-arc/path-build'
import { TDirNameKey } from '@io-arc/types'

export default class OutputDirDiff {
  readonly #base: TDirNameKey[]
  readonly #target: TDirNameKey[]
  readonly #matchDepth: number

  /**
   * Hierarchy comparison
   * @param base
   * @param target
   */
  constructor (base: TDirNameKey[], target: TDirNameKey[]) {
    this.#matchDepth = ((depth = 0) => {
      const num = base.length
      for (let i = 0; i < num; i++) {
        if (base[i] !== target[i]) break
        depth++
      }

      return depth
    })()

    this.#base = base
    this.#target = target
  }

  /**
   * Relative path of the comparison directory from the base directory
   */
  public targetRelativePath(): TDirNameKey {
    let depth = this.#base.length - this.#matchDepth
    let dir: TDirNameKey = ''

    while (depth > 0) {
      dir += '../'
      depth--
    }

    dir += PathBuild.relative(this.#target.slice(this.#matchDepth))
    return dir
  }
}