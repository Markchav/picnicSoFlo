import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";



interface ImageCarouselProps {
  images: {
    src: string,
    alt: string;
  }[];
}


export default function ImageCarousel({images}: ImageCarouselProps) {
  return (
    <div className='max-w-full h-auto'>
<Carousel showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true} dynamicHeight={false} showStatus={false} autoPlay>
      {images.map((image, index)=> (
        <div key={index} className=''>
        <Image src={image.src} alt={image.alt} width={600} height={400} className='sm:h-[530px]'/>
      </div>     
      ))}
    </Carousel>
    </div>
    
  )
}


