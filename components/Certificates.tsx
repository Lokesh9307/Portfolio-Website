'use client'

import React, { useRef } from 'react'
import item1 from '../utils/certificates/1.jpg';
import item2 from '../utils/certificates/2.jpg';
import item3 from '../utils/certificates/3.jpg';
import item4 from '../utils/certificates/4.jpg';
import item5 from '../utils/certificates/5.jpg';
import item6 from '../utils/certificates/6.jpg';
import item7 from '../utils/certificates/7.jpg';
import item8 from '../utils/certificates/8.jpg';
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import '../app/index.css'


const Certificates:React.FC = () => {

    const Certificate = [
        { name: 'Udemy: build the custom E-commerce site in React + Javascript', img: item1 },
        { name: '', img: item2 },
        { name: '', img: item3 },
        { name: '', img: item4 },
        { name: '', img: item5 },
        { name: '', img: item6 },
        { name: '', img: item7 },
    ]

    const containerRef = useRef<HTMLDivElement>(null);

    const NextBtn = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 500;
        }
    }
    const PrevBtn = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 500;
        }
    }



    return (
        <>
            <main id='certificates' className='w-full h-auto bg-transparent flex justify-center items-center flex-col gap-2 p-20'>
                <h1 className='Heading text-5xl' >Certificates</h1>
                <section ref={containerRef} className='flex overflow-x-auto gap-3 p-10 overflow-y-hidden scroll-none scroll-snap-align-center scrollBar border-t-2 border-b-2 border-slate-600/20 Certificate-container lg:w-auto w-[90vw]'>
                    {
                        Certificate.map((item, id) => (
                            <Image src={item.img} alt='img' className='aspect-video flex-1 hover:scale-125 lg:w-[425px] w-[500px] '></Image>
                        ))
                    }
                </section>
                <div className='text-5xl flex gap-5'>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full' onClick={PrevBtn}><FaArrowAltCircleLeft /></button>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full' onClick={NextBtn}><FaArrowAltCircleRight /></button>
                </div>
            </main>
            <hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1' />
        </>
    )
}

export default Certificates