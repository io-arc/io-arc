import { license, devDependencies, version as v } from '../../package.json'
import { engines } from '../../../../package.json'
import { TLibraryName } from './questions/BaseQuestions'

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
      'cross-env': devDependencies['cross-env'],
      'npm-run-all': devDependencies['npm-run-all']
    }

    this.#body.scripts = {
      start: 'cross-env NODE_ENV=development MODE_ENV=watch npm-run-all -p b:*',
      build:
        'cross-env NODE_ENV=development MODE_ENV=once npm-run-all -s clean b:* service-worker',
      release:
        'cross-env NODE_ENV=production MODE_ENV=once npm-run-all -s clean b:* service-worker',
      clean: 'ia-clean',
      server: 'ia-browser-sync',
      'service-worker': 'ia-sw',
      'b:copy': 'ia-copy',
      'b:yaml2json': 'ia-yaml2json',
      'b:manifest': 'ia-manifest',
      'b:webpack': 'webpack'
    }
  }

  public addDevDependencies(library: TLibraryName): void {
    if (library === null) return
    this.#body.devDependencies[library] = `^${v}`
  }
}
