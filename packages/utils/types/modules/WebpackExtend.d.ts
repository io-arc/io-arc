import { ExternalsElement } from 'webpack';
interface IfWebpackExtend {
    externals?: ExternalsElement | ExternalsElement[];
    [key: string]: any;
}
export declare class WebpackExtend {
    #private;
    constructor(target: string);
    /**
     * Extend Data
     */
    data(): IfWebpackExtend | null;
    /**
     * Get a externals define
     */
    externals(): IfWebpackExtend['externals'] | undefined;
}
export {};
