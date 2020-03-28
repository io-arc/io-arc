import { DIST } from '@io-arc/env'
import Logger from '@io-arc/logger'
import rimraf from 'rimraf'

const task = 'clean'

rimraf(`{${DIST},stats}/*`, (err: Error): void => {
  if (err) {
    Logger.failed(task, err)
    return
  }

  Logger.complete(task)
})
