import cpx from 'cpx'
import path from 'path'
import Logger from '@io-arc/logger'
import { red, blue } from 'kleur'
import { WS_ROOT } from '@io-arc/env'

export function templateCreate(): void {
  if (process.mainModule == null) {
    Logger.message('Missing main module', red)
    process.exit(1)
    return
  }

  cpx.copy(
    `${path.dirname(process.mainModule.filename)}/template/sw.js`,
    WS_ROOT,
    (err: Error | null) => {
      if (err) {
        Logger.failed('create a service-worker', err)
        process.exit(1)
        return
      }
      Logger.message('done !', blue)
      process.exit(0)
    }
  )
}
