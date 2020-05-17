import { program } from 'commander'
import { version } from '../package.json'
import { DIST, MODE, MODE_ENV, WS_STATIC_PATH } from '@io-arc/env'
import Logger from '@io-arc/logger'
import { TGlobPattern } from '@io-arc/types'
import cpx from 'cpx'
import { green, yellow } from 'kleur'
import moment from 'moment'
;((): void => {
  program.version(version).parse(process.argv)

  const task = 'copy'
  const source: TGlobPattern = `${WS_STATIC_PATH}/**/!(_*|README.md)`

  if (MODE_ENV === MODE.WATCH) {
    const format = 'HH:mm:ss'
    cpx
      .watch(source, DIST)
      .on('copy', (e): void => {
        Logger.message(
          `[${moment().format(format)}] ${e.dstPath} copied !`,
          green
        )
      })
      .on('remove', (e): void => {
        Logger.message(
          `[${moment().format(format)}] ${e.path} removed !`,
          yellow
        )
      })
      .on('watch-error', (err): void => Logger.failed(task, err))
  } else {
    cpx.copy(source, DIST, (err): void => {
      if (err) {
        Logger.failed(task, err)
        return
      }

      Logger.complete(task)
    })
  }
})()
