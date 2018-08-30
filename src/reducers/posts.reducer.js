import {
  GET_POSTS,
  ADD_NEW_POST
} from '../utils/types';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS:
      return [
        ...action.posts
      ]
    case ADD_NEW_POST:
      return [
        ...state,
        action.post
      ]
      default:
        return state
  }
}