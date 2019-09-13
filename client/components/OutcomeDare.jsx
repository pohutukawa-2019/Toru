// Displays if the user selects "Dare"

import React from 'react'
import { connect } from 'react-redux'

function OutcomeDare (props) {
  return (
    <div className='dare'>
      <h1 className='brand-title'>I dare you... {props.dare}</h1>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    dare: state.dare.dare
  }
}

export default connect(mapStateToProps)(OutcomeDare)
