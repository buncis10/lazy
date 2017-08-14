import { combineReducers } from 'redux';
import account from './account';
import kelases from './kelases';
import kelas from './kelas';
import comments from './comments';

export default combineReducers({
  account,
  kelases,
  kelas,
  comments
});