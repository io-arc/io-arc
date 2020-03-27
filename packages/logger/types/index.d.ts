import { TTaskName } from '@io-arc/types';
import Kleur from 'kleur';
export default class Logger {
    /**
     * General purpose log
     * @param message
     * @param color
     */
    static message(message: string, color?: Kleur.Color): void;
    /**
     * Task started
     * @param task - task name
     * @param isBr - whether to start a new line
     */
    static start(task: TTaskName, isBr?: boolean): void;
    /**
     * Task completed in all green
     * @param task - task name
     * @param isBr - whether to start a new line
     */
    static complete(task: TTaskName, isBr?: boolean): void;
    static failed(task: TTaskName, error: Error | string | null, isNotify?: boolean): void;
}
