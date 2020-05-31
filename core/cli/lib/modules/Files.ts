import { TDirPathKey, TFilePath, TGlobPattern } from '@io-arc/types'

export interface IoTemplateFiles {
  source: TFilePath | TGlobPattern
  output: TDirPathKey
}

export const templateDir = './template'

export default class Files {
  #template: IoTemplateFiles[]

  constructor() {
    this.#template = [
      {
        source: `${templateDir}/.{editorconfig,gitignore,npmignore,npmrc,prettierrc}`,
        output: './'
      }
    ]
  }

  /**
   * Adding template files list
   * @param files
   */
  public add(files: IoTemplateFiles[]): void {
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
}
