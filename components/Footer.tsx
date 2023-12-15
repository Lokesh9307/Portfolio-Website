'use client'

import Link from 'next/link';
import React, { use, useState } from 'react'
import { FaMapMarkerAlt,FaArrowAltCircleUp,FaRegHeart   } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import '../app/index.css'

const Footer = () => {
  const [color,setColor] = useState(false);
  const [count,setCount] = useState(0);
  const [like,setLike] = useState(false)

 

  const LikeCount = ()=>{
    setColor(!color) 
    setCount(count + 1)
    
  }

  const buttonClick = color?'text-black':'text-red-500';
  return (
    <>
      <footer className='bg-[#212529] w-full h-auto p-5 flex justify-around flex-wrap gap-8'>
        <div className='flex flex-col gap-5 border-r-2 border-slate-500/30 p-2'>
          <h1 className='text-center text-xl text-white'>❤️ Thank you for visit ❤️</h1>
          <div className='flex text-white flex-col font-light'>
            <p className='text-slate-200'>Email:</p>
            <p>lokeshumredkar2003@gmail.com</p>
          </div>
          <div className='flex flex-col text-slate-200'>
            <h2 className='flex items-center gap-2'><FaMapMarkerAlt className='text-red-700' />India</h2>
            <h3>Nagpur, Maharashtra</h3>
          </div>
        </div>
        <hr />

        <div className=''>
         <p className='self-center justify-self-center text-center text-slate-300'> &copy; All rights reserve by Lokesh Umredkar 2023</p>
        </div>
        <hr />

        
        <div className='flex flex-col gap-1 justify-end items-center w-60'>
          <Link href='/'><FaArrowAltCircleUp className='text-purple-500/80 hover:text-purple-500 text-3xl' /></Link>
          <span className='text-slate-500/70'>Go To Top</span>
          {/* <input type="checkbox" name="" id="" className='heart-checkbox text-5xl w-10 h-10' /> */}
        </div>
      
      </footer>
    </>
  )
}

export default Footer