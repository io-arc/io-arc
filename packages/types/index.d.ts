import imageminWebp from 'imagemin-webp'

/** Directory name with slash for last */
export type TDirName = string

/** Directory name with no slash for last */
export type TDirNameKey = string

/** Directory path with no slash for last */
export type TDirPathKey = string

/** Filename with extension */
export type TFileName = string

/** Filename with no extension */
export type TFileNameKey = string

/** Full filepath with extension */
export type TFilePath = string

/** Task name */
export type TTaskName = string

/** Glob pattern */
export type TGlobPattern = string

/** JSON.stringify */
export type TJsonString = string

/** URL */
export type TUrl = string

/** webpack mode */
export type TWebpackMode = 'none' | 'development' | 'production'

export interface IfGif2WebpOptions {
  lossy?: boolean
  mixed?: boolean
  quality?: number
  method?: number
  minimize?: boolean
  kmin?: number
  kmax?: number
  filter?: number
  metadata?: string
  multiThreading?: boolean
  buffer?: Buffer
}

/** Webp converter configure */
export interface IfWebpConverterConfig {
  // Target directories name array for image files used converter
  target: TDirNameKey[]
  ext: {
    png: boolean
    jpg: boolean
    gif: boolean
  }
  // Output directories name array
  output?: TDirNameKey[]
  options?: imageminWebp.Options
  gifOptions?: IfGif2WebpOptions
  // Delete the webp file before starting the task.
  deleteBefore?: boolean
}
