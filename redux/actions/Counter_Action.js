import {COUNTER} from './types';

const CounterValue = res => ({
  type: COUNTER,
  payload: res,
});
export {CounterValue};
