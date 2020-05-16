import { program } from 'commander'
import { version } from '../package.json'
import { DIST } from '@io-arc/env'
import Logger from '@io-arc/logger'
import rimraf from 'rimraf'
;(() => {
  program.version(version).parse(process.argv)

  const task = 'clean'

  rimraf(`{${DIST},stats}/*`, (err: Error): void => {
    if (err) {
      Logger.failed(task, err)
      return
    }

    Logger.complete(task)
  })
})()
