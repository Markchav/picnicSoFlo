import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/LayoutFaq';
import data from '../../public/data.json'


export default function Faq() {

  const [active,setActive] = useState([false,false,false,false,false,false,false,false,false,false,false]);

  const isSomeActive = active.some((element)=> element);

  const handleClick = ()=> {
    isSomeActive ? setActive([false,false,false,false,false,false,false,false,false,false,false]) : 
    setActive([true,true,true,true,true,true,true,true,true,true,true]);
  }

  return (
    <div className=''>
      <Head>
    <title>FAQS | Picnic SoFlo</title>
    </Head>
    <div className='grid place-items-center w-full pt-10 pb-10 bg-almost-white text-black'>
    <Layout
    handleClick={handleClick}
    isSomeActive={isSomeActive}
    data={data}
    turn={active}
    setTurn={setActive}
    />
    </div>
    </div>
  )
}