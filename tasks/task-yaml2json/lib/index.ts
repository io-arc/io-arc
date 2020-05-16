import { program } from 'commander'
import { version } from '../package.json'
import {
  DEPLOY_YAML2JSON_ARRAY,
  JSON_MINIFY,
  MODE,
  MODE_ENV,
  WS_YAML2JSON_ARRAY,
  WS_YAML2JSON_PATH
} from '@io-arc/env'
import Logger from '@io-arc/logger'
import { TFilePath } from '@io-arc/types'
import Yaml2Json from '@io-arc/yaml2json'
import { green, red } from 'kleur'
import watch from 'node-watch'
import path from 'path'
;(() => {
  program.version(version).parse(process.argv)

  const y2j = new Yaml2Json(WS_YAML2JSON_ARRAY, DEPLOY_YAML2JSON_ARRAY)

  // log
  const createLog = (v: TFilePath): void =>
    Logger.message(`convert to ${v}`, green)
  const removeLog = (v: TFilePath): void =>
    Logger.message(`remove for ${v}`, red)
  const completeLog = (): void => Logger.complete('yaml2json')
  const errorLog = (e: Error): void => Logger.failed('yaml2json', e)

  // watch
  const y2jWatch = (): void => {
    watch(
      WS_YAML2JSON_PATH,
      {
        recursive: true,
        filter: (f: TFilePath): boolean =>
          /^(?!_).*\.ya?ml$/.test(path.basename(f))
      },
      (evt: 'update' | 'remove', filepath: TFilePath): void => {
        switch (evt) {
          // new / update / when a file goes from underscored to underscored
          case 'update':
            y2j.convert(filepath, JSON_MINIFY).subscribe(createLog, errorLog)
            return

          // delete / rename the file with underscores
          case 'remove':
            y2j.remove(filepath).subscribe(removeLog, errorLog)
            return

          // unknown
          default:
            return
        }
      }
    )
  }

  /* Task */
  if (MODE_ENV === MODE.WATCH) {
    // Delete, rebuild and monitor the output file once
    y2j.removeAll().subscribe({
      error(e: Error) {
        errorLog(e)
      },
      complete() {
        Logger.message('remove for exist json files')

        // rebuild
        y2j.convertAll(JSON_MINIFY).subscribe(createLog, errorLog, y2jWatch)
      }
    })
  } else {
    // once
    y2j.convertAll(JSON_MINIFY).subscribe(createLog, errorLog, completeLog)
  }
})()
