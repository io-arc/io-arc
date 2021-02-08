/// <reference types="node" />
import { TDirNameKey, TFileName } from '@io-arc/types';
import imageminWebp from 'imagemin-webp';
import { Observable } from 'rxjs';
interface IfGif2WebpOptions {
    lossy?: boolean;
    mixed?: boolean;
    quality?: number;
    method?: number;
    minimize?: boolean;
    kmin?: number;
    kmax?: number;
    filter?: number;
    metadata?: string;
    multiThreading?: boolean;
    buffer?: Buffer;
}
export default class WebpConverter {
    #private;
    constructor(targetDir: TDirNameKey[], ext?: {
        png: boolean;
        jpg: boolean;
        gif: boolean;
    }, options?: imageminWebp.Options, gifOptions?: IfGif2WebpOptions, outputDir?: TDirNameKey[]);
    /** Batch conversion of specific extensions in a specified directory */
    convertAll(): Observable<TFileName>;
    /**
     * Single file conversion
     * Output to the location specified by constructor
     * Suppose to be used for file monitoring
     * @param filename - target file for png or jpg or gif
     */
    convert(filename: TFileName): Observable<TFileName>;
    /**
     * Deleting the output Webp files
     */
    removeAll(): Observable<TFileName>;
}
export {};
