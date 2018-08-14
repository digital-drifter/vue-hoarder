export as namespace VueHoarder

export = VueHoarder

declare namespace VueHoarder {
  export type StorageHandlerType = 'cookie' | 'local' | 'map' | 'session'

  export interface Options {
    storage: StorageHandlerType
  }

  export namespace StorageHandler {
    export interface Options {
      accessor: (name: string) => any | undefined
      destructor?: (name: string) => boolean | number | void
      mutator: (name: string, value: any) => void
      storage: any
    }
  }

  export interface StorageHandler {
    get (name: string | number | symbol, options?: any): any

    set (name: string | number | symbol, value: any, options?: any): void

    all (name: string | number | symbol, options?: any): any[]

    has (name: string | number | symbol, options?: any): boolean

    remove (name: string | number | symbol, options?: any): boolean | number | void | undefined

    clear (): void
  }
}
