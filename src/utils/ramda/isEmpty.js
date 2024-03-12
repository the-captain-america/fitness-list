import { keys, length } from 'ramda'

const isEmpty = (obj) => length(keys(obj)) === 0

const isEmptyObject = (original) =>
  typeof original === 'object' && length(keys(original)) === 0

const isEitherEmpty = (data) => {
  if (data.isArray) return !data || !data.length
  if (typeof data === 'object') return !data || !Object.keys(data).length
}

export { isEmpty, isEmptyObject, isEitherEmpty }
