import { TDirNameKey } from '@io-arc/types';
export default class OutputDirDiff {
    #private;
    /**
     * Hierarchy comparison
     * @param base
     * @param target
     */
    constructor(base: TDirNameKey[], target: TDirNameKey[]);
    /**
     * Relative path of the comparison directory from the base directory
     */
    targetRelativePath(): TDirNameKey;
}
