/**
 * webpack config stats
 * @param stats
 */
export declare const stats: (stats?: boolean | "normal" | "none" | "verbose" | "errors-only" | "errors-warnings" | "minimal" | import("webpack").Stats.ToStringOptionsObject | undefined) => boolean | "normal" | "none" | "verbose" | "errors-only" | "errors-warnings" | "minimal" | import("webpack").Stats.ToStringOptionsObject | undefined;
/**
 * webpack config performance
 * @param performance
 */
export declare const performance: (performance?: false | import("webpack").Options.Performance | undefined) => false | import("webpack").Options.Performance | undefined;
/**
 * webpack progressbar plugin config
 * @param task
 */
export declare const progressBar: (task: string) => {
    format: string;
    clear: boolean;
};
/**
 * Splitting the common logic
 */
export declare const jsSplitChunks: object;
/**
 * Global constant for webpack
 */
export declare const webpackDefine: {
    IS_PRODUCTION: string;
    SITE_TITLE: string;
    SITE_URL: string;
    SITE_AUTHOR: string;
    SITE_ROOT: string;
};
