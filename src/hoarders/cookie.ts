import Cookies from 'universal-cookie'
import BaseHoarder from './base'

export default class CookieHoarder extends BaseHoarder {
  constructor () {
    const storage = new Cookies()

    const { get, getAll, remove, set } = storage

    super({
      actions: {
        all: getAll,
        get,
        remove,
        set
      },
      storage
    })
  }
}
