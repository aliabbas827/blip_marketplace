import ContactForm from "@/components/ContactForm/ContactForm"
import * as images from "../../assets"
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section className="">
        <div className='bg_contact md:h-[60vh] h-[40vh]'>
        </div>
        <div className='md:container md:mx-auto pb-16'>
          <div className='md:mt-[-120px] mt-[-60px] flex md:flex-row flex-col justify-center md:gap-3 gap-10'>
            <div className='md:w-[40%] w-full flex flex-col md:items-start items-center gap-6'>
              <h1 className='uppercase tracking-[8px] font-semibold text-lg'>Contact</h1>
              <h1 className='capitalize font-bold md:text-5xl text-3xl'>Let's get in touch</h1>
              <div className='flex md:items-start items-center md:flex-row flex-col gap-3 mt-5'>
                <img src={images.location} alt="" className="w-6" />
                <p className="font-medium text-center md:text-start">4136 Del Rey Avenue. Marina Del Rey, <br /> CA 90292</p>
              </div>
              <div className='flex md:items-start items-center md:flex-row flex-col gap-3 mt-10 md:mt-6'>
                <img src={images.mail} alt="" className="w-6" />
                <p className="font-medium">sales@blip.delivery</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs