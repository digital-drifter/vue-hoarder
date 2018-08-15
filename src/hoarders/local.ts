import BaseHoarder from './base'

export default class LocalStorageHoarder extends BaseHoarder {
  constructor () {
    const { clear, getItem, key, removeItem, setItem } = window.localStorage

    super({
      actions: {
        clear,
        get: getItem,
        remove: removeItem,
        set: setItem
      },
      storage: window.localStorage
    })
  }
}
