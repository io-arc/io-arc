import { TFileNameKey } from '@io-arc/types'
import makeDir from 'make-dir'
import path from 'path'
import fs from 'fs'
import { red } from 'kleur'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require('json2yaml')

export default class BaseConfig {
  protected async create<T>(key: TFileNameKey, data: T): Promise<void> {
    const filename = `config/${key}.yml`
    const body = YAML.stringify(data)
      .replace(/^---(\n|\r|\n\r)/g, '')
      .replace(/^\s{2}/gm, '')

    await makeDir(path.dirname(filename))
    try {
      fs.writeFileSync(filename, body)
    } catch (e) {
      console.log(red(`Oops X(\nFile create failed for ${filename}`))
      console.error(e)
      process.exit(1)
    }
  }
}
