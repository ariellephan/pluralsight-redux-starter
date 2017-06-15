/**
 *  authorReducer reducer
 */
import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function authorReducer(state = initialState.authors, action) { //(state = initialState, action)
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

export default authorReducer;
