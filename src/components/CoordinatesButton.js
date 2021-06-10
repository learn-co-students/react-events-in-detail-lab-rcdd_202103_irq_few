// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends React.Component {
  
  coordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  };
  
  render(){
    return(
      <button onClick={this.coordinates}>Click</button>  
    )
  }

  
}

export default CoordinatesButton;
