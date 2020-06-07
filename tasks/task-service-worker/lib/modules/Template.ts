import { WS_ROOT } from '@io-arc/env'
import Logger from '@io-arc/logger'
import cpx from 'cpx'
import { blue } from 'kleur'
import path from 'path'

export function templateCreate(): void {
  cpx.copySync(`${path.dirname(__filename)}/template/sw.js`, WS_ROOT)

  Logger.message('done !', blue)
  process.exit(0)
}
