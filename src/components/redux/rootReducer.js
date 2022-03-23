import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";
import { stepReducer } from './stepReducer';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    step: stepReducer,
    form: formReducer
})