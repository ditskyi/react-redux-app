import { HIDE_ALERT, SHOW_ALERT } from "./actionTypes"
import { hideAlert } from '../redux/actions';

export const AlertMiddleware = (store) => (next) => (action) => {

    let alerts = [];

    if (action.type === SHOW_ALERT) {
        const alertId = action.payload.id;
        const timeout = setTimeout(() => store.dispatch(hideAlert(alertId)), 5000) 
        alerts.push({ alertId, timeout })
    }

    if (action.type === HIDE_ALERT) {
        const alert = alerts.find(({ alertId }) => alertId === action.payload.id)
        if (alert) {
            const newAlerts = alerts.filter(({ alertId }) => alertId !== action.payload.id)

            alerts = newAlerts
            clearTimeout(alert.timeout)
        }
    }
    next(action)
}

