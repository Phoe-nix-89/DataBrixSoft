import React from 'react'
import './NewFooter.css';
import animationData from "../assets/Databrifsoft Logo Source File/Final/DataBrifsoft Logo.png";

function NewFooter() {
  return (
    <div className='foot-outer'>
        <div className='foot'>
            <div className='dt'>
                <div className='social'>
                    <img src={animationData} alt="" />
                    <div className='text-[#5A7184] text-left'>Build a modern and creative website with crealand</div>
                    <div className='socials'>
                        <a href="" className='profile-link'>Twitter</a>
                        <a href="" className='profile-link'>LinkedIn</a>
                        <a href="" className='profile-link'>Instagram</a>
                        <a href="" className='profile-link'>Google</a>
                        <a href="" className='profile-link'>Youtube</a>
                    </div>
                </div>
            </div>
            <div className='ps'>
                <div className='product'>
                    <div className='prd'>Products</div>
                    <div className='prds'>
                        <a href="" className='pr-link'>Landingpage</a>
                        <a href="" className='pr-link'>Features</a>
                        <a href="" className='pr-link'>Documentation</a>
                        <a href="" className='pr-link'>Referral Program</a>
                        <a href="" className='pr-link'>Pricing</a>
                    </div>
                </div>
                <div className='services'>
                    <div className='prd'>Services</div>
                    <div className='prds'>
                        <a href="" className='pr-link'>Documentation</a>
                        <a href="" className='pr-link'>Design</a>
                        <a href="" className='pr-link'>Themes</a>
                        <a href="" className='pr-link'>Illustrations</a>
                        <a href="" className='pr-link'>UI Kit</a>
                    </div>
                </div>
            </div>
            <div className='cm'>
                <div className='company'>
                    <div className='prd'>Company</div>
                    <div className='prds'>
                        <a href="" className='pr-link'>About</a>
                        <a href="" className='pr-link'>Terms</a>
                        <a href="" className='pr-link'>Privacy Policy</a>
                        <a href="" className='pr-link'>Careers</a>
                        
                    </div>
                </div>
                <div className='more'>
                    <div className='prd'>More</div>
                    <div className='prds'>
                        <a href="" className='pr-link'>Documentation</a>
                        <a href="" className='pr-link'>License</a>
                        <a href="" className='pr-link'>Changelog</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewFooter
