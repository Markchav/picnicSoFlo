import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

  type PicnicDescription = {
    title:string;
    description:string;
    photo: {
      url: string;
      alt: string;

    };
  };

export default function Styles() {
  const picnics: PicnicDescription[] = [
    {title:'Classic Boho $100',
      description:'Styled picnic setting with throwns/blankets, assortment of white/ivory pillows and cushions, low white-washed table, brown table runner, placemats, dinner plates, cloth napkins, gold flatware, drinkware, candles, chalkboard + custom message (optional), choice of juices, ice bucket',
      photo: {
        url:'/../public/images/styledPicnics/classicBohoPic.jpg',
        alt:''
      }
    },
    {
      title:'Pretty in Pink $120',
      description:'Styled picnic setting with throwns/blankets, assortment of pink/ivory pillows and cushions, low white-washed table, pink table runner, placemats, dinner plates, cloth napkins, gold flatware, drinkware, candles, fresh flower arrangements, chalkboard + custom message (optional), choice of juices, and ice bucket',
      photo: {
        url:'/../public/images/styledPicnics/PrettyInPink.jpg',
        alt:''
      }
    },
    {
      title:'Love is in the Air $120',
      description:'Styled picnic setting with throwns/blankets, assortment of red/ivory pillows and cushions, low white-washed table, red table runner, placemats, dinner plates, cloth napkins, gold flatware, drinkware, candles, small rose arrangements and decor, chalkboard + custom message (optional), choice of juices, and ice bucket',
      photo: {
        url:'/../public/images/styledPicnics/LoveIsInTheAir.jpg',
        alt:''
      }
    },
    {
      title:'Green Dream $120',
      description:'Styled picnic setting with throwns/blankets, assortment of green/ivory pillows and cushions, low white-washed table, green table runner, placemats, dinner plates, cloth napkins, gold flatware, drinkware, candles, fresh flower arrangements, chalkboard + custom message (optional), choice of juices, and ice bucket',
      photo: {
        url:'/../public/images/styledPicnics/greenDreamPic.jpg',
        alt:''
      }
    },
    {
      title:' Spring Pastels $120',
      description:'Styled picnic setting with throwns/blankets, assortment of blue/white pillows and cushions, low white-washed table, pink table runner, placemats, dinner plates, linen napkins, gold flatware, drinkware, candles, colorful flower details, white boho umbrella (optional), chalkboard + custom message (optional), choice of juices, and ice bucket',
      photo: {
        url:'/../public/images/carousel/pinkPicnic.jpg',
        alt:''
      }
    },
    {
      title:'The Blue Lagoon $120 (Coming Soon) ',
      description:'Styled picnic setting with throwns/blankets, assortment of blue/light blue pillows and cushions, low white-washed table, blue table runner, placemats, dinner plates, linen napkins, flatware, drinkware, candles, small flower details, white boho umbrella (optional), chalkboard + custom message (optional),  choice of juices, and ice bucket',
      photo: {
        url:'/../public/images/styledPicnics/comingSoon.png',
        alt:''
      }
    },
  ];

  return (
    <div className='py-12 bg-almost-white'>
    <Head>
    <title>Styles | Picnic SoFlo</title>
    </Head>
    <div className='text-center '>
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">Styles</h2>
    </div>
  <div className='flex flex-wrap'>
    {picnics.map((picnic)=> (
    <div key={picnic.title} className='w-full md:w-1/2 lg:w-1/3 p-4'>
      <div className='bg-white rounded-lg shadow-lg'>
        <Link href='/book-now'><Image src={picnic.photo.url} alt={picnic.photo.alt} width={600} height={400} className="rounded-t-lg w-full h-[320px] sm:h-[350px]"/></Link>
          <div className="p-4">
          <h2 className="text-black text-lg font-medium mb-2 grid grid-flow-col">{picnic.title} <p className='text-end'>Default time : 2 hrs</p></h2>
          <p className='text-gray-500'>Picnic Includes:</p>
          <p className="text-gray-500 tracking-wide">{picnic.description}</p>
          </div>
      </div>
    </div>
  ))}
  </div>
</div> 
  )
}