declare module 'universal-cookie' {
  interface Options {
    doNotParse: boolean
    path: string
    expires: Date
    maxAge: number
    domain: string
    secure: boolean
    httpOnly: boolean
  }

  class Cookies {
    get (name: string, options?: Options): any
    getAll (options?: Options): any
    set (name: string, value: any, options?: Options): void
    remove (name: string, options?: Options): void
    addChangeListener (callback: () => void): void
    removeChangeListener (callback: () => void): void
  }

  export = Cookies
}
