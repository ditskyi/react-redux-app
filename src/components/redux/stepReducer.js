import { STEP_DOWN, STEP_UP } from "./actionTypes"

const initialState = {
    step: 0,
}

export const stepReducer = (state = initialState, action) => {
  switch(action.type) {
      case STEP_UP:
        return {...state, step: ++action.payload}
      case STEP_DOWN:
        return {...state, step: --action.payload}

      default: return state
  }
} 