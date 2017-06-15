/**
 *  courseReducer reducer
 */
import { fromJS } from 'immutable';
//
// const initialState = fromJS({
//   key: value
// });
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function courseReducer(state = initialState.courses, action) { //(state = initialState, action)
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      //debugger;
      return [...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    // case types.DELETE_COURSE:
    //   //http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html#inserting-and-removing-items-in-arrays
    //   return [
    //     ...state.slice(0, action.course),
    //     ...state.slice(action.course + 1)
    //   ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

export default courseReducer;
