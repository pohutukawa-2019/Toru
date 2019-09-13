import { RECEIVE_DARE, RESET } from '../actions'

const initialDareState = {
  dareVisible: false,
  dare: ''
}

function dare (state = initialDareState, action) {
  switch (action.type) {
    case RECEIVE_DARE:
      return {
        dareVisible: true,
        dare: action.dare.dare_prompt
      }
    case RESET:
      return {
        dareVisible: false,
        dare: ''
      }
    default:
      return state
  }
}

export default dare