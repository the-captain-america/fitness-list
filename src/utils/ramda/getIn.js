import { path } from 'ramda'

const getIn = (original, fieldName) => path(fieldName.split('.'), original)

export { getIn }
