import { findIndex, lensPath, prop, set } from 'ramda'

const setValueByKey = (id, key, value) => (list) =>
  set(lensPath([findIndex(prop('id', id), list), key]), value)(list)

export { setValueByKey }
