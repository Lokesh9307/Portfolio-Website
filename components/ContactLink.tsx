import Link from 'next/link'
import React from 'react'
import { FaFacebookF ,FaInstagram,FaLinkedinIn ,FaGithub } from "react-icons/fa";

const ContactLink = () => {
    const ContactLinks = [
        {name:'Facebook',link:'https://instagram.com',icon:<FaFacebookF  className='text-blue-500 text-3xl bg-transparent'/>,color:'blue-slate-500'},
        {name:'Instagram',link:'https://instagram.com',icon:<FaInstagram className='text-pink-500 text-3xl bg-transparent'/>,color:'pink-slate-500'},
        {name:'LinkedIn',link:'https://instagram.com',icon:<FaLinkedinIn  className='text-blue-500 text-3xl bg-transparent'/>,color:'blue-slate-500'},
        {name:'GitHub',link:'https://instagram.com',icon:<FaGithub className='text-white text-3xl bg-transparent'/>,color:'black'},
      ]
    
  return (
    <div className='mx-10 lg:mb-5 mb-0 bg-transparent'>
          <section className='flex lg:gap-5 font-bold gap-2 bg-transparent'>
              {ContactLinks.map((items,id)=>(
                <Link className='tooltip flex items-center gap-2 flex-col bg-transparent' href={items.link}><span className='hover:bg-[#343a40c0] p-2 rounded-lg bg-transparent'>{items.icon}</span> <span className={`tooltip-item opacity-0  p-1 rounded-md  bg-blur-md `}>{items.name}</span> </Link>
              ))}
          </section>
      </div>
  )
}

export default ContactLink