// Displays if the user selects "Deer"
import React from 'react'
import { connect } from 'react-redux'

function OutcomeDeer (props) {
  return (
    <div className='deer'>
      <h1 className='brand-title'>Smile for the deer...</h1>
      <img src={props.deer}></img>
    </div>
  )
}


function mapStateToProps (state) {
  return {
    deer: state.deer.deer
  }
}

export default connect(mapStateToProps)(OutcomeDeer)
