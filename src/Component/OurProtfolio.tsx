import React from 'react'
import osbtm from '../assets/osbtm.png';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './OurPortfolio.css';
import ourport1 from '../assets/ourport1.png';

function OurProtfolio() {
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
        <div className='border-solid border-2 border-black h-[80%] w-[85%]'>
            <div className='border-solid border-2 border-black h-[15%]'>
                <div className="text-5xl text-black font-semibold">Our Portfolio</div>
                <div className="flex justify-center">
                    <img src={osbtm} className="btm" alt="" />
                </div>
            </div>
            <div className='border-solid border-2 border-black h-[85%] flex flex-wrap items'>
                <div className='border-solid border-2 border-black h-[50%] w-[50%] flex'>
                    <div className='border-solid border-2 border-black h-full w-[50%]'>
                        <img src={ourport1} className='w-full h-full' alt="" />
                    </div>
                    <div className='border-solid border-2 border-black h-full w-[50%]'></div>
                </div>
                <div className='border-solid border-2 border-black h-[50%] w-[50%] flex'>
                    <div className='border-solid border-2 border-black h-full w-[50%]'>
                        <img src={ourport1} className='w-full h-full' alt="" />
                    </div>
                    <div className='border-solid border-2 border-black h-full w-[50%]'></div>
                </div>
                <div className='border-solid border-2 border-black h-[50%] w-[50%] flex'>
                    <div className='border-solid border-2 border-black h-full w-[50%]'></div>
                    <div className='border-solid border-2 border-black h-full w-[50%]'>
                        <img src={ourport1} className='w-full h-full' alt="" />
                    </div>
                </div>
                <div className='border-solid border-2 border-black h-[50%] w-[50%] flex'>
                    <div className='border-solid border-2 border-black h-full w-[50%]'></div>
                    <div className='border-solid border-2 border-black h-full w-[50%]'>
                        <img src={ourport1} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProtfolio
