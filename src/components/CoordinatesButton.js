// Code CoordinatesButton Component Here
import React from 'react';
import {Component} from 'react'
class CoordinatesButton extends Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

export default CoordinatesButton;