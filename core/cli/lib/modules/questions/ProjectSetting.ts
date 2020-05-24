import path from 'path'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import inquirer from 'inquirer'
import { bold } from 'kleur'

interface IoProjectQuestions {
  name: string
  version: string
  description: string
  author: string
}

export default class ProjectSetting extends BaseQuestions
  implements IoQuestions {
  #name: string = path.basename(process.cwd())
  #version: string = '1.0.0'
  #description: string = ''
  #author: string = ''

  /** Project name */
  public name(): string {
    return this.#name
  }

  /** Project version */
  public version(): string {
    return this.#version
  }

  /** Project description */
  public description(): string {
    return this.#description
  }

  /** Project author */
  public author(): string {
    return this.#author
  }

  /** Project questions */
  async questions(): Promise<void> {
    console.log(bold().green('👉 Project settings'))

    const res: IoProjectQuestions | number = await inquirer
      .prompt<IoProjectQuestions>([
        {
          type: 'input',
          name: 'name',
          message: 'Project Name',
          default: this.#name
        },
        {
          type: 'input',
          name: 'version',
          message: 'Project Version',
          default: this.#version
        },
        {
          type: 'input',
          name: 'description',
          message: 'Project Description'
        },
        {
          type: 'input',
          name: 'author',
          message: 'Project Author'
        }
      ])
      .catch((e: Error): number => {
        console.log(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    this.#name = res.name
    this.#version = res.version
    this.#description = res.description
    this.#author = res.author
  }
}
