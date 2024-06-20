import React from 'react'
import * as images from "../../assets"
import {Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <section className='md:px-6 lg:px-10'>
                <div className='bg-hero-large h-[70vh]  md:h-[80vh] lg:h-[90vh] rounded-2xl md:rounded-3xl flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-white font-bold text-4xl md:text-5xl xl:text-6xl text-center tracking-wider'>Fast, Reliable Drone Deliveries</h1>
                    <p className='text-white font-semibold text-lg md:text-xl lg:text-xl xl:text-3xl tracking-wide text-center'>Get your orders delivered in minutes</p>
                    <div className='flex items-center justify-center gap-3 md:gap-5 '>
                        <Link to={"/"}>
                            <img src={images.googlewhite} alt="" className='w-40 md:w-48' />
                        </Link>
                        <Link to={"/"}>
                            <img src={images.appwhite} alt="" className='w-40 md:w-48' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero