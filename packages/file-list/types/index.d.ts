/**
 * Get file list for directory
 * @param dir - directory
 * @param ext - file extension
 * @param rootOnly - one level only
 * @constructor
 */
export declare const FileListObject: (dir: string, ext: string, rootOnly?: boolean) => {
    [p: string]: string;
};
