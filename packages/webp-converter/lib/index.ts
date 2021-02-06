import PathBuild from '@io-arc/path-build'
import { TDirNameKey, TFileName } from '@io-arc/types'
import glob from 'glob'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import mkdir from 'make-dir'
import path from 'path'
import { from, Observable } from 'rxjs'
import { flatMap } from 'rxjs/internal/operators'
import { map } from 'rxjs/operators'

interface IfFileObject {
  filename: TFileName
  convert: TFileName
}

interface IfGif2WebpOptions {
  lossy?: boolean
  mixed?: boolean
  quality?: number
  method?: number
  minimize?: boolean
  kmin?: number
  kmax?: number
  filter?: number
  metadata?: string
  multiThreading?: boolean
  buffer?: Buffer
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
    this.#extPattern = this.#createExtensionPattern(ext.png, ext.jpg, ext.gif)
    const pattern = this.#extPattern.join('|')
    this.#globExt = `+(${pattern})`
    this.#regExt = new RegExp(`.(${pattern})$`)

    this.#options = options
    this.#gifOptions = gifOptions
  }

  public convertAll(): Observable<TFileName> {
    return this.#observableConvert(
      glob.sync(`${this.#targetDir}/**/[!_]*.${this.#globExt}`)
    )
  }

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

  #createExtensionPattern = (
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
