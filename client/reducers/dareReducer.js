import { RECEIVE_DARE, RESET, REQUEST_TRUTH, REQUEST_DEER } from '../actions'

const initialDareState = {
  dareVisible: false,
  dare: ''
}

function dare (state = initialDareState, action) {
  switch (action.type) {
    case RECEIVE_DARE:
      return {
        dareVisible: true,
        dare: action.dare
      }
    case RESET:
      return {
        dareVisible: false,
        dare: ''
      }
    case REQUEST_DEER:
      return {
        dareVisible: false,
        dare: ''
      }
    case REQUEST_TRUTH:
      return {
        dareVisible: false,
        dare: ''
      }
    default:
      return state
  }
}

export default dare