import { CREATE_POST, DELETE_POST, FETCH_POSTS } from "./actionTypes"

const initialState = {
    posts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCH_POSTS:
            return {...state, posts: action.payload}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => action.payload !== post)}
        default: return state
    }
    
} 