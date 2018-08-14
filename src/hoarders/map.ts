import BaseHoarder from './base'

export default class MapHoarder extends BaseHoarder {
  constructor () {
    const storage = new Map()
    const { get, set, has, clear, keys, size } = storage

    super({
      accessor: get,
      destructor: storage.delete,
      mutator: set,
      storage
    })
  }
}
