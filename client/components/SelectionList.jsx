// Buttons live here!
import React from 'react'
import OutcomeTruth from './OutcomeTruth'
import OutcomeDare from './OutcomeDare'
import OutcomeDeer from './OutcomeDeer'
import Reset from './Reset'
import Button from './Button'

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
    <div style={buttonContainer}>
      <Button
        style={buttonStyle}
        title="getTruth"
        onClick={(clickHandler)}
        text={'Truth'}
      />
      <Button style={buttonStyle}
        title='getDare'
        onClick={(clickHandler)}
        text={'Dare'}
      />
      <Button style={buttonStyle}
        title='getDeer'
        onClick={(clickHandler)}
        text={'Deer'}
      />
      <Button style={buttonStyle}
        title='Reset'
        onClick={(clickHandler)}
        text={'Reset'}
      />

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

export default SelectionList
