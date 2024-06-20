import React, { useState } from 'react'
import * as images from "../../assets"
import { NavLink, Link } from 'react-router-dom'

const links = [
    { name: 'Home', path: '/' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Delivery Zone', path: '/delivery-zone' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
]

const Header = () => {
    const getActiveStyle = ({ isActive }) => isActive ? 'border-b border-black border-b-2 pb-1' : '';
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header className='container mx-auto'>
                <div className='px-0 md:px-4 lg:px-5 xl:px-10 py-4 flex justify-between items-center'>
                    <div className='flex gap-5 md:gap-5 lg:gap-10 xl:gap-20 items-center'>
                        <NavLink to="/" className='flex flex-col items-center gap-1' >
                            <img src={images.logo} alt="" className='w-24 md:w-28 lg:w-24 xl:w-28' />
                            <h1 className='tracking-wider text-[12px] md:text-sm lg:text-[12px] xl:text-sm font-bold'>MARKETPLACE</h1>
                        </NavLink>
                        <div className='hidden lg:flex items-center '>

                            <ul className='list-none lg:flex lg:gap-6 xl:gap-16 justify-between items-center hidden'>
                                {links.map((link, index) => (
                                    <li key={index} className='text-nowrap lg:text-lg xl:text-xl font-bold'>
                                        <NavLink to={link.path} className={({ isActive }) => getActiveStyle({ isActive })}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='lg:flex items-center gap-5 hidden'>
                        <Link to={"/"}>
                            <img src={images.googleblack} alt="" className='lg:w-32 xl:w-40' />
                        </Link>
                        <Link to={"/"}>
                            <img src={images.appblack} alt="" className='lg:w-32 xl:w-40' />
                        </Link>
                    </div>
                    <div className="lg:hidden flex justify-end items-center">
                        <img
                            src={toggle ? images.close : images.menu}
                            alt="menu"
                            className="w-10 object-contain"
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    </div>
                    {toggle && (
                        <div className="lg:hidden absolute top-[17.5vh] md:top-[18.5vh] right-0 w-full px-1 z-[120]">
                            <div className="p-6 bg-black text-white shadow-2xl mx-4 my-2 rounded-xl sidebar">
                                <ul className=' items-center gap-3 flex flex-col justify-center'>
                                    {
                                        links.map((link, index) => (
                                            <li key={index} className='inline-block text-lg font-medium mx-4'>
                                                <Link to={link.path} onClick={() => setToggle(false)}>{link.name}</Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                                <div className='flex items-center justify-end gap-3 md:gap-5 mt-5'>
                                    <Link to={"/"}>
                                        <img src={images.googlewhite} alt="" className='w-40 md:w-48' />
                                    </Link>
                                    <Link to={"/"}>
                                        <img src={images.appwhite} alt="" className='w-40 md:w-48' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </header>
        </>
    )
}

export default Header