import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import { devDependencies as sassDep } from '../../../../../tasks/task-webpack-sass/package.json'
import { devDependencies as stylusDep } from '../../../../../tasks/task-webpack-stylus/package.json'

/** CSS language */
export const ALT_CSS_TYPE = {
  CSS: 'css',
  SASS: 'sass',
  STYLUS: 'stylus'
} as const

export type ALT_CSS_TYPE = typeof ALT_CSS_TYPE[keyof typeof ALT_CSS_TYPE]

export interface IoAltCss {
  lang: ALT_CSS_TYPE
}

export default class AltCss extends BaseQuestions implements IoQuestions {
  #lang: ALT_CSS_TYPE = ALT_CSS_TYPE.CSS

  /** Choice CSS language */
  public lang(): ALT_CSS_TYPE {
    return this.#lang
  }

  /** Choice CSS language */
  async questions(): Promise<void> {
    this.startLog('Select CSS Language')

    const res: IoAltCss | number = await inquirer
      .prompt<IoAltCss>([
        {
          type: 'list',
          name: 'lang',
          message: 'CSS language',
          choices: [
            { name: 'CSS (Vanilla)', value: ALT_CSS_TYPE.CSS },
            { name: 'Sass (SASS/SCSS)', value: ALT_CSS_TYPE.SASS },
            { name: 'Stylus', value: ALT_CSS_TYPE.STYLUS }
          ]
        }
      ])
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    this.#lang = res.lang
  }

  /** Get task library name */
  public taskLibrary() {
    switch (this.#lang) {
      case ALT_CSS_TYPE.CSS:
        return '@io-arc/task-webpack-css'
      case ALT_CSS_TYPE.SASS:
        return '@io-arc/task-webpack-sass'
      case ALT_CSS_TYPE.STYLUS:
        return '@io-arc/task-webpack-stylus'
      default:
        return null
    }
  }

  /** Get library for dependencies */
  public dependencies(): { [p: string]: string } | null {
    switch (this.#lang) {
      case ALT_CSS_TYPE.SASS:
        return sassDep
      case ALT_CSS_TYPE.STYLUS:
        return stylusDep
      default:
        return null
    }
  }
}
