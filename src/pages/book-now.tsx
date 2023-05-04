import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import BookNowForm from '@/components/BookNowForm'

export default function BookNow() {

  return (
    <div className='py-12 bg-almost-white'>
    <Head>
    <title>Book Now | Picnic SoFlo</title>
    </Head>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0 text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Book Now
            </h2>
          </div>
        </div>
        <BookNowForm/>
      </div>
    </div>
  )
}