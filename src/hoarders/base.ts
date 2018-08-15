import * as VueHoarder from '../'

export default abstract class BaseHoarder implements VueHoarder.StorageHandler {
  private readonly actions: VueHoarder.StorageHandler.ActionMap
  private readonly storage: any

  protected constructor ({ actions, storage }: VueHoarder.StorageHandler.Options) {
    this.actions = actions
    this.storage = storage
  }

  public all (name: string, options?: any): any | any[] | undefined {
    if (typeof this.actions.all !== 'undefined') {
      return this.actions.all.apply(this.storage, [options])
    }
  }

  public clear (): void {
    if (typeof this.actions.clear !== 'undefined') {
      return this.actions.clear.apply(this.storage)
    }
  }

  public get (name: string | number | symbol, options?: any): any | undefined {
    return this.actions.get.apply(this.storage, [name, options])
  }

  public has (name: string | number | symbol, options?: any): boolean | undefined {
    if (typeof this.actions.has !== 'undefined') {
      return this.actions.has.apply(this.storage, [name, options])
    }
  }

  public remove (name: string | number | symbol, options?: any): boolean | number | void | undefined {
    if (typeof this.actions.remove !== 'undefined') {
      return this.actions.remove.apply(this.storage, [name])
    }
  }

  public set (name: string | number | symbol, value: any, options?: any): void {
    this.actions.set.apply(this, [name, value, options])
  }

  public size (): number | undefined {
    if (typeof this.actions.size !== 'undefined') {
      return this.actions.size.apply(this)
    }
  }
}
