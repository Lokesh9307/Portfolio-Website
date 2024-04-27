import Link from 'next/link'
import React from 'react'
import { FaFacebookF ,FaInstagram,FaLinkedinIn ,FaGithub } from "react-icons/fa";

const ContactLink = () => {
    const ContactLinks = [
        
        {name:'LinkedIn',link:'https://www.linkedin.com/in/lokesh-umredkar-2a0961243/?trk=people-guest_people_search-card&originalSubdomain=in',icon:<FaLinkedinIn  className='text-blue-500 text-3xl bg-transparent'/>,color:'blue-slate-500'},
        {name:'GitHub',link:'https://github.com/Lokesh9307',icon:<FaGithub className='text-white text-3xl bg-transparent'/>,color:'black'},
        {name:'Facebook',link:'https://www.facebook.com/lokesh.umredkar.967/',icon:<FaFacebookF  className='text-blue-500 text-3xl bg-transparent'/>,color:'blue-slate-500'},
        {name:'Instagram',link:'https://www.instagram.com/itz_lokesh_02/?hl=bg',icon:<FaInstagram className='text-pink-500 text-3xl bg-transparent'/>,color:'pink-slate-500'},
      ]
    
  return (
    <div className=' lg:mb-5 mb-0 bg-transparent'>
      <h1 className='lg:text-end text-center text-white/60 text-lg my-2'>Social Contacts</h1>
          <section className='flex lg:gap-5 font-bold gap-2 bg-transparent lg:flex-col'>
              {ContactLinks.map((items,id)=>(
                <Link target='blank' className='tooltip flex items-center gap-2 lg:flex-row flex-col bg-transparent lg:justify-between justify-around' href={items.link}>
                  <span className={`tooltip-item opacity-0  p-1 rounded-md  bg-blur-md `}>{items.name}</span> 
                  <span className='hover:bg-[#343a40c0] p-2 rounded-lg bg-transparent'>{items.icon}</span></Link>
              ))}
          </section>
      </div>
  )
}

export default ContactLink