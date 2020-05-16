import { program } from 'commander'
import { version } from '../package.json'
import glob from 'glob'
import {
  DIST,
  MODE,
  MODE_ENV,
  SITE_ROOT,
  SITE_TITLE,
  WS_ROOT
} from '@io-arc/env'
import { from, Observable } from 'rxjs'
import { TFilePath } from '@io-arc/types'
import { flatMap, map } from 'rxjs/operators'
import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs'
import PathBuild from '@io-arc/path-build'
import mkdir from 'make-dir'
import Logger from '@io-arc/logger'
import { green, red } from 'kleur'
import Yaml2Json from '@io-arc/yaml2json'
import watch from 'node-watch'

interface ManifestJSON {
  /**
   * Site title
   *
   * @default SITE_TITLE (@io-arc/env)
   */
  name?: string

  /** @default [] */
  related_applications?: {
    platform: string
    url: string
    id?: string
  }[]

  /**
   * Short title
   *
   * @default SITE_TITLE (@io-arc/env)
   */
  short_name?: string

  /**
   * Base URL
   *
   * @default SITE_ROOT (@io-arc/env)
   */
  scope?: string
}

;(() => {
  program.version(version).parse(process.argv)

  const create = (target: string[]): Observable<TFilePath> => {
    const reg = new RegExp('.ya?ml$')

    return from(target).pipe(
      // read JSON files
      map((filename: TFilePath): { name: TFilePath; base: ManifestJSON } => {
        const name = path.basename(filename).replace(reg, '.json')
        const base = yaml.safeLoad(fs.readFileSync(filename, 'utf8')) || {}
        return {
          name: PathBuild.relative([DIST, name]),
          base
        }
      }),

      // complementary
      map((obj: { name: TFilePath; base: ManifestJSON }): {
        name: TFilePath
        body: string
      } => {
        const { name, base } = obj

        if (!('name' in base) || base.name === '') base.name = SITE_TITLE
        // eslint-disable-next-line @typescript-eslint/camelcase
        if (!('short_name' in base) || base.short_name === '')
          // eslint-disable-next-line @typescript-eslint/camelcase
          base.short_name = SITE_TITLE
        if (!('scope' in base) || base.scope === '') base.scope = SITE_ROOT

        if (
          !('related_applications' in base) ||
          // eslint-disable-next-line @typescript-eslint/camelcase
          typeof base.related_applications !== 'object'
        )
          // eslint-disable-next-line @typescript-eslint/camelcase
          base.related_applications = []

        return {
          name,
          body: JSON.stringify(base, null, 2)
        }
      }),

      // if the directory doesn't exist, create it
      flatMap(
        async (obj: {
          name: TFilePath
          body: string
        }): Promise<{ name: TFilePath; body: string }> => {
          await mkdir(path.dirname(obj.name))
          return obj
        }
      ),

      // let's created !
      map(
        (obj: { name: TFilePath; body: string }): TFilePath => {
          try {
            fs.writeFileSync(obj.name, obj.body)
            return obj.name
          } catch (e) {
            throw new Error(e)
          }
        }
      )
    )
  }

  // log
  const createLog = (v: TFilePath): void =>
    Logger.message(`convert to ${v}`, green)
  const errorLog = (e: Error): void => Logger.failed('manifest', e)

  const files = glob.sync(`${WS_ROOT}/manifest*.y?(a)ml`)

  if (MODE_ENV === MODE.WATCH) {
    // watch
    const y2j = new Yaml2Json([WS_ROOT], [DIST])

    // Delete, rebuild and monitor the output file once
    y2j.removeAll(`${DIST}/manifest*.json`).subscribe({
      error(e: Error) {
        errorLog(e)
      },
      complete() {
        Logger.message('remove for exist manifest*.json files')

        // rebuild
        create(files).subscribe(createLog, errorLog, (): void => {
          watch(
            WS_ROOT,
            {
              recursive: true,
              filter: (f: TFilePath): boolean =>
                /^(?!_)manifest.*\.ya?ml$/.test(path.basename(f))
            },
            (evt: 'update' | 'remove', filepath: TFilePath): void => {
              switch (evt) {
                // new / update / when a file goes from underscored to underscored
                case 'update':
                  create([filepath]).subscribe(createLog, errorLog)
                  return

                // delete / rename the file with underscores
                case 'remove':
                  y2j
                    .remove(filepath)
                    .subscribe((f: TFilePath): void =>
                      Logger.message(`remove for ${f}`, red)
                    )
                  return

                // unknown
                default:
                  return
              }
            }
          )
        })
      }
    })
  } else if (files.length > 0) {
    // once
    create(files).subscribe(createLog, errorLog, (): void =>
      Logger.complete('manifest')
    )
  }
})()
