import fs from 'fs'
import { ExternalsElement } from 'webpack'

interface IfWebpackExtend {
  externals?: ExternalsElement | ExternalsElement[]
  [key: string]: any
}

export class WebpackExtend {
  readonly #filename = `${process.cwd()}/config/webpack.extend.js`
  readonly #data: IfWebpackExtend | null

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
  public data(): IfWebpackExtend | null {
    return this.#data
  }

  /**
   * Get a externals define
   */
  public externals(): IfWebpackExtend['externals'] | undefined {
    if (this.#data == null) return undefined
    return this.#data.externals || undefined
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
    data: IfWebpackExtend | null,
    target: string
  ): IfWebpackExtend | null => {
    if (data == null) return null
    return target in data ? data[target] : null
  }
}
