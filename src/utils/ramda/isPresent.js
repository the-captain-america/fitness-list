import { complement, isNil } from 'ramda'

const isPresent = complement(isNil)

export { isPresent }

// convert array to object of key values where keys are the ideas pointing to the values..
// const convertArray = (items) =>
//   items.reduce((prev, curr) => {
//     const newObj = {
//       [curr.id]: curr,
//     };
//     return {
//       ...prev,
//       ...newObj,
//     };
//   }, {});
