import { dissoc } from 'ramda'

const dissocKeys = (keys, obj) =>
  keys.reduce((acc, key) => dissoc(key, acc), obj)

export { dissocKeys }
