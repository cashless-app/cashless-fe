import { combineReducers } from 'redux';
import authReducers from './auth';
import nasabahReducers from './nasabah'
import transferReducers from './transfer';

const reducers = combineReducers({
  auth: authReducers,
  nasabah: nasabahReducers,
  transfer: transferReducers,
});

export default reducers;
