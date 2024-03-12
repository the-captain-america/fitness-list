import {
  propEq,
  keys,
  head,
  equals,
  values,
  find,
  toPairs,
  lensPath,
  view,
  length,
  pipe,
  path,
  assoc,
  when,
  map,
  curry,
} from 'ramda';

const getId = (items = [], selectedId) => {
  if (!items || items.length <= 0) return '';
  const foundLabel = items.filter((item) => item.id === selectedId)[0].id;
  return foundLabel;
};

/** Alter
 * @param {state} Boolean
 * @param {id} String
 * @param {items} Array
 * @returns {Array}
 */
const alter = curry((prop, newValue, items) =>
  map(when(propEq('id', prop), assoc('active', newValue)), items),
);

// REVIEW THIS PHILIP!
// https://ramdajs.com/docs/#assoc
/** Alter
 * @param {state} Boolean
 * @param {id} String
 * @param {items} Array
 * @returns {Array}
 */
const alterCount = curry((prop, newValue, items) =>
  map(when(propEq('id', prop), assoc('count', newValue)), items),
);

const alterLabel = curry((prop, newValue, items) =>
  map(when(propEq('id', prop), assoc('label', newValue)), items),
);

// /**
//  * Returns a string if present of the parent id
//  *
//  * @param needle The string in which to lookup upon the following args
//  * @param haystack The objectt literal in which to lookup through (notice the usage of the toPairs)
//  * @returns {string} The result string if found
//  */
// const getParentByNestedId = (needle) => (haystack) => {
//   return pipe(
//     toPairs,
//     find(([key, value]) => find(propEq('id', needle), value)),
//     firstItem,
//   )(haystack);
// };

/**
 * Returns an object literal
 *
 * @param items The array in which to iterate through
 * @returns {object} The result object with the keys being the found id and the value being children which is an array
 */
const sectionItemsByKey = (items = []) =>
  items.reduce((acc, item) => {
    acc[item.id] = item.children;
    return acc;
  }, {});

const dataItems = {
  items: [
    {
      id: 'q1',
      label: 'Quarter One',
      start: '2023-03-01',
      end: '2023-03-05',
      activeBgColor: 'red',
      activeFontColor: 'black',
      description: '',
    },
    {
      id: 'q2',
      label: 'Quarter Two',
      start: '2023-03-09',
      end: '2023-03-20',
      activeBgColor: 'blue',
      activeFontColor: 'black',
      description: '',
    },
  ],

  headers: [
    {
      id: 'a4162da7-f06d-4167-bacc-d80a2d082c6a',
      key: 'id',
      label: 'q1',
    },
    {
      id: 'f0c3e5b2-fa4c-4bb7-8a8a-86bec7c17198',
      key: 'label',
      label: 'Quarter One',
    },
    {
      id: 'f0c3e5b2-fa4c-4bb7-8a8a-86bec7c17198',
      key: 'start',
      label: '2023-03-01',
    },
    {
      id: 'f0c3e5b2-fa4c-4bb7-8a8a-86bec7c17198',
      key: 'end',
      label: '2023-03-05',
    },
  ],
};

const typeIs = (expected) => (original) => equals(type(original), expected);
const isObjectLiteral = typeIs('Object');

const getProp = (path) => (data) => {
  const fieldPath = lensPath(path.split('.'));
  return view(fieldPath, data);
};

const getIn = (original, fieldName) => path(fieldName.split('.'), original);

const dissocKeys = (keys, obj) =>
  keys.reduce((acc, key) => dissoc(key, acc), obj);

const { items } = dataItems;
const getFirst = !items || length(items) <= 0 ? {} : head(items);

const innerHeaders = keys(getFirst);
const getValues = !!getFirst ? values(getFirst) : [];

export {
  getId,
  alter,
  alterCount,
  // getParentByNestedId,
  sectionItemsByKey,
  alterLabel,
};
