import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import img2 from '../../public/images/profiles/businessPicture.jpg'
import img3 from '../../public/images/profiles/bellaPFL.png'
import img4 from '../../public/images/profiles/mark.jpeg'

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: {
    url: string;
    alt: string;
    width:number;
    height:number;
  };
};


export default function OurStory() {

  const team: TeamMember[] = [
    {
      name: 'Isabella',
      role: 'Picnic Organizer',
      bio: 'I have always loved spending time outdoors and enjoying delicious food, so planning picnics was a natural fit for me. I enjoy creating beautiful and comfortable settings for our clients to relax and enjoy themselves. Seeing our clients satisfaction and happiness motivates us to work hard and continue to provide memorable outdoor experiences for family, friends, and loved ones.',
      photo: {
        url: '/../public/images/profiles/bellaPFL.png',
        alt: 'Photo of Isabella',
        width:150,
        height:150
      }
    },
    {
      name: 'Mark',
      role: 'Picnic Planner / Web Developer',
      bio: "I am a recent graduate who took some time to partner up with Isabella in a spectacular idea to start a picnic business. I always had some passion for technology and the great outdoors. Spending the hot summers in parks and tinkering with computers during dusk. Being able to assist as a planner and also create this website to be publicly displayed for our clients brings great joy to what I do. While on this journey of finding growth in this business, I'm also working towards a full-time job as a Web Developer.",
      photo: {
        url: '/../public/images/profiles/mark.jpeg',
        alt: 'Photo of Mark',
        width:145,
        height:150
      }
    }
  ];


  return (
<div>
<Head>
    <title>Our Story | Picnic SoFlo</title>
    </Head>
    <section className="py-12 bg-almost-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            {/* <h2 className="text-base text-gray-800 font-semibold tracking-wide uppercase">Our Story</h2> */}
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              A Passion for Picnics
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our picnic business started from a shared passion for spending time outdoors and enjoying delicious food. We both noticed that there was a gap in the market for high-quality and beautiful picnic experiences, so we decided to start our own business to fill that niche.
            </p>
          </div>
          {/* <div className="mt-10">
            <div className="lg:flex justify-center gap-2">
              {team.map((member) => (
                <div key={member.name} className="max-w-md w-full lg:max-w-2xl lg:w-1/2 py-6 px-8 bg-almost-white shadow-lg rounded-lg">
                  <div className="flex justify-center md:justify-end -mt-4">
                    <Image src={member.photo.url} alt={member.photo.alt} width={member.photo.width} height={member.photo.height} className="rounded-full border-solid border-4 border-white" />
                  </div>
                  <div>
                    <h2 className="text-black text-2xl font-semibold">{member.name}</h2>
                    <p className="mt-2 text-gray-500">{member.role}</p>
                    <p className="mt-4 text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="mt-10">
            <div className="lg:flex justify-center gap-2">
              <div className="max-w-md w-full lg:max-w-2xl lg:w-1/2 py-6 px-8 bg-almost-white shadow-lg rounded-lg">
                <div className="flex justify-center md:justify-end -mt-4">
                  <Image src={img3} alt = 'Photo of Isabella' width={150} height={150} className="rounded-full border-solid border-4 border-white"></Image>
                </div>
                <div>
                <h2 className="text-black text-2xl font-semibold">Isabella</h2>
                    <p className="mt-2 text-gray-500">Picnic Organizer</p>
                    <p className="mt-4 text-gray-500">I have always loved spending time outdoors and enjoying delicious food, so planning picnics was a natural fit for me. I enjoy creating beautiful and comfortable settings for our clients to relax and enjoy themselves. Seeing our clients satisfaction and happiness motivates us to work hard and continue to provide memorable outdoor experiences for family, friends, and loved ones.</p>
                </div>
              </div>
              <div className="max-w-md w-full lg:max-w-2xl lg:w-1/2 py-6 px-8 bg-almost-white shadow-lg rounded-lg">
                <div className="flex justify-center md:justify-end -mt-4">
                  <Image src={img4} alt = 'Photo of Mark' width={145} height={150} className="rounded-full border-solid border-4 border-white"></Image>
                </div>
                <div>
                <h2 className="text-black text-2xl font-semibold">Mark</h2>
                    <p className="mt-2 text-gray-500">Picnic Planner / Web Developer</p>
                    <p className="mt-4 text-gray-500">I am a recent graduate who took some time to partner up with Isabella in a spectacular idea to start a picnic business. I always had some passion for technology and the great outdoors. Spending the hot summers in parks and tinkering with computers during dusk. Being able to assist as a planner and also create this website to be publicly displayed for our clients brings great joy to what I do. While on this journey of finding growth in this business, I&apos;m also working towards a full-time job as a Web Developer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-10 flex justify-center m-auto max-w-md w-full lg:max-w-2xl lg:w-1/2  px-8'>
          <Image src={img2} alt='' />
        </div>
      </section>
      </div>
)
}