import React from 'react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'

export default function Contact() {
  return (
<div className="container my-24 px-6 mx-auto bg-almost-white">
<Head>
<title>Contact Us | Picnic SoFlo</title>
</Head>
<section className="mb-32 text-gray-800 bg-almost-white">
  <div className="flex flex-wrap bg-almost-white">
    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Contact us</h2>
      <p className="text-gray-500  text-xl mb-6">
      We are excited you are considering booking a picnic with us or have questions about our services! Please submit your message and we will be in touch with you within 48 hours of receiving your request.
      </p>
      <p className='text-gray-500 text-xl mb-6'>Before anything, be sure to check our <Link className='underline' href='/faq-s'>Frequently Asked Questions</Link> page.</p>
      
      <p className="text-gray-500 mb-6 ">If you don’t hear from us soon enough, please check spam folder or email us directly.</p>
      <div className="mb-8 sm:mb-0 text-gray-500">
        <h3 className=" font-medium mb-2">Email Us:</h3>
        <ul>
            <li className="mb-2"><a href="mailto:picnicsoflo7@gmail.com" className='underline'>picnicsoflo7@gmail.com</a></li>
        </ul>
        </div>
      {/* <p className="text-gray-500 mb-2">Servings : Broward and Miami-Dade County</p> */}
    </div>
    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      <ContactForm/>
    </div>
  </div>
</section>
</div>
)
}


{/* <div className=' max-w-screen-xl lg:w-7/12 lg:mt-7 m-auto p-10 mb-10 text-center'>
<Head>
<title>Contact Us | Picnic SoFlo</title>
<link rel="icon" href="/favicon.ico" />
</Head>
<div className="max-w-3xl mx-auto px-4">
<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">Get in touch</h1>
<p className=' mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>We are excited you are considering booking a picnic with us or have questions about our services! Please submit your message below and we will be in touch with you within 48 hours of receiving your request.</p>
<div className='flex items-center mt-2 self-start'>
<Link className=' text-center text-gray-800 text-2xl ' href='/faq-s'>Frequently Asked Questions-------------</Link>
  {/* <p className=' text-gray-500 text-2xl mx-10'>Thank You!</p> */}
// </div>
// </div>
{/* <div className='pt-10'/> */}
{/* <ContactForm/> */}
// </div> */}