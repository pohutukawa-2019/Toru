// Buttons live here!
import React from 'react'
import OutcomeTruth from './OutcomeTruth'
import OutcomeDare from './OutcomeDare'
import OutcomeDeer from './OutcomeDeer'
import Reset from './Reset'
import { statement } from '@babel/template'

function SelectionList () {
  const clickHandler = (event) => {
    switch (event.target.title) {
      case 'getTruth':
        return {
          OutcomeTruth
        }
      case 'getDare':
        return {
          OutcomeDare
        }
      case 'getDeer':
        return {
          OutcomeDeer
        }
      case 'Reset':
        return {
          Reset
        }
    }
  }

  return (
    <div>
      <button style={buttonStyle} title='getTruth' onClick={(clickHandler)}>Truth</button>
      <button style={buttonStyle} title='getDare' onClick={(clickHandler)}>Dare</button>
      <button style={buttonStyle} title='getDeer' onClick={(clickHandler)}>Deer</button>
      <button style={buttonStyle} title='Reset' onClick={(clickHandler)}>Reset</button>

    </div>
  )
}

var buttonStyle = {
  margin: '10px 10px 10px 0',
  color: 'black',
  background: 'yellow'
}

export default SelectionList
