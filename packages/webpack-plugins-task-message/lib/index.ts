import Logger from '@io-arc/logger'
import { TTaskName } from '@io-arc/types'
import { Compiler } from 'webpack'

export default class TaskMessage {
  readonly #task: TTaskName

  /**
   * Task run message
   * @param task - task name
   */
  constructor(task: TTaskName) {
    this.#task = task
  }

  public apply(compiler: Compiler): void {
    // completed
    compiler.hooks.done.tap('TaskMessage', (stats): void => {
      if (stats.compilation.errors.length === 0) {
        Logger.complete(this.#task, true)
      } else {
        console.log('') // br
        Logger.failed(this.#task, null)
      }
    })
  }
}
