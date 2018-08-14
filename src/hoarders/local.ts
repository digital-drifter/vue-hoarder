import BaseHoarder from './base'

export default class LocalStorageHoarder extends BaseHoarder {
  constructor () {
    const { getItem, key, length, removeItem, setItem } = window.localStorage

    super({
      accessor: getItem,
      destructor: removeItem,
      mutator: setItem,
      storage: window.localStorage
    })
  }
}
