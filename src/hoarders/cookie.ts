import Cookies from 'universal-cookie'
import BaseHoarder from './base'

export default class CookieHoarder extends BaseHoarder {
  constructor () {
    const storage = new Cookies()

    super({ accessor: storage.get, mutator: storage.set, storage })
  }
}
