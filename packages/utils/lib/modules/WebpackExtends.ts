import fs from 'fs'
import { ExternalsElement, RuleSetRule, Plugin } from 'webpack'

interface IfWebpackExtends {
  externals?: ExternalsElement | ExternalsElement[]
  loaders?: RuleSetRule[]
  plugins?: Plugin[]
  [key: string]: any
}

export class WebpackExtends {
  readonly #filename = `${process.cwd()}/config/webpack.extends.js`
  readonly #data: IfWebpackExtends | null

  constructor(target: string) {
    const exist = this.#checkFile()

    if (!exist) {
      this.#data = null
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const extend = require(this.#filename)
    this.#data = this.#targetData(extend, target)
  }

  /**
   * Extend Data
   */
  public data(): IfWebpackExtends | null {
    return this.#data
  }

  /**
   * Get a externals define
   */
  public externals(): IfWebpackExtends['externals'] | undefined {
    if (this.#data == null) return undefined
    return this.#data.externals || undefined
  }

  /**
   * Get a module rule option
   */
  public loaders(): IfWebpackExtends['loaders'] | undefined {
    if (this.#data == null) return undefined
    return this.#data.loaders || undefined
  }

  public plugins(): IfWebpackExtends['plugins'] | undefined {
    if (this.#data == null) return undefined
    return this.#data.plugins || undefined
  }

  /**
   * File exist check
   */
  #checkFile = (): boolean => {
    try {
      fs.statSync(this.#filename)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Whether the data belonging to the target exists or not
   * @param data
   * @param target
   */
  #targetData = (
    data: IfWebpackExtends | null,
    target: string
  ): IfWebpackExtends | null => {
    if (data == null) return null
    return target in data ? data[target] : null
  }
}
