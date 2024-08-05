import React, { useEffect, useState } from 'react'
import osbtm from '../assets/osbtm.png';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './OurPortfolio.css';
import ourport1 from '../assets/ourport1.png';
import ourport2 from '../assets/ourport2.png';
import ourport3 from '../assets/ourport3.png';
import ourport4 from '../assets/ourport4.png';

function OurProtfolio() {
    const [width, setWidth] = useState("400");
    // const breakPoint = 1450;
    const options = {
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    };
  return (
    <div className='bg-[#EAEAFF] h-[105vh] rounded-br-[200px] flex flex-col justify-center items-center'>
        <div className=' div1'>
            <div className=' h-[15%]'>
                <div className="text-5xl text-black font-semibold">Our Portfolio</div>
                <div className="flex justify-center">
                    <img src={osbtm} className="btm" alt="" />
                </div>
            </div>
            <div className=' h-[85%] flex flex-wrap items'>
                <div className=' h-[50%] w-[50%] flex item1'>
                    <div className='  h-full w-[50%] img'>
                        <img src={ourport1} className='w-full h-full' alt="" />
                        <div className='text'>test</div>
                    </div>
                    <div className='  h-full w-[50%] bg-white txt flex flex-col'>
                        <p className='h-[35%] text-left pt-16 txt1'>Mobile App</p>
                        <p className='h-[65%] text-left  txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </div>
                <div className='  h-[50%] w-[50%] flex item2'>
                    <div className='  h-full w-[50%] img'>
                        <img src={ourport2} className='w-full h-full' alt="" />
                    </div>
                    <div className='  h-full w-[50%] bg-white txt flex flex-col'>
                        <p className='h-[35%] text-left pt-16 txt1'>Website</p>
                        <p className='h-[65%] text-left  txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </div>
                <div className='  h-[50%] w-[50%] flex item3'>
                    <div className='  h-full w-[50%] bg-white txt flex flex-col'>
                        <p className='h-[35%] text-left pt-16 txt1'>Web Development</p>
                        <p className='h-[65%] text-left  txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className=' h-full w-[50%] img'>
                        <img src={ourport3} className='w-full h-full' alt="" />
                    </div>
                </div>
                <div className=' h-[50%] w-[50%] flex item4'>
                    <div className=' h-full w-[50%] bg-white txt flex flex-col'>
                        <p className='h-[35%] text-left pt-16 txt1'>Mobile App</p>
                        <p className='h-[65%] text-left  txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className='  h-full w-[50%] img'>
                        <img src={ourport4} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProtfolio
