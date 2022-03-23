import { STEP_DOWN, STEP_UP } from "./actionTypes"

export function stepUp (state) {
  return {
      type: STEP_UP,
      payload: state
  }
}

export function stepDown (state) {
  return {
      type: STEP_DOWN,
      payload: state
  }
}   
