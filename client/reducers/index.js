import {combineReducers} from 'redux'

import errorMessage from '../actions/index'
import dare from './dareReducer'
import deer from './deerReducer'
import truth from './truthReducer'
import waiting from './waiting'

export default combineReducers ({
  dare,
  deer,
  truth,
  waiting
})