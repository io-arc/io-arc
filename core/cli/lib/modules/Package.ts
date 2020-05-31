import fs from 'fs'
import { devDependencies as d, engines } from '../../../../package.json'
import { devDependencies, license, version as v } from '../../package.json'
import { TLibraryName } from './questions/BaseQuestions'
import { FileCreateError } from './Utils'

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
      'npm-run-all': devDependencies['npm-run-all'],
      eslint: d['eslint'],
      'eslint-config-prettier': d['eslint-config-prettier'],
      prettier: d['prettier'],
      webpack: devDependencies['webpack'],
      'webpack-cli': devDependencies['webpack-cli']
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

  /**
   * Adding library in devDependencies
   * @param library - @io-arc library
   */
  public addDevDependencies(library: TLibraryName): void {
    if (library == null) return
    this.#body.devDependencies[library] = `^${v}`
  }

  /**
   * Adding library object in devDependencies
   * @param library - library object
   */
  public addDevDependenciesObject(
    library: { [p: string]: string } | null
  ): void {
    if (library == null) return
    this.#body.devDependencies = { ...this.#body.devDependencies, ...library }
  }

  /**
   * Adding library object in dependencies
   * @param library
   */
  public addDependenciesObject(library: { [p: string]: string } | null): void {
    if (library == null) return
    this.#body.dependencies = { ...this.#body.dependencies, ...library }
  }

  /**
   * Create package.json
   */
  public create(): void {
    this.#devDepToDep()
    this.#body.devDependencies = this.#sortByKey(this.#body.devDependencies)
    this.#body.dependencies = this.#sortByKey(this.#body.dependencies)

    try {
      fs.writeFileSync('package.json', JSON.stringify(this.#body, null, 2))
    } catch (e) {
      FileCreateError('package.json', e)
      process.exit(1)
    }
  }

  /**
   * Sort object by key
   * @param base
   */
  #sortByKey = (base: { [p: string]: string }): { [p: string]: string } => {
    const ordered: { [p: string]: string } = {}
    Object.keys(base)
      .sort()
      .forEach((key): void => {
        ordered[key] = base[key]
      })

    return ordered
  }

  /**
   * Convert devDependencies to dependencies
   */
  #devDepToDep = (): void => {
    const target = ['vue']
    const keys = Object.keys(this.#body.devDependencies)
    const arr: { [p: string]: string } = {}

    for (const key of keys) {
      if (!target.includes(key)) continue

      arr[key] = this.#body.devDependencies[key]
      delete this.#body.devDependencies[key]
    }

    this.addDependenciesObject(arr)
  }
}
