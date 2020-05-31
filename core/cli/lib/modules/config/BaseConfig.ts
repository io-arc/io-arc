import { TFileNameKey } from '@io-arc/types'
import fs from 'fs'
import makeDir from 'make-dir'
import path from 'path'
import { FileCreateError, FileCreateSuccess } from '../Utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require('json2yaml')

export default class BaseConfig {
  /**
   * Create config file
   * @param key
   * @param data
   */
  protected async create<T>(key: TFileNameKey, data: T): Promise<void> {
    const filename = `config/${key}.yml`
    const body = YAML.stringify(data)
      .replace(/^---(\n|\r|\n\r)/g, '')
      .replace(/^\s{2}/gm, '')

    await makeDir(path.dirname(filename))
    try {
      fs.writeFileSync(filename, body)
      FileCreateSuccess(filename)
    } catch (e) {
      FileCreateError(filename, e)
      // process.exit(1)
    }
  }
}
