import React from 'react'
import * as images from "../../assets"
const Work = () => {
  return (
    <>
      <section className='pt-16'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='font-medium text-base tracking-[7px]'>STEP BY STEP</h1>
          <h1 className='text-[40px] font-bold'>How It Works</h1>
        </div>
        <div className='flex items-center justify-center gap-10 mt-14'>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] tracking-wider font-semibold'>01</span>
          </div>
          <div>
            <img src={images.arrow} alt="" className='w-96'/>
          </div>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] tracking-wider font-semibold'>02</span>
          </div>
          <div>
            <img src={images.arrow} alt="" className='w-96'/>
          </div>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] tracking-wider font-semibold'>03</span>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
             <div className='flex flex-col items-center'>
              <img src={images.orderimg} alt="" className='w-52'/>
              <h1 >Order via the Blip app</h1>
             </div>
             <div className='flex flex-col items-center'>
              <img src={images.packageimg} alt="" className='w-52'/>
              <h1>Package prepared by partner</h1>
             </div>
             <div className='flex flex-col items-center'>
              <img src={images.deliveredimg} alt="" className='w-52'/>
              <h1>Package delivered to your location in as little as 5 minutes</h1>
             </div>
             
        </div>
      </section>
    </>
  )
}

export default Work