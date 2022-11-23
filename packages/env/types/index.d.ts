import { IfWebpConverterConfig, TDirName, TDirNameKey, TDirPathKey, TFileName, TUrl } from '@io-arc/types';
import { TerserPluginOptions } from 'terser-webpack-plugin';
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
/** Working space absolute path */
export declare const WS_ROOT_ABSOLUTE: TDirPathKey;
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
 * Output directory path
 */
export declare const DIST_ABSOLUTE: TDirPathKey;
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
export declare const WS_STATIC_PATH: TDirPathKey;
/**
 * Working space HTML (including AltHTML) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.html
 * @default ['src', 'html']
 */
export declare const WS_HTML_ARRAY: TDirNameKey[];
/**
 * Working space HTML (including AltHTML) directory path
 */
export declare const WS_HTML_PATH: TDirPathKey;
/**
 * Working space HTML (including AltHTML) directory absolute path
 */
export declare const WS_HTML_PATH_ABSOLUTE: TDirPathKey;
/**
 * Pug compile output to PHP
 *
 * @default false
 */
export declare const OUTPUT_IN_PHP: boolean;
/**
 * Pug lint configure filename
 *
 * @default null
 */
export declare const PUG_LINT_FILE: string | null;
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
 * @default [{tag: 'img',attribute: 'src',type: 'src'},{tag: 'img',attribute: 'srcset',type: 'srcset'},{tag: 'img',attribute: 'data-src',type: 'src'},{tag: 'img',attribute: 'data-srcset',type: 'srcset'},{tag:'source',attribute: 'src',type: 'src'}]
 */
export declare const TARGET_HTML_FILE_LOADER: {
    [p: string]: string;
}[];
/**
 * HTML build minify option
 *
 * config key: options.html.minify
 * @default false
 */
export declare const HTML_MINIFY: boolean;
/**
 * Working space CSS (including AltCSS) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.css
 * @default ['src', 'css']
 */
export declare const WS_CSS_ARRAY: TDirNameKey[];
/**
 * Working space CSS (including AltCSS) directory path
 */
export declare const WS_CSS_PATH: TDirPathKey;
/**
 * Working space CSS (including AltCSS) directory absolute path
 */
export declare const WS_CSS_PATH_ABSOLUTE: TDirPathKey;
/**
 * CSS build using file-loader
 *
 * @default true
 */
export declare const USE_CSS_FILE_LOADER: boolean;
/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export declare const IS_HASH_CSS_FILE_LOADER: boolean;
/**
 * CSS build minify option
 *
 * config key: options.css.minify
 * @default false
 */
export declare const CSS_MINIFY: boolean;
/**
 * Using mqpacker of postcss
 *
 * @default true
 * @see {@link https://github.com/hail2u/node-css-mqpacker node-css-mqpacker}
 */
export declare const CSS_POSTCSS_MQ_PACKER: boolean;
/**
 * Autoprefixer option
 * @default undefined
 */
export declare const CSS_POSTCSS_AUTOPREFIXER_OPTION: object | undefined;
/**
 * CSS output (including AltCSS) directory name array
 *
 * config key: deployDir.css
 * @default ['common', 'css']
 */
export declare const OUTPUT_CSS_ARRAY: TDirNameKey[];
/**
 * CSS output (including AltCSS) absolute directory path
 */
export declare const OUTPUT_CSS_PATH_ABSOLUTE: TDirPathKey;
/**
 * Working space JS (including AltJS) directory name array
 * Array first is 'src' is absolutely
 *
 * config key: wsDir.js
 * @default ['src', 'js']
 */
export declare const WS_JS_ARRAY: TDirNameKey[];
/** Working space JS (including AltJS) directory path */
export declare const WS_JS_PATH: TDirPathKey;
/** Working space JS (including AltJS) directory absolute path */
export declare const WS_JS_PATH_ABSOLUTE: TDirPathKey;
/**
 * File names for splitting the common logic
 *
 * @default null
 */
export declare const JS_SPLIT_FILENAME: string | null;
/**
 * TypeScript Config file
 *
 * config key: options.js.tsconfig
 * @default 'tsconfig.json'
 */
export declare const TSCONFIG: TFileName;
/**
 * JS build source map output option
 *
 * @default false
 */
export declare const JS_SOURCE_MAP: boolean;
/**
 * ESLint config file
 * Only specified when not in the ESLint configuration file format
 *
 * config key: options.js.eslint
 * @default undefined
 */
export declare const ESLINT: TFileName | undefined;
/**
 * JS build using file-loader
 *
 * @default true
 */
export declare const USE_JS_FILE_LOADER: boolean;
/**
 * Judgement to adding 6-digit hash for image path
 *
 * @default true
 */
export declare const IS_HASH_JS_FILE_LOADER: boolean;
/**
 * JS build minify option
 *
 * config key: options.js.minify
 * @default false
 */
export declare const JS_MINIFY: boolean;
/**
 * Terser plugin configuration if minify is true
 *
 * @default {parallel: true, extractComments: 'some', terserOptions: { compress: { drop_console: true } }}
 */
export declare const JS_TERSER: TerserPluginOptions;
/**
 * JavaScript output (including AltJS) directory name array
 *
 * config key: deployDir.js
 * @default ['common', 'js']
 */
export declare const OUTPUT_JS_ARRAY: TDirNameKey[];
/** JS output (including AltJS) absolute directory path */
export declare const OUTPUT_JS_PATH_ABSOLUTE: TDirPathKey;
/**
 * Pug lint filename for use by Vue
 *
 * @default null
 */
export declare const VUE_PUG_LINT_FILE: string | null;
/**
 * vue-loader transformAssetUrls option
 * Set options.fileLoader.vue.use to true to enable it
 *
 * @default {}
 */
export declare const VUE_LOADER_ASSETS: {
    [p: string]: string | string[];
};
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
export declare const WS_YAML2JSON_PATH: TDirPathKey;
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
export declare const DEPLOY_YAML2JSON_ARRAY: TDirNameKey[];
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
/**
 * Webp converter configure
 *
 * @default: []
 */
export declare const WEBP_CONVERTER_CONFIG: IfWebpConverterConfig[];
/**
 * Using imagemin plugin
 * @default undefined
 */
export declare const USE_IMAGEMIN: [string, object][] | undefined;
