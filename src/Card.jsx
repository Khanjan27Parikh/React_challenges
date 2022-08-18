import React from 'react';

function Card(Props) {
    return (<>
      <div className='cards'>
        <div className='card'>
            <img src={Props.imgSrc} alt='mypic' className='card_img' />
            <div className='card_info'>
              <span className='card_category'> {Props.title} </span>
              <h3 className='card_title'> {Props.Sname} </h3>
              <a href={Props.link} target='_blank'>
                <button>Watch Now</button>
              </a>
            </div>
        </div>
      </div>
    </>);
  }

  export default Card;