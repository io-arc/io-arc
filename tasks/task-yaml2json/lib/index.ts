import { DIST, MODE, MODE_ENV } from '@io-arc/env'
import Logger from '@io-arc/logger'
import PathBuild from '@io-arc/path-build'
import TargetDirectory from '@io-arc/target-directory'
import { TDirNameKey, TFilePath } from '@io-arc/types'
import Yaml2Json from '@io-arc/yaml2json'
import config from 'config'
import { green, red } from 'kleur'
import watch from 'node-watch'
import path from 'path'

// workspace and output directory
const ws = TargetDirectory.wsArray('wsDir.yaml2json', 'yaml2json')
const dist: TDirNameKey[] = config.get('deployDir.json')
const y2j = new Yaml2Json(ws, [DIST, ...dist])
const minify = config.get<boolean>('options.json.minify')

// log
const createLog = (v: TFilePath): void =>
  Logger.message(`convert to ${v}`, green)
const removeLog = (v: TFilePath): void => Logger.message(`remove for ${v}`, red)
const completeLog = (): void => Logger.complete('yaml2json')
const errorLog = (e: Error): void => Logger.failed('yaml2json', e)

// watch
const y2jWatch = (): void => {
  watch(
    PathBuild.relative(ws),
    {
      recursive: true,
      filter: (f: TFilePath): boolean =>
        /^(?!_).*\.ya?ml$/.test(path.basename(f))
    },
    (evt: 'update' | 'remove', filepath: TFilePath): void => {
      switch (evt) {
        // new / update / when a file goes from underscored to underscored
        case 'update':
          y2j.convert(filepath, minify).subscribe(createLog, errorLog)
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
      y2j.convertAll(minify).subscribe(createLog, errorLog, y2jWatch)
    }
  })
} else {
  // once
  y2j.convertAll(minify).subscribe(createLog, errorLog, completeLog)
}
