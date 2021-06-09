// Code DelayedButton Component Here
import React from 'react';

export default function({onDelayedClick,delay}) {
  
  
  const handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      onDelayedClick(event);
    }, delay);
  };


    return (<button onClick={handleClick}>Delayed</button>);
}