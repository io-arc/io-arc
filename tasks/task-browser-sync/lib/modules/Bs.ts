import fs from 'fs'
import { TFileName, TFilePath, TUrl } from '@io-arc/types'
import { ReadYaml } from '@io-arc/read-yaml'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { DIST, SITE_ROOT } from '@io-arc/env'
import browserSync, { Options } from 'browser-sync'

export default class Bs {
  readonly #proxy: TUrl | undefined
  readonly #history: TFilePath | undefined
  readonly #filename: TFileName | undefined

  constructor(proxy: TUrl | undefined, history: TFilePath | undefined) {
    this.#proxy = proxy
    this.#history = history

    this.#filename = this.#checkFile('browser-sync.yml')
    if (this.#filename !== undefined) return

    this.#filename = this.#checkFile('browser-sync.yaml')
    if (this.#filename !== undefined) return

    this.#filename = this.#checkFile('bs.yml')
    if (this.#filename !== undefined) return

    this.#filename = this.#checkFile('bs.yaml')
  }

  public run(): void {
    const ops = this.#filename
      ? ReadYaml<Options>(this.#filename, ['config'])
      : {}

    this.#options(ops).subscribe((o: Options): void => {
      browserSync(o)
    })
  }

  /**
   * File exist check
   * @param filename
   */
  #checkFile = (filename: TFileName): TFileName | undefined => {
    try {
      fs.statSync(`${process.cwd()}/config/${filename}`)
      return filename
    } catch (e) {
      return undefined
    }
  }

  /**
   * Create BrowserSync option
   * @param ops
   */
  #options = (ops: Options): Observable<Options> => {
    return of(ops).pipe(
      map(
        (o: Options): Options => {
          if (o.files !== undefined) return o

          o.files = `${DIST}/**/*`
          return o
        }
      ),
      map(
        (o: Options): Options => {
          if (this.#proxy !== undefined || o.proxy !== undefined) {
            if (o.server !== undefined) delete o.server
            if (this.#proxy !== undefined) o.proxy = this.#proxy
            return o
          }

          if (o.server === undefined) o.server = `${DIST}/`
          return o
        }
      ),
      map(
        (o: Options): Options => {
          if (o.serveStatic !== undefined) return o

          const root = SITE_ROOT.replace(/\/$/, '')
          if (root !== '') o.serveStatic = [{ route: [root], dir: DIST }]
          return o
        }
      ),
      map(
        (o: Options): Options => {
          if (this.#history === undefined) return o

          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const historyApiFallback = require('connect-history-api-fallback')
          const middleware = historyApiFallback({ index: this.#history })

          o.middleware = [...middleware]
          o.single = true
          return o
        }
      )
    )
  }
}
