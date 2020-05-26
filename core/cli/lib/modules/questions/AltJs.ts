import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

/** JavaScript preprocessor */
export const ALT_JS_TYPE = {
  TS: 'typescript',
  BABEL: 'babel'
} as const

export type ALT_JS_TYPE = typeof ALT_JS_TYPE[keyof typeof ALT_JS_TYPE]

export interface IoAltJs {
  preprocessor: ALT_JS_TYPE
}

export default class AltJs extends BaseQuestions implements IoQuestions {
  #preprocessor: IoAltJs['preprocessor'] = ALT_JS_TYPE.TS

  /** JavaScript preprocessor */
  public preprocessor(): ALT_JS_TYPE {
    return this.#preprocessor
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
  }
}
