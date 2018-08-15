import BaseHoarder from './base'

export default class MapHoarder extends BaseHoarder {
  constructor () {
    const storage = new Map()
    const { get, set, has, clear, keys, size } = storage

    super({
      actions: {
        clear,
        get,
        has,
        remove: storage.delete,
        set
      },
      storage
    })
  }
}
