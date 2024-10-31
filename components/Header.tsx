"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Profile from '../utils/profile.jpg'
import Image from 'next/image';
import '../app/index.css'
import Chatbot from '@/components/Chatbot'


const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const ToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const ProfileShow = () => {

    }

    const Links = [
        { item: "Home", link: "/" },
        { item: "Skills", link: "#skills" },
        { item: "Projects", link: "#projects" },
        { item: "Certificates", link: "#certificates" },
        { item: "Contact", link: "#contact" }
    ]
    return (
        <>
            <header className='lg:h-32 font-[Mona Sans] p-2 backdrop-blur-2 flex text-xl lg:flex lg:justify-between lg:flex-row flex-col justify-between items-center h-auto bg-header text-white/75 sticky top-0 z-[999]'>
                <section className='flex items-center gap-3 my-4 bg-transparent'>
                    <Image src={Profile} alt='profile' width={200} className='bg-transparent rounded-full bg-gradient-to-r from-purple-500  to-yellow-500 lg:w-28 w-28  p-1' onClick={ProfileShow}></Image>
                    <Link href='/' className='bg-transparent'><h1 className='font-extrabold lg:text-3xl md:text-2xl sm:text-xl text-center bg-transparent style-heading'>LOKESH UMREDKAR</h1></Link>
                </section>
                <hr />
                <section className='flex items-center justify-center gap-3 flex-col bg-transparent'>
                    <div className={`${isOpen ? 'hidden' : 'block'} lg:flex lg:items-center lg:w-auto bg-transparent `}>
                        <ul className='flex lg:flex-row lg:gap-3 items-center flex-col text-center bg-transparent '>
                            {Links.map((item, id) => (
                                <li key={id} className='hover:bg-slate-100/20 hover:text-white  p-1 rounded-md px-3 md:w-full text-xl bg-transparent'><Link key={id} href={item.link} className='bg-transparent'>{item.item}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className='lg:hidden font-bold text-2xl cursor-pointer bg-transparent' onClick={ToggleMenu}>
                        {isOpen ? <TiThMenu className='font-bold text-3xl text-green-700 m-2 rounded-md border-2 border-green-700 bg-transparent' /> : <IoClose className='font-bold text-3xl text-red-700 rounded-md align-center border-2 border-red-600 m-auto bg-transparent' />}
                    </div>
                </section>
            </header>
            <hr />
            <Chatbot />
        </>
    )
}

export default Header