import Vue, { PluginFunction, PluginObject, VueConstructor } from 'vue'
import * as Hoarders from './hoarders'
import { Options } from '.'

class VueHoaderPlugin implements PluginObject<Options> {
  public install: PluginFunction<Options> = (vm: VueConstructor<Vue>, options?: Options) => {
    let hoarder: Hoarders.BaseHoarder

    switch ((options && options.storage) || 'map') {
      case 'cookie':
        hoarder = new Hoarders.CookieHoarder()
        break
      case 'local':
        hoarder = new Hoarders.LocalStorageHoarder()
        break
      case 'map':
        hoarder = new Hoarders.MapHoarder()
        break
      case 'session':
        hoarder = new Hoarders.SessionStorageHoarder()
        break
      default:
        throw new Error(`Unsupported storage type: ${(options && options.storage)}`)
    }

    Object.defineProperty(vm.prototype, '$hoarder', {
      value: new Proxy(hoarder, {
        get: (target, p) => {
          if (p in target) {
            return (target as any)[p]
          } else {
            return target.get(p)
          }
        },
        set: (target, p, value) => {
          if (p in target) {
            (target as any)[p] = value
          } else {
            target.set(p, value)
          }

          return true
        }
      })
    })
  }
}

export { VueHoaderPlugin }
