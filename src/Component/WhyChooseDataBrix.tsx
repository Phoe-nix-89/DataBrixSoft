import React from 'react'
import './WhyChooseDataBrix.css';
import whychoose1 from '../assets/whychoose1.png';
import whychoose2 from '../assets/whychoose2.png';
import osbtm from '../assets/osbtm.png';

function WhyChooseDataBrix() {
  return (
    <div>
      <div className='d-1'>
        <div className='d-2'>
            {/* <div className='d-3'>
                <div className='d-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam ea necessitatibus ratione sit! Voluptatibus quisquam quos rerum eius ea! Obcaecati porro officiis voluptatibus magnam iste ipsum consectetur dignissimos ipsam odio cumque est, laudantium, nisi reprehenderit in accusamus eveniet? Autem rem nobis exercitationem reprehenderit quia, quis quam aperiam nostrum enim laborum consequatur odit possimus excepturi soluta. Aut nostrum reiciendis deleniti consectetur nulla iste officia neque suscipit, modi accusamus debitis totam repellendus praesentium voluptatem, voluptate itaque dolores repellat, et recusandae! Alias quasi sequi numquam dolorum distinctio pariatur excepturi cum obcaecati. Consectetur illum cumque, cupiditate dignissimos nam eos. Ipsam similique omnis porro!</div>
                
            </div> */}
            {/* <div className='d-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, voluptates.</div> */}
            <div>
                <div className='d-4'>
                    <div className='d-5'>Why Choose
                        <br />
                    Data Brix
                    SOFT</div>
                    <img src={osbtm} className="btm1" alt="" />
                    <div className='d-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione <br /> amet asperiores unde iusto nihil id, fugiat error consequatur in <br /> deleniti molestias voluptatum corporis excepturi, quam saepe ea <br />, magni fuga aliquid!</div>
                </div>
                <img className='img2' src={whychoose2} alt="" />
            </div>
            <img src={whychoose1} className='img1' alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseDataBrix
