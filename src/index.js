/**
 * Action type
 */

const EFFECT_LOCALSTORAGE = 'EFFECT_LOCALSTORAGE'

/**
 * redux-effects-localstorage
 */

function storage (localStorage = window.localStorage) {
  return api => next => action
    return action.type === EFFECT_LOCALSTORAGE
      ? execute(action)
      : next(action)

  function execute ({type, key, value, n}) {
    switch (type) {
      case 'key':
        return Promise.resolve(localStorage.key(n))
      case 'getItem':
        return Promise.resolve(localStorage.getItem(key))
      case 'setItem':
        return Promise.resolve(localStorage.setItem(key, value))
      case 'removeItem':
        return Promise.resolve(localStorage.removeItem(key, value))
      case 'clear':
        return Promise.resolve(localStorage.clear())
      case 'length':
        return Promise.resolve(localStorage.length)
      default:
        throw new Error('redux-effects-localstorage unknown localStorage action type')
    }
  }
}


/**
 * Exports
 */

export default localstorage
