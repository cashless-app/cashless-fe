import { combineReducers } from 'redux';
import authReducers from './auth';
import nasabahReducers from './nasabah'
const reducers = combineReducers({
  auth: authReducers,
  nasabah: nasabahReducers
});

export default reducers;
