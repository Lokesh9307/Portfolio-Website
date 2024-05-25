'use client'
import React from 'react'
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import '../app/index.css'

const Footer = () => {
  return (
    <>
      <footer className='w-full h-auto p-4 bg-[#212529] flex flex-col gap-8'>
        <section className='flex items-center justify-evenly gap-5'>
          {/* stack */}
          <div className='bg-slate-500/40 w-full flex flex-col items-center justify-center rounded-lg '>
            <div className='text-xl text-white/60'>
              <p>Stack Use</p>
            </div>
            <div className='text-2xl text-white flex gap-5 p-2'>
              <FaReact />
              <FaGithub />
              <SiTailwindcss />
              <TbBrandNextjs />
            </div>
          </div>
          <div className='bg-slate-500/40 p-4 rounded-xl text-white w-full'>
            <p>About</p>
            <h2>lokeshumredkar2003@gmail.com</h2>
            <h2>+91-9307406834</h2>
            <h2>📍India</h2>
          </div>
        </section>
        <h2 className='text-white/70 text-center'>
          &copy; All rights reserve by Lokesh Umredkar
        </h2>
      </footer>
    </>
  )
}

export default Footer