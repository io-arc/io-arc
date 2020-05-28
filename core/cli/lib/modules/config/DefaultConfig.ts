import { TDirName } from '@io-arc/types'
import BaseConfig from './BaseConfig'

interface IoDefaultConfig {
  title: string
  url: string
  author: string
  description: string
  siteRoot: TDirName
}

interface IoEnvConfig {
  type: string
}

export default class DefaultConfig extends BaseConfig {
  readonly #data: IoDefaultConfig

  constructor(
    title: IoDefaultConfig['title'],
    url: IoDefaultConfig['url'],
    author: IoDefaultConfig['author'],
    description: IoDefaultConfig['author'],
    siteRoot: IoDefaultConfig['siteRoot']
  ) {
    super()

    this.#data = {
      title,
      url,
      author,
      description,
      siteRoot
    }
  }

  /** YAML file create */
  public async create(): Promise<void> {
    await super.create('default', this.#data)
    await super.create<IoEnvConfig>('development', { type: 'development' })
    await super.create<IoEnvConfig>('production', { type: 'production' })
  }
}
