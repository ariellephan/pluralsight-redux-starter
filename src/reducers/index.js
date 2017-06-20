import {combineReducers} from 'redux';
import courses from './courseReducer'; //ALIAS HOWEVER YOU WANT HERE
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer'; //why call a different name here??, essentially the ajaxStatusReducer function

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
