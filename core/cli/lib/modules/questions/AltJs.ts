import { TDirNameKey } from '@io-arc/types'
import inquirer from 'inquirer'
import { IoTemplateFiles, templateDir } from '../Files'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import { devDependencies as vueDep } from '../../../../../tasks/task-webpack-vue/package.json'
import { devDependencies as vueTsDep } from '../../../../../tasks/task-webpack-vue-typescript/package.json'
import { devDependencies as tsDep } from '../../../../../tasks/task-webpack-typescript/package.json'
import { devDependencies as babelDep } from '../../../../../tasks/task-webpack-babel/package.json'
import { devDependencies } from '../../../../../package.json'

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

  /** Choice JavaScript preprocessor */
  public preprocessor(): ALT_JS_TYPE {
    return this.#preprocessor
  }

  /** Choice JavaScript framework */
  public framework(): JS_FRAMEWORK {
    return this.#framework
  }

  /** Choice JavaScript preprocessor & framework */
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

  /** Get preprocessor task library name */
  public taskLibrary() {
    if (this.#framework === JS_FRAMEWORK.VUE) {
      switch (this.#preprocessor) {
        case ALT_JS_TYPE.TS:
          return '@io-arc/task-webpack-vue-typescript'
        case ALT_JS_TYPE.BABEL:
          return '@io-arc/task-webpack-vue'
        default:
          return null
      }
    } else {
      switch (this.#preprocessor) {
        case ALT_JS_TYPE.TS:
          return '@io-arc/task-webpack-typescript'
        case ALT_JS_TYPE.BABEL:
          return '@io-arc/task-webpack-babel'
        default:
          return null
      }
    }
  }

  /** Get library for dependencies */
  public dependencies(): { [p: string]: string } {
    let dep: { [p: string]: string } = {}

    if (this.#framework === JS_FRAMEWORK.VUE) {
      switch (this.#preprocessor) {
        case ALT_JS_TYPE.TS:
          dep = { ...dep, ...vueTsDep }
          break
        case ALT_JS_TYPE.BABEL:
          dep = { ...dep, ...vueDep }
          break
        default:
          break
      }
    }

    switch (this.#preprocessor) {
      case ALT_JS_TYPE.TS:
        dep = {
          ...dep,
          ...tsDep,
          typescript: devDependencies['typescript'],
          'ts-node': devDependencies['ts-node']
        }
        break
      case ALT_JS_TYPE.BABEL:
        dep = { ...dep, ...babelDep }
        break
      default:
        break
    }

    return dep
  }

  /** Get template files */
  public template(dir: TDirNameKey): IoTemplateFiles[] {
    switch (this.#preprocessor) {
      case ALT_JS_TYPE.TS:
        return this.#tsFiles(dir)
      case ALT_JS_TYPE.BABEL:
        return this.#babelFiles(dir)
      default:
        return []
    }
  }

  #babelFiles = (dir: TDirNameKey): IoTemplateFiles[] => {
    const files: IoTemplateFiles[] = []

    // eslint
    const eslintDir = this.#framework === JS_FRAMEWORK.VUE ? 'vue' : 'babel'
    files.push(
      ...[
        {
          source: `${templateDir}/lint/js/${eslintDir}/.eslintrc.yml`,
          output: ''
        },
        { source: `${templateDir}/.babelrc`, output: '' },
        { source: `${templateDir}/js/README.md`, output: `src/${dir}` }
      ]
    )

    return files
  }

  #tsFiles = (dir: TDirNameKey): IoTemplateFiles[] => {
    const files: IoTemplateFiles[] = []

    const eslintDir = this.#framework === JS_FRAMEWORK.VUE ? 'vue-ts' : 'ts'
    files.push(
      ...[
        {
          source: `${templateDir}/lint/js/${eslintDir}/.eslintrc.yml`,
          output: ''
        },
        { source: `${templateDir}/tsconfig.json`, output: '' },
        { source: `${templateDir}/ts/README.md`, output: `src/${dir}` }
      ]
    )

    return files
  }
}
