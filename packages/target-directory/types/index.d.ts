import { TDirNameKey } from '@io-arc/types';
export default class TargetDirectory {
    /**
     * Get working directory array name
     * @param key - config property
     * @param defaultDir - Default directory name if key name does not exist or empty
     */
    static wsArray(key: string, defaultDir: TDirNameKey): TDirNameKey[];
    /**open
     * Get working directory path
     * @param key - config property
     * @param defaultDir - Default directory name if key name does not exist or empty
     */
    static wsPath(key: string, defaultDir: TDirNameKey): TDirNameKey;
}
