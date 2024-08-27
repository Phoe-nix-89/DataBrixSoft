import React from 'react'
import './Portfolio.css';
import port1 from '../../assets/port1.png';

function Portfolio() {
  return (
    <div className='ptfo'>
      <div className='upper'>
        <div className='up-text'>
          <div className='up-t-inner'>
            <div className='capital'>PORTFOLIO</div>
            <div className='para-text'>We are a company that offers design
              and develop services for you from initial
              sketches to the final construction.</div>
          </div>
        </div>
        <img className='up-img' src={port1} alt="" />
      </div>
    </div>
  )
}

export default Portfolio
