import Cookies from 'universal-cookie'
import BaseHoarder from './base'

export default class CookieHoarder extends BaseHoarder {
  constructor () {
    const storage = new Cookies()

    const { get, set } = storage

    super({
      actions: {
        get,
        set
      },
      storage
    })
  }
}
