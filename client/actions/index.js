import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_TRUTH = 'REQUEST_TRUTH'
export const REQUEST_DARE = 'REQUEST_DARE'
export const REQUEST_DEER = 'REQUEST_DEER'
export const RECEIVE_TRUTH ='RECEIVE_TRUTH'
export const RECEIVE_DARE = 'RECEIVE_DARE'
export const RECEIVE_DEER = 'RECEIVE_DEER'
export const RESET = 'RESET'

//Requesting functions
export const requestTruth = () => {
  return {
    type: REQUEST_TRUTH
  }
}

export const requestDare = () => {
  return {
    type: REQUEST_DARE
  }
}

export const requestDeer = () => {
  return {
    type: REQUEST_DEER
  }
}

// For receiving functions
export const receiveDare = (dareData) => {
  return {
    type: RECEIVE_DARE,
    dare: dareData
  }
}

export const receiveDeer = (deerData) => {
  return {
    type: RECEIVE_DEER,
    deer: deerData
  }
}

export const receiveTruth = (truthData) => {
  return {
    type: RECEIVE_TRUTH,
    truth: truthData
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}

// function actions 
export function getTruth (id) {
return (dispatch) => {
  dispatch(requestTruth())
  return request
  .get(`/truth/${id}`)
  .then(res => {
    dispatch(receiveTruth(res))
  })
  .catch(err => {
    dispatch(showError(err.message))
  })
}
}

export function getDare (id) {
return (dispatch) => {
  dispatch(requestDare())
  return request.get(`/dare?${id}`)
  .then(res => {
    dispatch(receiveDare(res))
  })
  .catch(err => {
    dispatch(showError(err.message))
  })
}
}

export function getDeer (id) {
  return (dispatch) => {
    dispatch(requestDeer())
    return request.get(`/deer?${id}`)
    .then(res => {
      dispatch(receiveDeer(res))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
  }