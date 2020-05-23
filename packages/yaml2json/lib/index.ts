import PathBuild from '@io-arc/path-build'
import {
  TDirNameKey,
  TFileName,
  TFileNameKey,
  TGlobPattern,
  TJsonString
} from '@io-arc/types'
import fs from 'fs'
import glob from 'glob'
import yaml from 'js-yaml'
import mkdir from 'make-dir'
import path from 'path'
import { from, Observable, of } from 'rxjs'
import { flatMap, map } from 'rxjs/operators'

interface FileObject {
  name: TFileName
  body: TJsonString
}

export default class Yaml2Json {
  readonly #targetDir: TDirNameKey
  readonly #outputDirArr: TDirNameKey[]
  readonly #regTarget: RegExp
  readonly #regExt: RegExp

  /**
   * Initialize YAML directory
   * @param targetDir - YAML read directory
   * @param outputDir - JSON convert directory
   */
  constructor(targetDir: TDirNameKey[], outputDir: TDirNameKey[]) {
    this.#targetDir = PathBuild.relative(targetDir)
    this.#outputDirArr = outputDir

    this.#regTarget = new RegExp(`${this.#targetDir}/`)
    this.#regExt = new RegExp('.ya?ml$')
  }

  /**
   * Convert a YAML file under a specific directory to JSON
   * @param isMinify
   */
  public convertAll(isMinify: boolean): Observable<TFileName> {
    return this.#observableConvert(
      glob.sync(`${this.#targetDir}/**/[!_]*.y?(a)ml`),
      isMinify
    )
  }

  /**
   * Single file conversion
   * @param filepath - target YAML file
   * @param isMinify
   */
  public convert(
    filepath: TFileName,
    isMinify: boolean
  ): Observable<TFileName> {
    return this.#observableConvert([filepath], isMinify)
  }

  /**
   * Deleting the output JSON
   * @param target - Glob pattern
   */
  public removeAll(target?: TGlobPattern): Observable<TFileName> {
    const output = PathBuild.relative(this.#outputDirArr)
    const t = target || `${output}/**/*.json`

    return from(glob.sync(t)).pipe(
      map(
        (filename: TFileName): TFileName => {
          try {
            fs.unlinkSync(filename)
            return filename
          } catch (e) {
            throw new Error(e)
          }
        }
      )
    )
  }

  /**
   * Single file deleting
   * @param key
   */
  public remove(key: TFileNameKey): Observable<TFileName> {
    return of(key).pipe(
      // search output json
      map(
        (filename: TFileNameKey): TFileName => {
          const target = filename
            .replace(this.#regTarget, '')
            .replace(this.#regExt, '')

          return PathBuild.relative([...this.#outputDirArr, `${target}.json`])
        }
      ),

      // json deleting
      map(
        (filename: TFileName): TFileName => {
          try {
            fs.unlinkSync(filename)
            return filename
          } catch (e) {
            throw new Error(e)
          }
        }
      )
    )
  }

  /**
   * Common transformation process
   * @param filepath
   * @param isMinify
   */
  #observableConvert = (
    filepath: TFileName[],
    isMinify: boolean
  ): Observable<TFileName> =>
    from(filepath).pipe(
      map(
        (filename: TFileName): FileObject => {
          const body = yaml.safeLoad(fs.readFileSync(filename, 'utf8'))

          const name = filename
            .replace(this.#regTarget, '')
            .replace(this.#regExt, '')
          const space = isMinify ? 0 : 2

          return {
            name: PathBuild.relative([...this.#outputDirArr, `${name}.json`]),
            body: JSON.stringify(body || '', null, space)
          }
        }
      ),

      // If the directory doesn't exist, create it
      flatMap(
        async (obj: FileObject): Promise<FileObject> => {
          await mkdir(path.dirname(obj.name))
          return obj
        }
      ),

      // Create JSON
      map(
        (obj: FileObject): TFileName => {
          try {
            fs.writeFileSync(obj.name, obj.body)
            return obj.name
          } catch (e) {
            throw new Error(e)
          }
        }
      )
    )
}
