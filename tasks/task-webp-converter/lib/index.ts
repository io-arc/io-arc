import { MODE, MODE_ENV, WEBP_CONVERTER_CONFIG } from '@io-arc/env'
import Logger from '@io-arc/logger'
import { TFileName, TFilePath } from '@io-arc/types'
import WebpConverter from '@io-arc/webp-converter'
import { program } from 'commander'
import { green, red } from 'kleur'
import watch from 'node-watch'
import path from 'path'
import { version } from '../package.json'
;((): void => {
  program.version(version).parse(process.argv)
  if (WEBP_CONVERTER_CONFIG.length === 0) return

  // Log
  const createLog = (r: TFileName): void => {
    Logger.message(`convert to ${r}`, green)
  }
  const removeLog = (r: TFileName): void => {
    Logger.message(`remove for ${r}`, red)
  }
  const completeLog = (path: string): void =>
    Logger.complete(`webpConvert (${path})`)
  const errorLog = (e: Error): void => Logger.failed('webpConvert', e)

  /**
   * Remove convert webp files
   * @param remove
   * @default true
   */
  const checkRemove = (remove = true): boolean => remove

  // watch
  const webpWatch = (webp: WebpConverter): void => {
    watch(
      webp.targetDirectory(),
      {
        recursive: true,
        filter: (f: TFilePath): boolean =>
          webp.regExp4FileExtensions().test(path.basename(f))
      },
      (evt?: 'update' | 'remove', filePath?: TFilePath): void => {
        if (filePath == null) return

        switch (evt) {
          // new / update / when a file goes from underscored to underscored
          case 'update':
            webp.convert(filePath).subscribe(createLog, errorLog)
            return

          // delete / rename the file with underscores
          case 'remove':
            webp.remove(filePath).subscribe(removeLog, errorLog)
            return
          default:
            return
        }
      }
    )
  }

  WEBP_CONVERTER_CONFIG.forEach((config) => {
    const webp = new WebpConverter(
      config.target,
      config.ext,
      config.options,
      config.gifOptions,
      config.output
    )

    // Not target extensions
    if (webp.notTarget()) return

    // If remove flag is true
    if (checkRemove(config.deleteBefore)) {
      webp.removeAll().subscribe({
        error(e: Error) {
          errorLog(e)
        },
        complete() {
          Logger.message('remove for exist webp files')

          if (MODE_ENV === MODE.WATCH) {
            webp
              .convertAll()
              .subscribe(createLog, errorLog, () => webpWatch(webp))
          } else {
            webp
              .convertAll()
              .subscribe(createLog, errorLog, () =>
                completeLog(webp.targetDirectory())
              )
          }
        }
      })

      return
    }

    // No remove before
    if (MODE_ENV === MODE.WATCH) {
      webp.convertAll().subscribe(createLog, errorLog, () => webpWatch(webp))
    } else {
      webp
        .convertAll()
        .subscribe(createLog, errorLog, () =>
          completeLog(webp.targetDirectory())
        )
    }
  })
})()
