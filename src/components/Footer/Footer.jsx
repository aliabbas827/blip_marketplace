import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import * as images from "../../assets"
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // setToggle(false);
  };
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold value as needed
  });

  useEffect(() => {
    const textElements = Array.from(sectionRef.current.children);

    const fadeIn = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 0,
        y: "100%",
        scale: 0.1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    if (intersection && intersection.intersectionRatio >= 0.5) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [intersection]);
  return (
    <footer className='py-6' ref={sectionRef}>
      <div className='md:w-[80%] w-full m-auto'>
        <div className='flex flex-col gap-3 items-center'>
          <div>
            <img src={images.logo} alt="" className='w-24 md:w-28 lg:w-24 xl:w-28' />
          </div>
          <a href='https://www.instagram.com/blipdelivery?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==' target="_blank" className='bg-[#252525] rounded-full h-[40px] p-2.5 w-[40px] flex justify-center items-center mt-5'>
            <img src={images.insta} alt="" className='w-full h-[100%] object-cover' />
          </a>
          <p className='text-center px-2'>All Blip Delivery drone operators are FAA Part 107 certified and adhere to all FAA regulations and safety guidelines. Our drones are equipped with advanced safety features and are maintained to the highest standards. Blip Delivery is committed to ensuring secure and efficient deliveries, prioritizing the safety of our customers and communities. For more information about our safety practices and policies, please visit our Safety and Compliance page.</p>
          <br />
          <p className='text-center px-2'> © 2024 BLIP DELIVERY INC. All Rights Reserved. | <Link to={"/privacy-policy"} onClick={scrollToTop}>Privacy Policy</Link> | <Link to={"/terms-of-service"} onClick={scrollToTop}>Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer