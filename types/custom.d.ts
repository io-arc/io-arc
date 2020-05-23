declare module '*.yml' {
  const value: any
  export default value
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
declare module '*.webp'

/* webpack define */
declare const IS_PRODUCTION: boolean
declare const SITE_TITLE: string
declare const SITE_URL: string
declare const SITE_AUTHOR: string
declare const SITE_ROOT: string
