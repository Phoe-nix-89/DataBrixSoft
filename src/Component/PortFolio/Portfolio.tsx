import React from 'react'
import './Portfolio.css';
import port1 from '../../assets/port1.png';
import { Link, Outlet } from 'react-router-dom';

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

      <div className='lower'>
        <div className='lower-top-text'>Our Portfolio</div>
        <div className='selection font-semibold'>
          <Link to={""} className='all-project'>All Project</Link>
          <Link to={""} className='web-design'>Web Design</Link>
          <Link to={""} className='logo-design'>Logo Design</Link>
          <Link to={""} className='mobile-app'>Mobile App</Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Portfolio
