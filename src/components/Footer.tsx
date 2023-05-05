import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
return (
    // gray-800
    <footer className="bg-peach text-black">
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-[300px] ">
        <div className="mb-8 sm:mb-0">
        <Link href='/book-now' className="underline  text-lg font-medium mb-2">Book With Us</Link>
        <p className="">Plan the perfect picnic with us! We provide everything you need to make your picnic memorable</p>
        </div>
        <div className="mb-8 sm:mb-0">
        <h3 className="text-lg font-medium mb-2">Email Us:</h3>
        <ul>
            <li className="mb-2"><a href="mailto:picnicsoflo7@gmail.com" className='underline'>picnicsoflo7@gmail.com</a></li>
        </ul>
        </div>
        <div className="mb-8 sm:mb-0">
        <h3 className="text-lg font-medium mb-2">Follow our socials</h3>
        <ul>
            {/* <li className="mb-2"><a href="https://www.tiktok.com/@bellaaristizabal?lang=en" target="_blank" rel="noopener noreferrer"><FaTiktok className='text-2xl cursor-pointer hover:text-yellow-600'/></a></li> */}
            <li><a href="https://www.instagram.com/picnicsoflo/" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/></a></li>
        </ul>
        </div>
    </div>
    </div>
    {/* <div className="bg-gray-700 py-4">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">&copy; 2023 PicnicPlanner. All rights reserved.</p>
    </div>
    </div> */}
</footer>

)
}
