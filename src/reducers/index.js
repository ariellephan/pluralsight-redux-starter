import {combineReducers} from 'redux';
import courses from './courseReducer'; //ALIAS HOWEVER YOU WANT HERE
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
