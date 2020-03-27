import { TTaskName } from '@io-arc/types'
import Kleur from 'kleur'
import moment from 'moment'
import { NotificationCenter } from 'node-notifier'

const _template = (task: TTaskName, log: string): string => {
  const separate = '=========='
  return `${separate} [${moment().format(
    'HH:mm:ss'
  )}] ${task} ${log} ${separate}`
}

export default class Logger {
  /**
   * General purpose log
   * @param message
   * @param color
   */
  public static message(message: string, color = Kleur.reset): void {
    console.log(color(message))
  }

  /**
   * Task started
   * @param task - task name
   * @param isBr - whether to start a new line
   */
  public static start(task: TTaskName, isBr = false): void {
    const prefix = isBr ? `\n` : ''
    Logger.message(prefix + _template(task, 'start'), Kleur.blue)
  }

  /**
   * Task completed in all green
   * @param task - task name
   * @param isBr - whether to start a new line
   */
  public static complete(task: TTaskName, isBr = false): void {
    const prefix = isBr ? `\n` : ''
    Logger.message(prefix + _template(task, 'completed :)'), Kleur.green)
  }

  public static failed(
    task: TTaskName,
    error: Error | string | null,
    isNotify = true
  ): void {
    if (typeof error === 'string') {
      Logger.message(_template(task, error), Kleur.red)
    } else if (error === null) {
      Logger.message(_template(task, 'Oops...'))
    } else {
      Logger.message(_template(task, 'error X('))
    }

    if (error !== null) console.error(error)

    if (!isNotify) return

    const message = error
      ? typeof error === 'string'
        ? error
        : JSON.stringify(error.message, null, 0)
      : 'Oops...'

    const notifier = new NotificationCenter()
    notifier.notify({ message, title: `${task} error X(`, sound: 'Glass' })
  }
}
