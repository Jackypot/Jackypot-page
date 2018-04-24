import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Faqs from './componentes/Faqs';
import Coontact from './componentes/Contact';
import Contract from './componentes/Contract';
import FreeBets from './componentes/Freebets';
import Terms from './componentes/Terms';
import Play from './componentes/play';

import ExampleApp from "./Modal";

const BasicExample = () => (
  <div className='contendedor-global'>
  <Router className='nav-cont'>
    <div className="wrapper" id="wrapper">
         <div className="box navigation" id="nav">
            <div className="container-navigation">
               <div className="logo">
                  <img src={require("./assets/nav/logo.png")} alt="Logo JP" className="img-fluid"/>
               </div>
               <div className="nav" id="navegacion-nav">
                  <ul>
                    <li><a>< Link to="/play">Play</Link></a></li>
                    <li><a><Link to="/faqs">Faqs</Link></a></li>
                    <li><a><Link to="/free-bets">FreeBets</Link></a></li>
                    <li><a><Link to="/contract">Contract</Link></a></li>
                    <li><a><Link to="/terms">Terms</Link></a></li>
                    <li><a><Link to="/contact">Contact</Link></a></li>
                </ul>
               </div>
            </div>
      
      <Route exact path="/" component={Play} />
      <Route path="/play" component={Play} /> 
      <Route path="/faqs" component={Faqs} />
      <Route path="/free-bets" component={FreeBets} />
      <Route path="/contract" component={Contract} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Coontact} />
    </div>
         </div>
  </Router>
  </div>
);


export default BasicExample;