import React from 'react'
import {Motion, spring} from 'react-motion';

function Header () {
  return (
    <div className='header'>
      <h1 className='brand-title'>PLAY Truth or Dare or Deer</h1>
      // In your render...
      <Motion headerStyle={{x: 0}} style={{x: spring(10)}}>
        {value => <div>{value.x}</div>}
      </Motion>
    </div>
  )
}




export default Header
