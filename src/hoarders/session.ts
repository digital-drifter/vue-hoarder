import BaseHoarder from './base'

export default class SessionStorageHoarder extends BaseHoarder {
  constructor () {
    const { getItem, key, length, removeItem, setItem, clear } = window.sessionStorage

    super({
      accessor: getItem,
      destructor: removeItem,
      mutator: setItem,
      storage: window.sessionStorage
    })
  }
}
