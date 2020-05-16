import fs from 'fs'
import { DIST, WS_ROOT_ABSOLUTE } from '@io-arc/env'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'
import { red } from 'kleur'
import Logger from '@io-arc/logger'

interface Manifest {
  ignoreURLParametersMatching?: string[] | RegExp[]
  globDirectory: string
  swDest: string
  runtimeCaching?: {
    handler: string
    urlPattern: string | RegExp
  }[]
}

interface Sw {
  filename?: string
  manifest: Manifest
}

export default class GenerateServiceWorker {
  readonly #fileExist: boolean
  readonly #target = `${WS_ROOT_ABSOLUTE}/sw.js`

  constructor() {
    try {
      fs.statSync(this.#target)
      this.#fileExist = true
    } catch (e) {
      this.#fileExist = false
    }
  }

  /** Target file exist check */
  public exist(): boolean {
    return this.#fileExist
  }

  public run(): void {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require(this.#target)

    of(data)
      .pipe(
        map(
          (file: Sw): Sw => {
            if (file.filename == null || file.filename === '') {
              file.filename = 'sw.js'
            }

            if (!/\.js$/.test(file.filename)) {
              throw new Error(`Target filename wasn't JavaScrip file`)
            }

            return file
          }
        ),
        map(
          (file: Sw): Manifest => {
            file.manifest.globDirectory = DIST
            file.manifest.swDest = `${DIST}/${file.filename}`
            return file.manifest
          }
        )
      )
      .subscribe(
        (m: Manifest) => {
          this.#generate(m)
        },
        (e: string) => {
          Logger.message(e, red)
          process.exit(1)
        }
      )
  }

  // Generate service-worker
  #generate = (m: Manifest) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { generateSW } = require('workbox-build')

    generateSW(m)
      .then((obj: { count: number; size: number }): void => {
        Logger.complete('service-worker')
        Logger.message(
          `pre cache ${obj.count} files, total ${this.#unitChangeForByte(
            obj.size
          )}`
        )
      })
      .catch((e: Error): void => {
        Logger.failed('service-worker', e)
      })
  }

  /**
   * The number of bytes and units for the denominator calculation
   * @param size
   */
  #calcByte = (size: number): { denominator: number; unit: string } => {
    const kb = 1024
    const mb = kb ** 2
    const gb = kb ** 3
    const tb = kb ** 4

    if (size >= tb) return { denominator: tb, unit: 'TB' }
    if (size >= gb) return { denominator: gb, unit: 'GB' }
    if (size >= mb) return { denominator: mb, unit: 'MB' }
    if (size >= kb) return { denominator: kb, unit: 'KB' }
    return { denominator: -1, unit: 'byte' }
  }

  /**
   * Display file size
   * @param size
   */
  #unitChangeForByte = (size: number): string => {
    const { denominator, unit } = this.#calcByte(size)
    const decimal = 10 ** 2
    const fileSize =
      denominator > -1
        ? Math.floor((size / denominator) * decimal) / decimal
        : size
    return fileSize + unit
  }
}
