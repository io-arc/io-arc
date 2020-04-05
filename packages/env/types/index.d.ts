import { TDirName, TDirNameKey } from '@io-arc/types';
export declare const BUILD: {
    readonly DEVELOPMENT: "development";
    readonly PRODUCTION: "production";
    readonly TEST: "test";
    readonly NONE: "none";
};
export declare type BUILD = typeof BUILD[keyof typeof BUILD];
export declare const MODE: {
    readonly ONCE: "once";
    readonly WATCH: "watch";
};
export declare type MODE = typeof MODE[keyof typeof MODE];
/** Build environment */
export declare const NODE_ENV: "none" | "development" | "production" | "test";
/** Run environment */
export declare const MODE_ENV: MODE;
/** Working space directory */
export declare const WS_ROOT: TDirNameKey;
/**
 * Output directory
 *
 * config key: 'outputDir'
 * @default 'dist'
 */
export declare const DIST: TDirNameKey;
/**
 * Working space for copy directory name array
 * Array first is 'src' to absolutely
 *
 * config key: wsDir.static
 * @default ['src', 'static']
 */
export declare const WS_STATIC_ARRAY: TDirNameKey[];
/**
 * Working space for copy directory path
 * First string is 'src/' to absolutely
 *
 * config key: wsDir.static
 * @default `src/static`
 */
export declare const WS_STATIC_PATH: TDirNameKey;
/**
 * Working space for YAML to JSON directory name array
 * Array first is 'src' to absolutely
 *
 * config key: wsDir.yaml2json
 * @default ['src', 'yaml2json']
 */
export declare const WS_YAML2JSON_ARRAY: TDirNameKey[];
/**
 * Working space YAML to JSON directory path
 * First string is 'src/‘ to absolutely
 *
 * config key: wsDir.yaml2json
 * @default 'src/yaml2json'
 */
export declare const WS_YAML2JSON_PATH: TDirNameKey;
/**
 * YAML to JSON convert minify option
 *
 * config key: options.json.minify
 * @default false
 */
export declare const JSON_MINIFY: boolean;
/**
 * YAML to JSON deploy directory array
 * Array first is DIST constant
 *
 * config key: deployDir.json
 * @default [DIST, 'common', 'data']
 */
export declare const DEPLOY_YAML2JSON_ARR: TDirNameKey[];
/**
 * Image directory path for using file-loader
 * First string is 'src/' to absolutely
 *
 * config key: wsDir.img
 * @default 'src/img'
 */
/**
 * Image directory absolute path for file-loader
 * First string is '<OS root>/src/' to absolutely
 */
export declare const WS_IMG_PATH_ABSOLUTE: TDirNameKey;
/**
 * Image deploy directory array for using file-loader
 * Array first is DIST constant
 *
 * config key: deployDir.img
 * @default [DIST, 'common', 'img']
 */
export declare const DEPLOY_IMG_ARRAY: TDirNameKey[];
/**
 * WebSite root
 * @default '/'
 */
export declare const SITE_ROOT: TDirName;
/**
 * Site root relative path build
 * @param arr - Array for directory name
 */
export declare const siteRootRelative: (arr: string[]) => string;
