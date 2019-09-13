import React from 'react'

function Button (props) {
  return (
    <React.Fragment>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2 style={h2style}>{props.text}</h2>
          </div>
          <div className="flip-box-back">
            <h2>{props.text}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

var h2style = {
  color: 'red',
  float: 'right',
  fontSize: '25px'
}
export default Button
