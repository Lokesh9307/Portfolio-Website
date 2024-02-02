import React from 'react'
import '../app/index.css'
import Link from 'next/link'
import Image from 'next/image';
import HeroImg from '../utils/hero.png'
import HeroHand from '../utils/Hand.png'
import ContactLink from './ContactLink';
// import Resume from '../public/resume.pdf';

const Hero:React.FC = () => {

  return (
    <>
      <main className=' bg-[#212529] w-full lg:h-[86vh] flex justify-between items-center py-4 overflow-hidden'>
        <section className='relative ml-0 lg:flex object-none'>
          <Image src={HeroImg} alt='hero' width={440} className='lg:object-contain lg:h-full lg:mt-[0rem] mt-[15rem]'></Image>
        </section>
        <section className='text-white flex wordAnimate flex-col lg:gap-10 w-[50vw] text-center justify-center items-center z-10 gap-8 h-auto'>
          <h1 className='lg:text-5xl text-3xl w-[100vw]'>Hey it's Lokesh 👋</h1>
          <h2 className='lg:text-2xl text-xl'>I am, <br /><br /></h2>
          <ContactLink />
          <div className='flex flex-col items-center gap-1'>
            <a href="./pdf/Resume.pdf" target='blank' className='bg-black/50 p-2 text-xl rounded-lg border-2 border-green-500/50 hover:border-green-500'>Resume</a>
          </div>
        </section>
        <section className='lg:block '>
          <Image src={HeroHand} alt='hand' width={353} className='lg:object-contain lg:z-[-999] lg:mb-0 mb-[10rem]'></Image>
        </section>
      </main>
      <hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1' />
    </>
  )
}

export default Hero