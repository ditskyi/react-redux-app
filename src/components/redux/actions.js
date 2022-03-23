import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, CREATE_USER, IS_LOGIN, ISN_LOGIN, DELETE_POST } from "./actionTypes";
import { auth, database } from '../../FirebaseConfig'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function deletePost(post) {
    return {
        type: DELETE_POST,
        payload: post
    }
}

export function showLoader () {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader () {
    return {
        type: HIDE_LOADER
    }
}   

export function showAlert (alert) {
    return {
        type: SHOW_ALERT,
        payload: alert,
    }
}

export function hideAlert (id) {
    return {
        type: HIDE_ALERT,
        payload: id,
    }
}

export function addUser(user) {
    return {
        type: CREATE_USER,
        payload: user  
    }
}


export function isLogin () {
    return {
        type: IS_LOGIN
    }
}

export function isnLogin () {
    return {
        type: ISN_LOGIN
    }
}

function newAlert(text) {
    return {
        message: text,
        id: Date.now(),
    }
}

export function signInUser(email, password) {
    return async dispatch => {
        try {
            const currentUser = await auth.signInWithEmailAndPassword(email, password)
            dispatch(addUser(currentUser))
        } catch (error) {
            dispatch(showAlert(newAlert(error.message)))
        }
    }
}

export function signUpUser(email, password) {
    return async dispatch => {
        try {
            const newUser = await auth.createUserWithEmailAndPassword(email, password)
            dispatch(addUser(newUser))
        } catch (error) {
            dispatch(showAlert(newAlert(error.message)))
        }
    }
}

export function deleteAsyncPost(post) {
    return async dispatch => {
        try {
            await database.ref('Posts').child(post.id).remove()
            dispatch(deletePost(post))
        } catch(error) {
            dispatch(showAlert(newAlert(error.message)))
        }
    }
}

export function createAsyncPost(post) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const firebasePost = await database.ref('Posts').push(post);
            const key = (await firebasePost.get()).key

            const newPost = {
                ...post,
                id: key
            }
            dispatch(createPost(newPost))
        } catch (error) {
            dispatch(showAlert(newAlert(error.message)))
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export function fetchPosts(userId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            await database.ref('Posts').get()
            .then(response => response.val())
            .then(response => response ? Object.keys(response).map(key => ({
                    ...response[key],
                    id: key
                })) : []
            )
            .then(response => response.filter(post => {
                return (post.uid === userId);
            })     
            )
            .then(post => dispatch({
                type: FETCH_POSTS,
                payload: post
            }))
        } catch (error) {
            dispatch(showAlert(newAlert(error.message)))
        }
        finally {
            dispatch(hideLoader())
        }
    }
}