import makeDir from 'make-dir'
import fs from 'fs'
import { FileCreateError, FileCreateSuccess } from './Utils'

export default class CustomTypes {
  #data: string

  constructor() {
    this.#data = `declare module '*.yml' {
  const value: any
  export default value
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
declare module '*.webp'

/* webpack define */
declare const IS_PRODUCTION: boolean
declare const SITE_TITLE: string
declare const SITE_URL: string
declare const SITE_AUTHOR: string
declare const SITE_ROOT: string`
  }

  /** Adding Vue.js declaration */
  public addVue(): void {
    this.#data += `\n
/* Vue.js */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}`
  }

  /** Create declaration file */
  public async create(): Promise<void> {
    await makeDir('types')

    const name = 'types/custom.d.ts'
    this.#data += `\n`
    try {
      fs.writeFileSync(name, this.#data)
      FileCreateSuccess(name)
    } catch (e) {
      FileCreateError(name, e)
      // process.exit(1)
    }
  }
}
