import { license, devDependencies, version as v } from '../../package.json'
import { engines } from '../../../../package.json'

export interface IoPackage {
  name: string
  version: string
  description: string
  main: string
  author: string
  license: string
  engines: { [p: string]: string }
  scripts: { [p: string]: string }
  devDependencies: { [p: string]: string }
  dependencies: { [p: string]: string }
}

export default class Package {
  #body: IoPackage = {
    name: '',
    version: '',
    description: '',
    main: '',
    author: '',
    license,
    engines,
    scripts: {},
    devDependencies: {},
    dependencies: {}
  }

  constructor(
    name: string,
    version: string,
    description: string,
    author: string
  ) {
    this.#body.name = name
    this.#body.version = version
    this.#body.description = description
    this.#body.author = author

    this.#body.devDependencies = {
      '@io-arc/task-browser-sync': `^${v}`,
      '@io-arc/task-clean': `^${v}`,
      '@io-arc/task-copy': `^${v}`,
      '@io-arc/task-manifest': `^${v}`,
      '@io-arc/task-service-worker': `^${v}`,
      '@io-arc/task-yaml2json': `^${v}`,
      'cross-env': devDependencies['cross-env']
    }
  }
}
