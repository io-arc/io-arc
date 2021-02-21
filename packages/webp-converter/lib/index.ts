import PathBuild from '@io-arc/path-build'
import {
  IfGif2WebpOptions,
  TDirNameKey,
  TFileName,
  TFilePath
} from '@io-arc/types'
import fs from 'fs'
import glob from 'glob'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import mkdir from 'make-dir'
import path from 'path'
import { from, Observable, of } from 'rxjs'
import { flatMap } from 'rxjs/internal/operators'
import { map } from 'rxjs/operators'

interface IfFileObject {
  filename: TFileName
  convert: TFileName
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageminGif2Webp = require('imagemin-gif2webp')

export default class WebpConverter {
  readonly #targetDir: TDirNameKey
  readonly #outputDir: TDirNameKey

  readonly #regTarget: RegExp
  readonly #globExt: string
  readonly #regExt: RegExp
  readonly #extPattern: string[]

  readonly #options?: imageminWebp.Options
  readonly #gifOptions?: IfGif2WebpOptions

  constructor(
    targetDir: TDirNameKey[],
    ext: { png: boolean; jpg: boolean; gif: boolean } = {
      png: true,
      jpg: true,
      gif: false
    },
    options?: imageminWebp.Options,
    gifOptions?: IfGif2WebpOptions,
    outputDir?: TDirNameKey[]
  ) {
    this.#targetDir = PathBuild.relative(targetDir)
    this.#outputDir =
      outputDir != null ? PathBuild.relative(outputDir) : this.#targetDir

    this.#regTarget = new RegExp(`^${this.#targetDir}`)

    // extension pattern
    this.#extPattern = this.#createExtensionsPattern(ext.png, ext.jpg, ext.gif)
    const pattern = this.#extPattern.join('|')
    this.#globExt = `+(${pattern})`
    this.#regExt = new RegExp(`\\.(${pattern})$`)

    this.#options = options
    this.#gifOptions = gifOptions
  }

  public notTarget(): boolean {
    return this.#extPattern.length === 0
  }

  public targetDirectory(): TDirNameKey {
    return this.#targetDir
  }

  public regExp4FileExtensions(): RegExp {
    return new RegExp(`^(?!_).*\\.(${this.#extPattern.join('|')})$`)
  }

  /** Batch conversion of specific extensions in a specified directory */
  public convertAll(): Observable<TFileName> {
    return this.#observableConvert(
      glob.sync(`${this.#targetDir}/**/[!_]*.${this.#globExt}`)
    )
  }

  /**
   * Single file conversion
   * Output to the location specified by constructor
   * Suppose to be used for file monitoring
   * @param filename - target file for png or jpg or gif
   */
  public convert(filename: TFileName): Observable<TFileName> {
    return this.#observableConvert([filename])
  }

  /**
   * Deleting the output Webp files
   */
  public removeAll(): Observable<TFileName> {
    return from(glob.sync(`${this.#outputDir}/**/*.webp`)).pipe(
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
   * Delete a single file
   * @param target
   */
  public remove(target: TFilePath): Observable<TFileName> {
    return of(target).pipe(
      map(
        (filepath: TFilePath): TFileName => {
          const t = filepath
            .replace(this.#regTarget, '')
            .replace(this.#regExt, '')

          return PathBuild.relative([this.#outputDir, `${t}.webp`])
        }
      ),

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
   * Convert process
   * @param files
   */
  #observableConvert = (files: TFileName[]): Observable<TFileName> => {
    return from(files).pipe(
      map(
        (filename: TFileName): IfFileObject => {
          return {
            filename,
            convert: filename
              .replace(this.#regTarget, this.#outputDir)
              .replace(this.#regExt, '.webp')
          }
        }
      ),

      flatMap(
        async (obj: IfFileObject): Promise<IfFileObject> => {
          await mkdir(path.dirname(obj.convert))
          return obj
        }
      ),

      flatMap(
        async (obj: IfFileObject): Promise<TFileName> => {
          try {
            await imagemin([obj.filename], {
              destination: path.dirname(obj.convert),
              plugins: [
                imageminWebp(this.#options),
                imageminGif2Webp(this.#gifOptions)
              ]
            })
            return obj.convert
          } catch (e) {
            throw new Error(e)
          }
        }
      )
    )
  }

  /**
   * Create the extensions pattern
   * @param png
   * @param jpg
   * @param gif
   */
  #createExtensionsPattern = (
    png: boolean,
    jpg: boolean,
    gif: boolean
  ): string[] => {
    const ext: string[] = []

    if (png) ext.push('png')
    if (jpg) ext.push(...['jpg', 'jpeg'])
    if (gif) ext.push('gif')

    return ext
  }
}
