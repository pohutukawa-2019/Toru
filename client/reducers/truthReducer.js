import { RECEIVE_TRUTH, RESET } from '../actions'

const initialTruthState = {
  truthVisible: false,
  truth: ''
}

function truth (state = initialTruthState, action) {
  switch (action.type) {
    case RECEIVE_TRUTH:
      return {
        truthVisible: true,
        truth: action.truth
      }
    case RESET:
      return {
        truthVisible: false,
        truth: ''
      }
      default:
        return state
  }
}

export default truth