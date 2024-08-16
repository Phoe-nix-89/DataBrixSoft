import React from 'react'
import './OurTopBlogs.css';
import osbtm from '../assets/osbtm.png';
import ourtop1 from '../assets/ourtop1.png';
import ourtop2 from '../assets/ourtop2.png';

function OurTopBlogs() {
  return (
    <div className='outer'>
        <div className='ourtop'>Our Top Blogs</div>
        <div className='imgdiv'>
            <img src={osbtm} alt="" />
        </div>
        <div className='inner'>
            <div className='ct'>
                <a href="" className="bx">
                    <div className='bl'>
                        <div>August 09,2024</div>
                    </div>
                    <img src={ourtop1} alt="" className="im1" />
                    <div className='t'>
                        <div className='mob'>Mobile App Development</div>
                        <div className='lr'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptas eligendi assumenda obcaecati quae est?
                        </div>
                    </div>
                </a>
                <a href="" className="bx">
                    <div className='bl'>
                        <div>August 09,2024</div>
                    </div>
                    <img src={ourtop2} alt="" className="im1" />
                    <div className='t'>
                        <div className='mob'>Mobile App Development</div>
                        <div className='lr'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptas eligendi assumenda obcaecati quae est?
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default OurTopBlogs
