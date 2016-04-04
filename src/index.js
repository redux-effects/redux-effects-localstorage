/**
 * Action type
 */

const EFFECT_STORAGE = 'EFFECT_STORAGE';

const STORAGE_TYPE = {
  local: 'LOCAL',
  session: 'SESSION',
};

/**
 * redux-storage
 */

function createStorage() {
  return dispatch => next => action =>
    action.type === EFFECT_STORAGE
      ? execute(action.payload)
      : next(action);

  function execute({ type, storageType, key, value, n }) {
    const store = storageType === STORAGE_TYPE.local ? window.localStorage : window.sessionStorage;
    switch (type) {
      case 'key':
        return Promise.resolve(store.key(n));
      case 'getItem':
        return Promise.resolve(store.getItem(key)).then(v => parseValue(v));
      case 'setItem':
        return Promise.resolve(store.setItem(key, JSON.stringify(value)));
      case 'removeItem':
        return Promise.resolve(store.removeItem(key, value));
      case 'clear':
        return Promise.resolve(store.clear());
      case 'length':
        return Promise.resolve(store.length);
      default:
        throw new Error('redux-storage unknown storage action type');
    }
  }
}

function parseValue(value) {
  try {
    const v = JSON.parse(value);
    if (v && typeof v === 'object' && v !== null) {
      return v;
    }
  } catch (err) {
    return value;
  }

  return value; // just for consistency
}

/**
 * Action creator
 */

function createAction(payload) {
  return {
    type: EFFECT_STORAGE,
    payload,
  };
}

function key(n, storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'key', storageType, n });
}

function getItem(key, storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'getItem', storageType, key });
}

function setItem(key, value, storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'setItem', storageType, key, value });
}

function removeItem(key, storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'removeItem', storageType, key });
}

function clear(storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'clear', storageType });
}

function getLength(storageType = STORAGE_TYPE.local) {
  return createAction({ type: 'length', storageType });
}

/**
 * Exports
 */

export default createStorage;
export {
  key,
  getItem,
  setItem,
  removeItem,
  clear,
  getLength,
  STORAGE_TYPE,
};
