import { IfGif2WebpOptions, TDirNameKey, TFileName, TFilePath } from '@io-arc/types';
import imageminWebp from 'imagemin-webp';
import { Observable } from 'rxjs';
export default class WebpConverter {
    #private;
    constructor(targetDir: TDirNameKey[], ext?: {
        png: boolean;
        jpg: boolean;
        gif: boolean;
    }, options?: imageminWebp.Options, gifOptions?: IfGif2WebpOptions, outputDir?: TDirNameKey[]);
    notTarget(): boolean;
    targetDirectory(): TDirNameKey;
    regExp4FileExtensions(): RegExp;
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
    /**
     * Delete a single file
     * @param target
     */
    remove(target: TFilePath): Observable<TFileName>;
}
