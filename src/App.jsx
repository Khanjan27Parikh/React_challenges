import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const App = () => (
  <>
    <h1 className='heading_style'>List of Top 3 Netflix Series</h1>
    {Sdata.map( (val) => {
      return(
        <Card 
          key = {val.id}
          imgSrc = {val.imgSrc}
          title = {val.title}
          Sname = {val.Sname}
          link = {val.link}
        />
          );
    })}
  </>
);

export default App;