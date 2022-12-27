import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Camfeed from './Camfeed'
import Controlpanel from './Controlpanel'
import Smartlane from './Smartlane'


function Displayarea() {
  return (<div className="displayArea">
 <Routes>
  <Route path='/' element={<Smartlane/> }/>
  <Route  path='/Camfeed' element={<Camfeed/>} />
  <Route  path='/Controlpanel' element={<Controlpanel/>} />
  </Routes> 
    </div>
  )
}

export default Displayarea