import React from 'react'
import * as images from "../../assets"
import { Link } from 'react-router-dom'
const Delivery = () => {
    return (
        <>
            <section className='pt-10 '>
                <div className='flex flex-col items-center gap-1'>
                    <h1 className='font-medium text-[13px] md:text-base tracking-[7px]'>COVERAGE AREA</h1>
                    <h1 className='text-[30px] lg:text-[36px] xl:text-[40px] font-bold'>Delivery Zones</h1>
                    <p className='w-[60%] sm:w-full text-center text-[16px] lg:text-[18px] xl:text-[22px] '>Currently serving select areas. More coming soon!</p>
                </div>
                <div className='bg-map md:h-[70vh]  lg:h-[100vh] xl:h-[140vh] mt-20 rounded-t-[60px] relative hidden md:block'>
                    <div className='absolute bottom-[-25vh]'>
                        <img src={images.drone} alt="" />

                    </div>
                    <div className='absolute md:bottom-[-49px] lg:bottom-[-20px] xl:bottom-[-1.5%] md:right-[36%] lg:right-[37%] '>
                        <div className='flex flex-col items-center justify-center md:gap-3 lg:gap-6 xl:gap-8'>
                            <div className='flex flex-col items-center '>
                                <h1 className='md:text-[24px] lg:text-[29px] xl:text-[40px] font-bold tracking-wide text-white' >Join Our Network</h1>
                                <p className='md:text-[12px] lg:text-[15px] xl:text-[22px] text-white'>For QSRs, Restaurants, and Retailers</p>
                            </div>
                            <button className='bg-white text-black md:text-[10px] lg:text-[13px] xl:text-[15px] font-bold px-5 lg:px-7 py-2 lg:py-3 rounded-[10px] tracking-wider'>BECOME A PARTNER</button>

                        </div>
                    </div>
                </div>
                <div className='bg-bottom  rounded-b-[60px]  md:h-[80vh]  lg:h-[100vh] xl:h-[120vh] md:flex flex-col items-center justify-center gap-4 md:gap-8 hidden '>
                    <h1 className='text-[30px] lg:text-[36px] xl:text-[40px] font-bold tracking-wide '>Download the App Now</h1>
                    <img src={images.qrcode} alt="" className='md:w-28 lg:w-32 xl:w-36' />
                    <div className='flex items-center gap-5'>
                        <Link to={"/"}>
                            <img src={images.googleblack} alt="" className='md:w-28 lg:w-32 xl:w-40' />
                        </Link>
                        <Link to={"/"}>
                            <img src={images.appblack} alt="" className='md:w-28 lg:w-32 xl:w-40' />
                        </Link>
                    </div>
                </div>
                <div className='block md:hidden mt-12'>
                    <img src={images.mapmobile} alt="" />
                </div>
                <div className='block md:hidden bg-brown h-[70vh]'>
                    <div className='flex flex-col items-center justify-center gap-7 h-full'>
                        <h1 className='text-[30px]  font-bold tracking-wide text-white' >Join Our Network</h1>
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-[18px] text-white'>For QSRs, Restaurants, and Retailers</p>
                            <button className='bg-white text-black text-[15px] font-bold px-14 py-3 rounded-[10px] tracking-wider'>BECOME A PARTNER</button>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden bg-bottom-mobile h-[70vh] rounded-b-[40px]'>
                     <div className='flex flex-col items-center justify-center gap-4 h-full'>
                     <h1 className='text-[30px]  font-bold tracking-wide w-[60%] text-center'>Download the App Now</h1>
                    <div className='flex items-center gap-3'>
                        <Link to={"/"}>
                            <img src={images.googleblack} alt="" className='w-36' />
                        </Link>
                        <Link to={"/"}>
                            <img src={images.appblack} alt="" className='w-36' />
                        </Link>
                    </div>
                     </div>
                </div>
            </section>
        </>
    )
}

export default Delivery