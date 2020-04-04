import { TDirNameKey } from '@io-arc/types';
export default class PathBuild {
    /**
     * relative path build
     * @param arr - Array for directory name
     */
    static relative(arr: TDirNameKey[]): TDirNameKey;
    /**
     * absolute path build
     * @param arr - Array for directory name
     */
    static absolute(arr: TDirNameKey[]): TDirNameKey;
}
