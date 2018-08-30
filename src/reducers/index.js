import { combineReducers } from 'redux';

import todos from './todo.reducer';
import posts from './posts.reducer'

const rootReducer = combineReducers({
    todos,
    posts
});

export default rootReducer;
