import { combineReducers } from 'redux';
import account from './account';
import kelases from './kelases';
import kelas from './kelas';
import comments from './comments';
import comment from './comment';
import videos from './videos';
import video from './video';
import materis from './materis';
import materi from './materi';
import links from './links';
import link from './link';
import messages from './messages';
import conversations from './conversations';

export default combineReducers({
  account,
  kelases,
  kelas,
  comments,
  comment,
  videos,
  video,
  materis,
  materi,
  links,
  link,
  conversations,
  messages,
});