import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './questions/BaseQuestions'
import { bold } from 'kleur'
import { spawn } from 'child_process'
import path from 'path'

const PACKAGE_MANAGER = {
  NPM: 'npm',
  YARN: 'yarn'
} as const

type PACKAGE_MANAGER = typeof PACKAGE_MANAGER[keyof typeof PACKAGE_MANAGER]

interface IoInstall {
  install: boolean
}

interface IoPackageManager {
  manager: PACKAGE_MANAGER
}

export default class Install extends BaseQuestions implements IoQuestions {
  #install: boolean = true
  #manager: PACKAGE_MANAGER = PACKAGE_MANAGER.NPM

  public isInstall(): boolean {
    return this.#install
  }

  public async questions(): Promise<void> {
    this.startLog('Package Install')

    const res: IoInstall = await inquirer
      .prompt<IoInstall>({
        type: 'confirm',
        name: 'install',
        message: 'Library install?',
        default: true
      })
      .catch(
        (e: Error): IoInstall => {
          console.error(e)
          return { install: false }
        }
      )

    this.#install = res.install
  }

  public async packageManager(): Promise<void> {
    const res: IoPackageManager = await inquirer
      .prompt<IoPackageManager>({
        type: 'list',
        name: 'manager',
        message: 'Package manager',
        choices: [
          { name: 'npm', value: PACKAGE_MANAGER.NPM },
          { name: 'yarn', value: PACKAGE_MANAGER.YARN }
        ]
      })
      .catch(
        (e: Error): IoPackageManager => {
          console.error(e)
          return { manager: PACKAGE_MANAGER.NPM }
        }
      )

    this.#manager = res.manager
  }

  public start(func?: () => void): void {
    console.log(bold().blue('Install start...'))

    const install = spawn(this.#manager, ['install'], {
      cwd: path.resolve(),
      stdio: 'inherit'
    })

    console.log('')

    install.on('close', (code: number): void => {
      if (code !== 0) {
        console.error('Install error X(')
        return
      }

      if (func) func()
    })
  }
}
