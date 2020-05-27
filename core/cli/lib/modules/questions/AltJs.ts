import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

/** JavaScript preprocessor */
export const ALT_JS_TYPE = {
  TS: 'typescript',
  BABEL: 'babel'
} as const

export type ALT_JS_TYPE = typeof ALT_JS_TYPE[keyof typeof ALT_JS_TYPE]

/** JavaScript framework */
export const JS_FRAMEWORK = {
  NONE: 'none',
  VUE: 'vue'
} as const

export type JS_FRAMEWORK = typeof JS_FRAMEWORK[keyof typeof JS_FRAMEWORK]

export interface IoAltJs {
  preprocessor: ALT_JS_TYPE
  framework: JS_FRAMEWORK
}

export default class AltJs extends BaseQuestions implements IoQuestions {
  #preprocessor: ALT_JS_TYPE = ALT_JS_TYPE.TS
  #framework: JS_FRAMEWORK = JS_FRAMEWORK.NONE

  /** JavaScript preprocessor */
  public preprocessor(): ALT_JS_TYPE {
    return this.#preprocessor
  }

  public framework(): JS_FRAMEWORK {
    return this.#framework
  }

  async questions(): Promise<void> {
    this.startLog('Select JavaScript preprocessor')

    const res: IoAltJs | number = await inquirer
      .prompt<IoAltJs>([
        {
          type: 'list',
          name: 'preprocessor',
          message: 'JavaScript preprocessor',
          choices: [
            { name: 'TypeScript', value: ALT_JS_TYPE.TS },
            { name: 'Babel', value: ALT_JS_TYPE.BABEL }
          ]
        },
        {
          type: 'list',
          name: 'framework',
          message: 'Use framework',
          choices: [
            { name: 'None', value: JS_FRAMEWORK.NONE },
            { name: 'Vue.js', value: JS_FRAMEWORK.VUE }
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

    this.#preprocessor = res.preprocessor
    this.#framework = res.framework
  }
}
