import { combineReducers } from 'redux';
import account from './account';
import kelases from './kelases';
import kelas from './kelas';
import comments from './comments';
import videos from './videos';
import materis from './materis';
import links from './links';
import link from './link';

export default combineReducers({
  account,
  kelases,
  kelas,
  comments,
  videos,
  materis,
  links,
  link
});