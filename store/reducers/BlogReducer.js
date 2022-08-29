import * as ACTION_TYPES from '../actions/ActionTypes';

const initialBlogState = {
    data: []
};

const BlogReducer = (state = initialBlogState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SAVE_BLOG_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
};

export default BlogReducer;
