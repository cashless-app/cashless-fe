import {combineReducers} from 'redux';
import authReducers from './auth';
import nasabahReducers from './nasabah';
import transactionReducers from './transaction';

const reducers = combineReducers({
  auth: authReducers,
  nasabah: nasabahReducers,
  transaction: transactionReducers,
});

export default reducers;
