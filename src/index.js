// challenge 3
// Greeting Website

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date(2022, 8, 16, 20);
currDate = currDate.getHours();
let greeting = '';
const cssStyle = { };

if(currDate >= 1 && currDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if(currDate >= 12 && currDate < 16){
  greeting = 'Good Afternoon';
  cssStyle.color = 'red';
}
else if(currDate >= 16 && currDate < 20){
  greeting = 'Good Evening';
  cssStyle.color = 'orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'blue';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);