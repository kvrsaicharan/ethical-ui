import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  Button,Navbar } from 'react-bootstrap'
import './App.css';
import cglogo from './cg.png';
import line from'./line.png';
import fairy from './fairy.png';
//import logo from './logo.svg';
//import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';
import Firstslide from "./components/firstslide.js";
import Secondslide from "./components/secondslide.js";
import Notifications from "./components/notifications.js";



class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="container-fluid">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
        <a className="navbar-brand" href="http://google.com"
        rel="noopener noreferrer" target="_blank">
        <img src={cglogo} width="70" height="50"
        alt="logo is missing"/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        
        </a>
        
        <Link to="/firstslide" 
        className="navbar-brand text-dark  "><img src={fairy} width="70" height="50"
        alt="logo is missing"/></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/firstslide"
        className="nav-link text-dark ">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/firstslide"
        className="nav-link text-dark">About</Link>
        </li>
        <li className="navbar-item">
        <Link to="/secondslide"
        className="nav-link text-dark">Data</Link>
        </li>

        <li className="navbar-item">
        <Link to="/products"
        className="nav-link text-light "><i class="fas fa-shopping-cart"></i></Link>
        </li>
        </ul>
        
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link to="/login"
        className="nav-link  text-warning">
        <b>Profile</b></Link>
        </li>
        </ul>
        </div>
        </nav>
  
        <br/>
        <Route path="/" exact component={Firstslide}/>
        <Route path="/firstslide" exact component={Firstslide}/>
        <Route path="/secondslide" exact component={Secondslide}/>
        <Route path="/notifications" exact component={Notifications}/>
        
       
       
        <hr/>

       
        </div>
        
        
    
        
      </Router>
    );
  }
}

export default App;
