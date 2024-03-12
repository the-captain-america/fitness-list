import { useSelector as reduxUseSelector } from 'react-redux';
import { equals } from 'ramda';

// will this work? I dunno atm its complaiing about cannot find module in path date-fns in another file

// yea I alwasy get that with addDays for real.... huh.   Thats weird  let me chekc something

const useSelector = (func, rerenderOnChange = true) => {
  const equalityFn = rerenderOnChange ? equals : () => true;
  return reduxUseSelector(func, equalityFn);
};

export default useSelector;
