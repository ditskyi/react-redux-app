export const hideAlertMiddleware = (store) => (next) => (action) => {
    const delayMS = action?.meta?.delayMs 
    // console.log('delayMS', delayMS)
    // console.log('next(action)', next(action))
    if(!delayMS) {
        return next(action)
    } else {
        setTimeout(() => next(action), delayMS)
    }
    
}