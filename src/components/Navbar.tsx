'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
import  img2 from '../../public/images/logo.jpg'
import { useRouter } from 'next/router'

export default function Navbar() {

    const inactiveLink='p-2 border-b-2 border-transparent text-black hover:text-gray-800 dark:hover:text-almost-white hover:border-almost-white mx-1.5 sm:mx-6';
    const activeLink=inactiveLink+' text-gray-800 dark:text-black border-b-black';
    const router = useRouter();
    const {pathname} = router;

    const [nav,setNav] = useState(false);
    const handleNav = ()=> {
        setNav(!nav)
    }

  return (
        <nav className='fixed w-full left-0 top-0 z-10 shadow dark:bg-peach'>
            <div className=' flex items-center justify-between m-auto p-4 text-gray-600 capitalize dark:text-gray-300'>
            <Link href='/'>
                <div className='flex items-center justify-center mt-2'>
                <Image src={img2} alt='picnic logo' className='h-20 w-20 cursor-pointer rounded-full' />
                </div>
                
            </Link>
            <ul className='hidden sm:flex px-10 items-center justify-between'>
                <li>
                    <Link className={pathname === '/' ? activeLink : inactiveLink} href='/'>HOME</Link>
                </li>
                <li>
                    <Link className={pathname.includes('/our-story') ? activeLink : inactiveLink} href='/our-story'>OUR STORY</Link>
                </li>
                <li>
                    <Link className={pathname.includes('/styles') ? activeLink : inactiveLink} href='/styles'>STYLES</Link>
                </li>
                <li>
                    <Link className={pathname.includes('/book-now') ? activeLink : inactiveLink} href='/book-now'>BOOK NOW</Link>
                </li>
                <li >
                    <Link className={pathname.includes('/faq-s') ? activeLink : inactiveLink} href='/faq-s'>FAQS</Link>
                </li>
                <li >
                    <Link className={pathname.includes('/contact') ? activeLink : inactiveLink}  href='/contact'>CONTACT</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:hidden block z-10'>
                {
                    nav ? <AiOutlineClose className='text-black'  size={20}/> : <AiOutlineMenu className='text-black' size={20}/>
                }
                
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-peach text-center ease-in duration-300'
            :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'} >
            <ul className='px-10 items-center justify-between'>
                <li onClick={handleNav} className={pathname === '/' ? activeLink : inactiveLink}>
                    <Link href='/'>HOME</Link>
                </li>
                <li onClick={handleNav} className={pathname.includes('/our-story') ? activeLink : inactiveLink}>
                    <Link href='/our-story'>OUR STORY</Link>
                </li>
                <li onClick={handleNav} className={pathname.includes('/styles') ? activeLink : inactiveLink}>
                    <Link href='/styles'>STYLES</Link>
                </li>
                <li onClick={handleNav} className={pathname.includes('/book-now') ? activeLink : inactiveLink}>
                    <Link href='/book-now'>BOOK NOW</Link>
                </li>
                <li onClick={handleNav} className={pathname.includes('/faq-s') ? activeLink : inactiveLink}>
                    <Link href='/faq-s'>FAQS</Link>
                </li>
                <li onClick={handleNav} className={pathname.includes('/contact') ? activeLink : inactiveLink}>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
  )
}