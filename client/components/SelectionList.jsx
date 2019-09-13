// Buttons live here!
import React from 'react'
import { connect } from 'react-redux'

import OutcomeTruth from './OutcomeTruth'
import OutcomeDare from './OutcomeDare'
import OutcomeDeer from './OutcomeDeer'
import Button from './Button'

import { getDare, getDeer, getTruth, reset } from '../actions'

function SelectionList (props) {

  const truthHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    props.dispatch(getTruth(idNumber))
  }
  
  const dareHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    props.dispatch(getDare(idNumber))
  }

  const deerHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    props.dispatch(getDeer(idNumber))
  }

  const resetHandler = (e) => {
    props.dispatch(reset())
  }

  return (
    <>
      <div style={buttonContainer}>
        <button onClick={truthHandler} name='getTruth'><Button
          style={buttonStyle}
          name='getTruth'
          text={'Truth'}
        /></button>
        <button onClick={dareHandler} name='getDare'><Button
          style={buttonStyle}
          name='getDare'
          text={'Dare'}/>
        </button>
        <button onClick={deerHandler} name='getDeer'><Button
          style={buttonStyle}
          title='getDeer'
          text={'Deer'}/>
        </button>
        <button onClick={resetHandler} name="reset"><Button
          style={buttonStyle}
          title='Reset'
          text={'Reset'}/>
        </button>

      </div>
      {props.dareVisible && <OutcomeDare />}
      {props.deerVisible && <OutcomeDeer />}
      {props.truthVisible && <OutcomeTruth />}
    </>
  )
}

var buttonStyle = {
  margin: '10px 10px 10px 0',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  background: 'yellow',
  alignItems: 'center'
}

var buttonContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}

function mapStateToProps (state) {
  return {
    dareVisible: state.dare.dareVisible,
    deerVisible: state.deer.deerVisible,
    truthVisible: state.truth.truthVisible
  }
} 

export default connect(mapStateToProps)(SelectionList)
