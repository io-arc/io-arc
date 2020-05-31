import { TDirPathKey, TFilePath, TGlobPattern } from '@io-arc/types'
import cpx from 'cpx'
import makeDir from 'make-dir'
import path from 'path'
import { FileCreateSuccess } from './Utils'

export interface IoTemplateFiles {
  source: TFilePath | TGlobPattern
  output: TDirPathKey
}

const dir =
  process.mainModule === undefined
    ? './'
    : path.dirname(process.mainModule.filename)
export const templateDir = `${dir}/template`

export default class Files {
  #template: IoTemplateFiles[]

  constructor() {
    this.#template = [
      {
        source: `${templateDir}/.{editorconfig,gitignore,npmignore,npmrc,prettierrc,browserslistrc}`,
        output: ''
      }
    ]
  }

  /**
   * Adding template files list
   * @param files
   */
  public add(files: IoTemplateFiles[]): void {
    if (files.length === 0) return

    const tmp: IoTemplateFiles[] = []

    this.#template = [...this.#template, ...files].filter((f) => {
      if (tmp.length === 0) {
        tmp.push(f)
        return f
      }

      const noDuplicated = tmp.every(
        (e) => e.source !== f.source || e.output !== e.output
      )

      if (noDuplicated) {
        tmp.push(f)
        return f
      }

      return false
    })
  }

  /** Create template files */
  public async create(workingDirectories: string[]): Promise<void> {
    await this.#makeSrc(workingDirectories)

    this.#template.forEach((f) => {
      cpx.copy(f.source, f.output, (e) => {
        if (e != null) {
          console.error(e)
          process.exit(1)
          return
        }

        const filename = f.source.split('/').pop() as string
        const name = /(.+)/.test(f.output)
          ? /\/$/.test(f.output)
            ? f.output + filename
            : `${f.output}/${filename}`
          : filename

        FileCreateSuccess(name)
      })
    })
  }

  #makeSrc = async (dirs: string[]): Promise<void> => {
    await Promise.all(
      dirs.map(async (dir) => {
        await makeDir(`src/${dir}`)
      })
    )
  }
}
