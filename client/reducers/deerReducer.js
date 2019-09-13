import { RECEIVE_DEER, RESET, REQUEST_TRUTH, REQUEST_DARE } from '../actions'

const initialDeerState = {
  deerVisible: false,
  deer: ''
}

function deer (state = initialDeerState, action) {
  switch (action.type) {
    case RECEIVE_DEER:
      return {
        deerVisible: true,
        deer: action.deer
      }
    case RESET:
      return {
        deerVisible: false,
        deer: ''
      }
    case REQUEST_TRUTH:
      return {
        deerVisible: false,
        deer: ''
      }
    case REQUEST_DARE:
      return {
        deerVisible: false,
        deer: ''
      }
    default:
      return state
  }
}

export default deer
