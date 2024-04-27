'use client'
import React from 'react'
import '../app/index.css'
import Link from 'next/link'
import ContactLink from './ContactLink';
import { IoLocation } from "react-icons/io5";



const Hero: React.FC = () => {
  return (
    <>
      <main className=' bg-[#212529] w-full lg:h-[86vh] flex justify-between items-center py-4 overflow-hidden lg:px-10 px-6 lg:flex-row flex-col' id='showcase__container'>
        <section className='flex flex-col justify-between lg:items-start items-center'>
          <div>
            <h1 className='lg:text-4xl text-xl text-[#f1faee] font-semibold '>
              Lokesh Umredkar 😎
            </h1>
            <h1 className='text-white/30 lg:text-5xl text-2xl font-bold shining-text'>
              Full Stack Developer
            </h1>
          </div>
          <div className='lg:w-[90%] w-full text-md text-[#f1faee]/70 p-4 rounded-xl lg:mt-10 mt-4 '>
            <p className='text-sm text-justify'>
              I'm Lokesh, currently studying Electronics and Telecommunication Engineering at Yeshwantrao Chavan College of Engineering. I have a strong passion for coding and web development, using skills in HTML, CSS, JavaScript, React, and Node.js to create innovative web projects. I enjoy the challenge of learning new technologies and thrive on building user-friendly websites and web applications. 
            </p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Link href='/pdf/Lokesh Umredkar Resume.pdf' className='text-center flex justify-center items-center text-xl border-2 border-[#c7f9cc] w-[10rem] p-3 rounded-lg text-green-400 mt-6 hover:border-green-600'>Resume</Link>
              <p className='flex items-center justify-center text-white gap-2'><IoLocation className='text-red-400'/><span>Maharashtra, India</span></p>
          </div> 
        </section>
          <div>
          <ContactLink/>
          </div>
      </main>
      <hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1' />
    </>
  )
}

export default Hero