import React, {Component} from 'react';
import '../App.js';
import './button.css';
import ReactDOM from 'react-dom';
import model from "../../src/Model.png";
class Button extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        button: true
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState({
        button:!this.state.button
      })
    }
    render(){
      return (
      <div className="container-fluid">
         
         <div className="row ">
           
        <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> 
        <img src={model}/>Model</button> 
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
        <button className={this.state.button ? "buttonFalse": "buttonTrue"} onClick={this.handleClick}> <img src={model}/>Model</button>  
     </div>

      </div>
      )
    }
    
  }
  
  
  export default Button;
  
  