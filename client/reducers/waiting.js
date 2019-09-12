import {
  SHOW_ERROR,
  REQUEST_TRUTH,
  REQUEST_DARE,
  REQUEST_DEER,
  RECEIVE_TRUTH,
  RECEIVE_DARE,
  RECEIVE_DEER
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TRUTH:
      return true

    case REQUEST_DEER:
      return true

    case REQUEST_DARE:
      return true

    case RECEIVE_TRUTH:
      return false

    case RECEIVE_DEER:
      return false
    
    case RECEIVE_DARE:
      return false

      
    case SHOW_ERROR:
      return false
        
    default:
      return state
  }
}

export default waiting