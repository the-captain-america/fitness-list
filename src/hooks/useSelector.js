import { useSelector as reduxUseSelector } from 'react-redux';
import { equals } from 'ramda';

const useSelector = (func, rerenderOnChange = true) => {
  const equalityFn = rerenderOnChange ? equals : () => true;
  return reduxUseSelector(func, equalityFn);
};

export { useSelector };
