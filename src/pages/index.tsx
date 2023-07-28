import Head from 'next/head';
import Link from 'next/link'
import ImageCarousel from '@/components/ImageCarousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import img11 from '../../public/images/carousel/pinkPicnic.jpg'
import img12 from '../../public/images/carousel/greenPicCar.jpg'
import img13 from '../../public/images/carousel/bohoCarousel.jpg'

export default function Home() {

  return (
    <div className='bg-almost-white'>
    <Head><title>Picnic SoFlo</title>
</Head>
    <div className='flex items-center justify-center h-[620px] mb-12 sm:bg-fixed bg-center sm:bg-cover sm:custom-img custom-img bg-[length:1000px_650px]'>
    <div className='p-5 text-white z-[2] mt-[-10rem]'>
    <h2 className='text-5xl font-bold'>Picnic SoFlo</h2>
      <p className='py-5 text-xl'> Indulge in the luxury you deserve</p>
      <Link href='/styles' className='flex items-center h-fit py-4 px-24 bg-[#b07560] hover:bg-[#d6b0a3] rounded-[32px] gap-[12px]'>
                Check Out Styles
            </Link>
    </div>
    </div>

    <div className='grid sm:grid-cols-2 gap-16 p-4 bg-almost-white'>
      <div>
        <div className='border bg-peach dark:text-black'><h1 className=' text-center pb-5 mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4x'>How it Works </h1></div>
      <div className=' w-8/12 sm:w-5/12 flex flex-col max-w-screen-xl mx-auto '>
        <ul className='mt-4 max-w-2xl '>
          <li className='mb-2 text-black'><h1 className='font-bold text-2xl'>Step 1-Booking</h1>
              <p className='text-xl text-gray-500 lg:mx-auto'>Fill out the Book Now form with details on date, location, # of guests, picnic style and more! This will allow us to contact you and confirm availability.</p></li>
          <li className='mb-2 text-black'><h1 className='font-bold text-2xl'>Step 2-Confirmation</h1>
          <p className='text-xl text-gray-500 lg:mx-auto'>Once we receive your inquiry, we will contact you to discuss picnic selections. This includes payment details and additional arrangements.</p></li>
          <li className='mb-2 text-black'><h1 className='font-bold text-2xl'>Step 3- Let&apos;s Picnic</h1>
          <p className='text-xl text-gray-500 lg:mx-auto'>Once you are booked, sit back & relax until the day of your picnic. If you have any questions contact us!</p></li>
        </ul>
      </div>
      </div>

      <div className=' flex items-center justify-center mb-10 '>
      {/* <ImageCarousel
images={images}/> */}
        <div className='max-w-full h-auto'>
          <Carousel showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true} dynamicHeight={false} showStatus={false}  autoPlay>
      <div>
        <Image src={img13} alt='' width={600} height={400} className='sm:h-[530px]'/>
      </div>
      <div>
        <Image src={img11} alt='' width={600} height={400} className='sm:h-[530px]'/>
      </div>
      <div>
        <Image src={img12} alt='' width={600} height={400} className='sm:h-[530px]'/>
      </div>
    </Carousel>
        </div>
      </div>

    </div>
    </div>
  )
}
