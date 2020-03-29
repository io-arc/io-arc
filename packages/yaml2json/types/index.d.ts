import { TDirNameKey, TFileName, TGlobPattern } from '@io-arc/types';
import { Observable } from 'rxjs';
export default class Yaml2Json {
    #private;
    /**
     * Initialize YAML directory
     * @param targetDir - YAML read directory
     * @param outputDir - JSON convert directory
     */
    constructor(targetDir: TDirNameKey[], outputDir: TDirNameKey[]);
    /**
     * Convert a YAML file under a specific directory to JSON
     * @param isMinify
     */
    convertAll(isMinify: boolean): Observable<TFileName>;
    /**
     * Single file conversion
     * @param filepath - target YAML file
     * @param isMinify
     */
    convert(filepath: TFileName, isMinify: boolean): Observable<TFileName>;
    /**
     * Deleting the output JSON
     * @param target - Glob pattern
     */
    removeAll(target?: TGlobPattern): Observable<TFileName>;
    /**
     * Single file deleting
     * @param filepath
     */
    remove(filepath: TFileName): Observable<TFileName>;
}
