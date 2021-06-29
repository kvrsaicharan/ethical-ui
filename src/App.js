import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  Button,Navbar } from 'react-bootstrap'
import './App.css';
import Home from "./components/homepage";
import logo from "./components/cg.png";
import fairy from "./components/fairy.png";
import notification from "./components/notifications.png";
import search from "./components/search.png"

//import logo from './logo.svg';
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="container-fluid">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="http://google.com"
        rel="noopener noreferrer" target="_blank">
        <img src={logo} width="15%" height="10%" 
        alt="logo is missing"/>&nbsp;&nbsp;
        <img src={fairy} width="10%" height="10%" 
        alt="logo is missing"/>

        </a>
        
        <Link to="/" 
        className="navbar-brand text-light  ">Brand</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-light ">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-light ">About</Link>
        </li>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-light ">Contact</Link>
        </li>
        <img src={search} width="10%" height="10%" 
        alt="logo is missing"/>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "><b>Search</b></Link>
        </li>
        <img src={notification} width="10%" height="10%" 
        alt="logo is missing"/>
        <li className="navbar-item">
        <Link to="/products"
        className="nav-link text-dark "><b>Notifications</b></Link>
         
        </li>
       
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "></Link>
        </li>
         <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "></Link>
        </li>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "></Link>
        </li>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "></Link>
        </li>
        <li className="navbar-item">
        <Link to="/"
        className="nav-link text-dark "></Link>
        </li>
</ul>
        
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link to="/"
        className="nav-link  text-dark">
        <b>Profile</b></Link>
        </li>
        </ul>
        </div>
        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        
 
        </div>
    
        
      </Router>
    );
  }
}

export default App;
