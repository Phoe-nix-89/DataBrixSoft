import React from 'react'
import getstartedtop from '../assets/getstartedtop.svg';
import './GetStarted.css';
import getimg from '../assets/getimg.png';
function GetStarted() {
  return (
    <div className='get-started'>
      <img src={getstartedtop} className='ban' alt="" />
      <div className='blue'>
        <div className='con'>
            <div className='input-field'>
              <div className='input-cnt'>
                <div className='get'>Get our stories delivered From <br /> us to your inbox weekly.</div>
                <div className='inpt_btn'>
                  <input type="text" placeholder='Your Email' className='inpt' />
                  <button className='bttn'>Get Started</button>
                </div>
                <div className='para'>Get a response tomorrow if you submit by 9pm today. If we <br /> received after 9pm will get a reponse the following day.</div>
              </div>
            </div>
            <div className='field-img'>
              <div className='card-field'>
                <div className='f-img'>
                  <img src={getimg} alt="" className='f-fig' />
                </div>
                <div className='f-name'>
                  <div className='below-img'>
                    <div className='tp'>The best aticles every week</div>
                    <div className='bttm'>Our insurance plans offers are priced the same everywhere else.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
