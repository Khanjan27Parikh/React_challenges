import React from 'react';
import './App.css';
import add, { divide, mul, sub } from './Calculator';

function App() {
  return(
  <>
    <div>
      <h1>Basic Calculator App</h1>
      <ul>
        <li>Sum of two numbers is: <span className='calc'>{add(40, 4)}</span></li>
        <li>Subtraction of two numbers is: <span className='calc'>{sub(40, 4)}</span></li>
        <li>Division of two numbers is: <span className='calc'>{divide(4, 3)}</span></li>
        <li>Multiplication of two numbers is: <span className='calc'>{mul(40, 4)}</span></li>
      </ul>
    </div>
  </>
  );
}

export default App;