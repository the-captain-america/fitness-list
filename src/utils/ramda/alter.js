import {
  curry,
  propEq,
  map,
  assoc,
  when,
  lensPath,
  findIndex,
  prop,
} from 'ramda'

/* 
  assoc
  makes a shallow clonse of an object setting or overriding the specidfied property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference. 
*/

/*
  when
  
*/

/*
  curry
  Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If "f" is a ternary function and g is R.curry(f), the following ar eequivalent: 

  - g(1)(2)(3)
  - g(1)(2, 3)
  - g(2, 2, 3)

*/

/*
  propEq
  - Returns true if the specified object property is equal, in R.equals terms, to the given value; false otherwise. You can test multiple properties with R.whereEq.
*/

// 'active' is the property in which that will be replaced by whatever the state is set to.
//
const alter = curry((value, property, items) =>
  map(when(propEq('id', property), assoc('active', value)), items),
)

/** Set Value by Index
 * Returns an array
 *
 * @param id The id to lookup within the provided list (partial application)
 * @param label The value in which to set the label property
 * @returns {array} The result
 */

const setValueByIndex = (id, label) => (list) =>
  set(lensPath([findIndex(prop('id', id), list), 'label']), label)(list)

export { alter, setValueByIndex }
