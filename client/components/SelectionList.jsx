// Buttons live here!
import React from 'react'
import { connect } from 'react-redux'

import OutcomeTruth from './OutcomeTruth'
import OutcomeDare from './OutcomeDare'
import OutcomeDeer from './OutcomeDeer'
import Reset from './Reset'
import Button from './Button'

import { statement } from '@babel/template'

import { getDare, getDeer, getTruth, reset } from '../actions'

function SelectionList ({ dispatch }) {

  const truthHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    dispatch(getTruth(idNumber))
  }
  
  const dareHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    dispatch(getDare(idNumber))
  }

  const deerHandler = (e) => {
    const idNumber = Math.ceil(Math.random() * 10)
    dispatch(getDeer(idNumber))
  }

  const resetHandler = (e) => {
    dispatch(reset())
  }

  return (
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
        onClick={clickHandler}
        text={'Deer'}/>
      </button>
      <button onClick={resetHandler} name="reset"><Button
        style={buttonStyle}
        title='Reset'
        onClick={clickHandler}
        text={'Reset'}/>
      </button>

    </div>
  )
}

var buttonStyle = {
  margin: '10px 10px 10px 0',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  background: 'yellow'
}

var buttonContainer = {
  display: 'flex',
  flexDirection: 'row'
}

export default connect()(SelectionList)
