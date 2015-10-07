/**
 * Action type
 */

const EFFECT_LOCALSTORAGE = 'EFFECT_LOCALSTORAGE'

/**
 * redux-effects-localstorage
 */

function storage (localStorage) {
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
 * Action creator
 */

function createAction (payload) {
  return {
    type: EFFECT_LOCALSTORAGE,
    payload
  }
}

function key (n) {
  return createAction({type: 'key', n})
}

function getItem (key) {
  return createAction({type: 'getItem', key})
}

function setItem (key, value) {
  return createAction({type: 'setItem', key, value})
}

function removeItem (key) {
  return createAction({type: 'removeItem', key})
}

function clear () {
  return createAction({type: 'clear'})
}

function getLength () {
  return createAction({type: 'length'})
}


/**
 * Exports
 */

export default storage
export {
  key,
  getItem,
  setItem,
  removeItem,
  clear,
  getLength
}
