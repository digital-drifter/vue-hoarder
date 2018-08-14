import * as VueHoarder from '../'

export default abstract class BaseHoarder implements VueHoarder.StorageHandler {
  private readonly accessor: (name: string) => any | undefined
  private readonly destructor?: (name: string) => boolean | number | void
  private readonly mutator: (name: string, value: any) => void
  private readonly storage: any

  protected constructor (options: VueHoarder.StorageHandler.Options) {
    this.accessor = options.accessor
    this.destructor = options.destructor
    this.mutator = options.mutator
    this.storage = options.storage
  }

  public all (name: string, options?: any): any | any[] | undefined {
    return undefined
  }

  public clear (): void {
    // TODO
  }

  public get (name: string | number | symbol, options?: any): any | undefined {
    return this.accessor.apply(this.storage, [name, options])
  }

  public has (name: string | number | symbol, options?: any): boolean {
    return this.accessor.apply(this.storage, [name, options])
  }

  public remove (name: string | number | symbol, options?: any): boolean | number | void | undefined {
    if (this.destructor && this.has(name, options)) {
      return this.destructor.apply(this.storage, [name])
    }

    return 0
  }

  public set (name: string | number | symbol, value: any, options?: any): void {
    this.mutator.apply(this, [name, value, options])
  }
}
