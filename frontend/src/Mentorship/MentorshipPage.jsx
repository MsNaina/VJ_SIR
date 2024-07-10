import "./MentorshipPage.css"
import Navbar from './Navbar'
import MentorshipHeader from './MentorshipHeader'
import IITs from './IITs'
import Feature from './Feature'
import Passionate from './Passionate'
import Map from './map'
import WaveFooter from '../Home/Wavefooter'
import Footer from "../Home/footer"
import { Helmet } from 'react-helmet-async';
function MentorshipPage() {
  
    return (
      <>
       <Helmet>
      <title>mentorship - vj nucleus</title>
    </Helmet>
<Navbar/>
<MentorshipHeader/>
<IITs/>
<Map/>
<Feature/>
<Passionate/>
<WaveFooter/>
<Footer/>
</>
  )
}

export default MentorshipPage