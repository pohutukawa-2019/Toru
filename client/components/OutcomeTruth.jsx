// Displays if the user selects "Truth"

import React from 'react'
import { connect } from 'react-redux'

function OutcomeTruth (props) {
  return (
    <div className='truth'>
      <h1 className='brand-title'>Tell me the truth... {props.truth}</h1>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    truth: state.truth.truth
  }
}

export default connect(mapStateToProps)(OutcomeTruth)
