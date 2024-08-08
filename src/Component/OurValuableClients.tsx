import React from 'react'
import './OurValuableClients.css';
import osbtm from '../assets/osbtm.png';
import ourvalue1 from '../assets/ourvalue1.png';
import ourvalue2 from '../assets/ourvalue2.png';
import ourvalue3 from '../assets/ourvalue3.png';
import ourvalue4 from '../assets/ourvalue4.png';
import ourvalue5 from '../assets/ourvalue5.png';
import ourvalue6 from '../assets/ourvalue6.png';
import ourvalue7 from '../assets/ourvalue7.png';
import ourvalue8 from '../assets/ourvalue8.png';
import ourvalue9 from '../assets/ourvalue9.png';
import ourvalue10 from '../assets/ourvalue10.png';

function OurValuableClients() {
  return (
    <div className='d1'>
        <div className='d2'>
            <div className='d3'>
                <h1 className='top'>Our Valuable Clients</h1>
                <div className='imgbl'>
                    <img src={osbtm} alt="" />
                </div>
            </div>
            <div className='d4'>
                <div className='d5'>
                    <div className="imgg imgg1">
                        <div className='d'>
                            <div className='imgbg i1'>
                                <img className='in1' src={ourvalue1} alt="" />
                            </div>
                        </div>
                        <div className='d'>
                            <div className='imgbg i2'>
                                <img className='in1' src={ourvalue2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="imgg imgg2">
                        <div className='d'>
                            <div className='imgbg i3'>
                                <img className='in1' src={ourvalue3} alt="" />
                            </div>
                        </div>
                        <div className='d'>
                            <div className='imgbg i4'>
                                <img className='in1' src={ourvalue4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="imgg imgg3">
                        <div className='d'>
                            <div className='imgbg i4'>
                                <img className='in1' src={ourvalue5} alt="" />
                            </div>
                        </div>
                        <div className='d'>
                            <div className='imgbg i5'>
                                <img className='in1' src={ourvalue6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="imgg imgg4">
                        <div className='d'>
                            <div className='imgbg i5'>
                                <img className='in1' src={ourvalue7} alt="" />
                            </div>
                        </div>
                        <div className='d'>
                            <div className='imgbg i3'>
                                <img className='in1' src={ourvalue8} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="imgg imgg5">
                        <div className='d'>
                            <div className='imgbg i2'>
                                <img className='in1' src={ourvalue9} alt="" />
                            </div>
                        </div>
                        <div className='d'>
                            <div className='imgbg i1'>
                                <img className='in1' src={ourvalue10} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValuableClients
