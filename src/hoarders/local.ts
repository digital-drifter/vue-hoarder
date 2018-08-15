import BaseHoarder from './base'

export default class LocalStorageHoarder extends BaseHoarder {
  constructor () {
    const { getItem, key, removeItem, setItem } = window.localStorage

    super({
      actions: {
        get: getItem,
        remove: removeItem,
        set: setItem
      },
      storage: window.localStorage
    })
  }
}
