import React, { useState, useEffect } from 'react';
import * as images from "../../assets";
import { NavLink, Link } from 'react-router-dom';

const links = [
    { name: 'Home', path: '/' },
    { name: 'How it Works', path: '/', id: 'howitworks' },
    { name: 'Delivery Zone', path: '/', id: 'delivery-zone' },
    { name: 'Partners', path: '/', id: 'delivery-zone' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowHeader(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setToggle(false);
    };

    const handleNavLinkClick = (link) => {
        if (link.id) {
            scrollToSection(link.id);
        } else if (link.path === '/contact' || link.path === '/') {
            scrollToTop();
        }
    };

    return (
        <>
            <header className={`fixed bg-white top-0 left-0 w-full px-4 md:px-10 z-30 transition-transform duration-300 ${showHeader ? '' : '-translate-y-full'}`}>
                <div className='container mx-auto px-0 md:px-4 lg:px-5 xl:px-10 py-4 flex justify-between w-full items-center'>
                    <div className='flex gap-5 md:gap-5 lg:gap-10 xl:gap-20 items-center'>
                        <Link to="/" className=''>
                            <img src={images.logo} alt="Logo" className='w-24 md:w-28 lg:w-24 xl:w-28' />
                        </Link>
                        <div className='hidden lg:flex items-center'>
                            <ul className='list-none lg:flex lg:gap-6 xl:gap-16 justify-between items-center'>
                                {links.map((link, index) => (
                                    <li key={index} className='text-nowrap lg:text-lg xl:text-xl font-bold'>
                                        <NavLink to={link.path} onClick={() => handleNavLinkClick(link)}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='lg:flex items-center gap-5 hidden'>
                        <Link to={"/"}>
                            <img src={images.googleblack} alt="Google" className='lg:w-32 xl:w-40' />
                        </Link>
                        <Link to={"/"}>
                            <img src={images.appblack} alt="App" className='lg:w-32 xl:w-40' />
                        </Link>
                    </div>
                    <div className="lg:hidden flex justify-end items-center">
                        <img
                            src={toggle ? images.close : images.menu}
                            alt="menu"
                            className="w-10 object-contain"
                            onClick={() => setToggle(prev => !prev)}
                        />
                    </div>
                    {toggle && (
                        <div className="lg:hidden absolute top-[17.5vh] md:top-[18.5vh] right-0 w-full px-1 z-[120]">
                            <div className="p-6 bg-black text-white shadow-2xl mx-4 my-2 rounded-xl sidebar">
                                <ul className='items-center gap-3 flex flex-col justify-center'>
                                    {links.map((link, index) => (
                                        <li key={index} className='inline-block text-lg font-medium mx-4'>
                                            <Link to={link.path} onClick={() => { setToggle(false); handleNavLinkClick(link); }}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex items-center justify-end gap-3 md:gap-5 mt-5'>
                                    <Link to={"/"}>
                                        <img src={images.googlewhite} alt="Google" className='w-40 md:w-48' />
                                    </Link>
                                    <Link to={"/"}>
                                        <img src={images.appwhite} alt="App" className='w-40 md:w-48' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
