import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, CREATE_USER, IS_LOGIN, ISN_LOGIN, HIDE_MIDDLEWARE_ALERT } from "./actionTypes"

const initialState = {
    loading: false,
    alerts: [],
    user: null,
    login: true
}
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}

        case SHOW_ALERT:
            return {...state, alerts: state.alerts.concat([action.payload])}
        case HIDE_ALERT:
            return {...state, alerts: state.alerts.filter(alert => action.payload !== alert.id)}
        
        case CREATE_USER: 
            return {...state, user: action.payload}

        case IS_LOGIN:
            return {...state, login: true}
        case ISN_LOGIN:
            return {...state, login: false}
        
            default: return state
    }
}