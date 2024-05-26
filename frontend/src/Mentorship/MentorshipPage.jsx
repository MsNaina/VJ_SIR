import { useState } from 'react'
import "./MentorshipPage.css"
import Navbar from './Navbar'
import MentorshipHeader from './MentorshipHeader'
import IITs from './IITs'
import Feature from './Feature'
import Passionate from './Passionate'
import Map from './map'

function MentorshipPage() {
  
    return (
      <>
<Navbar/>
<MentorshipHeader/>
<IITs/>
<Map/>
<Feature/>
<Passionate/>
</>
  )
}

export default MentorshipPage