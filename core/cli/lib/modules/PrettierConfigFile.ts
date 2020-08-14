import fs from 'fs'
import { FileCreateError, FileCreateSuccess } from './Utils'

export default class PrettierConfigFile {
  #body: string

  constructor(isOverrides: boolean) {
    this.#body = `trailingComma: none
tabWidth: 2
semi: false
singleQuote: true
arrowParens: always`

    if (isOverrides) {
      this.#body += `
overrides:`
    }
  }

  public addPug(isPug: boolean) {
    if (!isPug) return

    this.#body += `
  - files: '*.pug'
    options:
      parser: pug
      bracketSpacing: false
      semi: true
      singleQuote: false`
  }

  public create(): void {
    const filename = '.prettierrc'
    try {
      fs.writeFileSync(filename, this.#body)
      FileCreateSuccess(filename)
    } catch (e) {
      FileCreateError(filename, e)
    }
  }
}
