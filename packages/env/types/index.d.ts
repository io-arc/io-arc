import { TDirName, TDirNameKey, TUrl } from '@io-arc/types';
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
/** Production build mode */
export declare const IS_PRODUCTION: boolean;
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
 * Working space HTML (including Compiler) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.html
 * @default ['src', 'html']
 */
export declare const WS_HTML_ARRAY: TDirNameKey[];
/**
 * HTML build using file-loader
 *
 * @default true
 */
export declare const USE_HTML_FILE_LOADER: boolean;
/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export declare const IS_HASH_HTML_FILE_LOADER: boolean;
/**
 * Target for file-loader
 *
 * @default [':srcset', 'img:src', 'audio:src', 'video:src', 'source:src']
 */
export declare const TARGET_HTML_FILE_LOADER: string[];
/**
 * HTML build minify option
 *
 * config key: options.html.minify
 * @default false
 */
export declare const HTML_MINIFY: boolean;
/**
 * CSS output (including AltCSS) directory name array
 *
 * config key: deployDir.css
 * @default ['common', 'css']
 */
export declare const OUTPUT_CSS_ARRAY: TDirNameKey[];
/**
 * JavaScript output (including AltJS) directory name array
 *
 * config key: deployDir.js
 * @default ['common', 'js']
 */
export declare const OUTPUT_JS_ARRAY: TDirNameKey[];
/**
 * Json output directory name array
 *
 * config key: deployDir.json
 * @default ['common', 'json']
 */
export declare const OUTPUT_JSON_ARRAY: TDirNameKey[];
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
 */
export declare const DEPLOY_YAML2JSON_ARR: TDirNameKey[];
/**
 * Image directory absolute path for file-loader
 * First string is '<OS root>/src/' to absolutely
 */
export declare const WS_IMG_PATH_ABSOLUTE: TDirNameKey;
/**
 * Image output directory name array.
 *
 * config key: deployDir.img
 * @default ['common', 'img']
 */
export declare const OUTPUT_IMG_ARRAY: TDirNameKey[];
/**
 * Image deploy directory array for using file-loader
 * Array first is DIST constant
 */
export declare const DEPLOY_IMG_ARRAY: TDirNameKey[];
/**
 * Website domain url
 *
 * config key: url
 * @default ''
 */
export declare const SITE_DOMAIN: TUrl;
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
/**
 * Website root url
 * `SITE_DOMAIN` + `SITE_ROOT` with no slash for last
 *
 * @default ''
 */
export declare const SITE_URL: TUrl;
/**
 * Website title
 *
 * config key: title
 * @default ''
 */
export declare const SITE_TITLE: string;
/**
 * Website author
 *
 * @default ''
 */
export declare const SITE_AUTHOR: string;
/**
 * Website description
 *
 * @default ''
 */
export declare const SITE_DESCRIPTION: string;
