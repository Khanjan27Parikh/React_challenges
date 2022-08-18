import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';

ReactDOM.render(
  <>

    <h1 className='heading_style'>List of Top 3 Netflix Series</h1>
    {Sdata.map( val => {
      return(
        <Card 
          imgSrc = {val.imgSrc}
          title = {val.title}
          Sname = {val.Sname}
          link = {val.link}
        />
          );
    })}
  </>,
  document.getElementById('root')
);

// https://www.netflix.com/in/