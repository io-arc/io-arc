import { TTaskName } from '@io-arc/types';
import { Compiler } from 'webpack';
export default class TaskMessage {
    #private;
    /**
     * Task run message
     * @param task - task name
     */
    constructor(task: TTaskName);
    apply(compiler: Compiler): void;
}
