import React from 'react';
import Images from './Images';
import Heading from './Heading';

function Card(Props) {
    return (<>
      <div className='cards'>
        <div className='card'>
            <Images imgSrc = {Props.imgSrc} />
            <div className='card_info'>
              <span className='card_category'> {Props.title} </span>
              <Heading Sname = {Props.Sname} />
              <a href={Props.link} target='_blank'>
                <button>Watch Now</button>
              </a>
            </div>
        </div>
      </div>
    </>);
  }

  export default Card;