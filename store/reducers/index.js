import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';

const reducers = combineReducers({
	blog: BlogReducer
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;