import { combineReducers } from 'redux';
import account from './account';
import kelases from './kelases';
import kelas from './kelas';

export default combineReducers({
  account,
  kelases,
  kelas
});