import * as ACTION_TYPES from './ActionTypes';

export const SAVE_BLOG = (type = "ALL", object) => {
    switch(type)
    {
        case "DATA":
            return {
                type: ACTION_TYPES.SAVE_BLOG_DATA,
                payload: object
            };
        default:
            return;
    }
};
