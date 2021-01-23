import { ExternalsElement, RuleSetRule, Plugin } from 'webpack';
interface IfWebpackExtends {
    externals?: ExternalsElement | ExternalsElement[];
    loaders?: RuleSetRule[];
    plugins?: Plugin[];
    [key: string]: any;
}
export declare class WebpackExtends {
    #private;
    constructor(target: string);
    /**
     * Extend Data
     */
    data(): IfWebpackExtends | null;
    /**
     * Get a externals define
     */
    externals(): IfWebpackExtends['externals'] | undefined;
    /**
     * Get a module rule option
     */
    loaders(): IfWebpackExtends['loaders'] | undefined;
    plugins(): IfWebpackExtends['plugins'] | undefined;
}
export {};
