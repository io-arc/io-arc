import path from 'path'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import inquirer from 'inquirer'

export interface IoProjectSetting {
  name: string
  version: string
  description: string
  author: string
}

export default class ProjectSetting extends BaseQuestions
  implements IoQuestions {
  #name = path.basename(process.cwd())
  #version = '1.0.0'
  #description = ''
  #author = ''

  /** Project name */
  public name(): IoProjectSetting['name'] {
    return this.#name
  }

  /** Project version */
  public version(): IoProjectSetting['version'] {
    return this.#version
  }

  /** Project description */
  public description(): IoProjectSetting['description'] {
    return this.#description
  }

  /** Project author */
  public author(): IoProjectSetting['author'] {
    return this.#author
  }

  /** Project questions */
  async questions(): Promise<void> {
    this.startLog('Project settings')

    const res: IoProjectSetting | number = await inquirer
      .prompt<IoProjectSetting>([
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
        console.error(e)
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
