import { values, all, equals } from 'ramda'

const isTrue = equals(true)

const allConditionsTrue = (conditions) => {
  const mappedConditions = values(conditions)
  return all(isTrue)(mappedConditions)
}

/**
 * Returns a truthy or falsy value determined by the arguments supplied to it
 * @function allArgsTruthy
 * @param {any} Args list comma separated
 *
 * @returns {Boolean} The determined value by checking each arg is not false if any args are falsy, this function will return false otherwise it will return true
 */
const allArgsTruthy = (...options) => !options.includes(false)

const allArgsFalsey = (...options) => !options.includes(true)

export { allConditionsTrue, allArgsTruthy, allArgsFalsey }
