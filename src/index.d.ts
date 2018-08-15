export as namespace VueHoarder

export = VueHoarder

declare namespace VueHoarder {
  import ActionMap = VueHoarder.StorageHandler.ActionMap
  export type StorageHandlerType = 'cookie' | 'local' | 'map' | 'session'

  export interface Options {
    storage: StorageHandlerType
    actions: ActionMap
  }

  export namespace StorageHandler {
    export interface ActionMap {
      all?: () => any | any[]
      clear?: () => any
      get: (name: string) => any
      has?: (name: string) => boolean | undefined
      remove?: (name: string) => any
      set: (name: string, value: any) => any
      size?: () => number | undefined
    }

    export interface Options {
      storage: any
      actions: ActionMap
    }
  }

  export interface StorageHandler {
    all (name: string | number | symbol, options?: any): any | any[]

    clear (): void

    get (name: string | number | symbol, options?: any): any

    has (name: string | number | symbol, options?: any): boolean | undefined

    remove (name: string | number | symbol, options?: any): boolean | number | void | undefined

    set (name: string | number | symbol, value: any, options?: any): void

    size (): number | undefined
  }
}
