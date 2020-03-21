import { TDirName, TDirNameKey } from '@io-arc/types';
export declare const BUILD_ENV: {
    readonly DEVELOPMENT: "development";
    readonly PRODUCTION: "production";
    readonly TEST: "test";
    readonly NONE: "none";
};
export declare type BUILD_ENV = typeof BUILD_ENV[keyof typeof BUILD_ENV];
export declare const MODE: {
    readonly ONCE: "once";
    readonly WATCH: "watch";
};
export declare type MODE = typeof MODE[keyof typeof MODE];
/** Working space directory */
export declare const WS_ROOT: TDirNameKey;
/**
 * WebSite root
 * @default '/'
 */
export declare const SITE_ROOT: TDirName;
/**
 * Output directory
 * @default dist
 */
export declare const DIST: TDirNameKey;
/** Build environment */
export declare const NODE_ENV: "none" | "development" | "production" | "test";
