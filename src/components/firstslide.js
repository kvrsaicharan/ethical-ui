import React, {Component} from 'react';
import '../App.js';
import '../App.css';
import backgroundImage from '../background.png';
import fairyblack from '../fairyblack.png';

function Firstslide(){
    return(
<div className="container-fluid">
    
        <img className="tiledBackground" width="100%"/>
        <h1 className="top-left">Ethical UI</h1>
        <img src={fairyblack} className="bottom-right"></img>
        </div>
       
       
            
            
        
        
    );
}
export default Firstslide;
