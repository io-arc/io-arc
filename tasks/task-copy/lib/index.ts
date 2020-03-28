import { DIST, MODE, MODE_ENV } from '@io-arc/env'
import Logger from '@io-arc/logger'
import TargetDirectory from '@io-arc/target-directory'
import { TGlobPattern } from '@io-arc/types'
import cpx from 'cpx'
import { green, yellow } from 'kleur'
import moment from 'moment'

const task = 'copy'
const ws = TargetDirectory.wsPath('wsDir.static', 'static')
const source: TGlobPattern = `${ws}/**/!(_*|README.md)`

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
      Logger.message(`[${moment().format(format)}] ${e.path} removed !`, yellow)
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
