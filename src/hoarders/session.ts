import BaseHoarder from './base'

export default class SessionStorageHoarder extends BaseHoarder {
  constructor () {
    const { getItem, key, length, removeItem, setItem, clear } = window.sessionStorage

    super({
      actions: {
        clear,
        get: getItem,
        remove: removeItem,
        set: setItem
      },
      storage: window.sessionStorage
    })
  }
}
