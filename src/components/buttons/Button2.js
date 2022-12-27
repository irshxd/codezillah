import React from 'react'
import {Link} from 'react-router-dom'

function Button2() {
  return (
    <div>
      <Link to={'/Camfeed'}>
    <div className="homeTextbutton2"> <div className='textButton'>Cam feed</div> </div></Link>
    </div>
  )
}

export default Button2
