import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Mentorship/Navbar";
import Resources from "./Resources";
import Notes from "./Notes";
import Modules from "./Modules";
import ChDPP from "./ChDpp";
import ScrollToTop from "../scrolltotop";
import PhDPP from "./PhDpp"
import Resources from "./Resources"
export default function Resource(){
    return (
      <>
        <Resources />
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/Notes" component={Notes} />
            <Route path="/Modules" component={Modules} />
            <Route path="/ChemistryDpp" component={ChDPP} />
            <Route path="/" component={Resources} exact />
            <Route path="/PhysicsDpp" component={PhDPP}/>
            {/* Add other routes as necessary */}
          </Switch>
        </Router>
      </>
    );
}