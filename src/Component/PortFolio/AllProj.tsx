import React from 'react'
import './AllProj.css';
import allproj1 from '../../assets/allproj1.png';
import allproj2 from '../../assets/allproj2.png';
import allproj3 from '../../assets/allproj3.png';
import allproj4 from '../../assets/allproj4.png';
import allproj5 from '../../assets/allproj5.png';
import allproj6 from '../../assets/allproj6.png';

function AllProj() {
    return (
        <div className='all'>
            <div className='all-outer'>
                <div className='all-inner'>
                    <div className='all-img all1'>
                        <img className='all-img1' src={allproj1} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold t1'>Web Design</div>
                        <div className='text-[35px] font-bold t2'>Website Design</div>
                    </div>
                </div>
                <div className='all-inner'>
                    <div className='all-img all2'>
                        <img className='all-img1' src={allproj2} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold t1'>App Design</div>
                        <div className='text-[35px] font-bold t2'>Website Design</div>
                    </div>
                </div>
                <div className='all-inner all-inner3'>
                    <div className='all-img all3'>
                        <img className='all-img1' src={allproj3} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold t1'>App Design</div>
                        <div className='text-[35px] font-bold t2'>Website Design</div>
                    </div>
                </div>
                <div className='all-inner all-inner4'>
                    <div className='all-img all4'>
                        <img className='all-img1' src={allproj4} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold t1'>Web Design</div>
                        <div className='text-[35px] font-bold t2'>Website Design</div>
                    </div>
                </div>
                <div className='all-inner all-inner5'>
                    <div className='all-img all5'>
                        <img className='all-img1' src={allproj5} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold'>Web Design</div>
                        <div className='text-[35px] font-bold'>Website Design</div>
                    </div>
                </div>
                <div className='all-inner all-inner6'>
                    <div className='all-img all6'>
                        <img className='all-img1' src={allproj6} alt="" />
                    </div>
                    <div className='all-inner-text'>
                        <div className='text-[22px] font-semibold'>Web Design</div>
                        <div className='text-[35px] font-bold'>Website Design</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProj
