import React from 'react'
import '../app/index.css'
import Image from 'next/image'
import Link from 'next/link'
import Youtube from '../utils/projects/youtube.jpeg'
import Fitness from '../utils/projects/fitness.jpeg'
import DevHelper from '../utils/projects/DevHelp.jpeg'
import Quizify from '../utils/projects/quizify.jpeg'
import { IoIosLink, IoLogoGithub } from "react-icons/io";


const Projects = () => {

  const ProjectData = [
    { name: 'Quizify', img: Quizify, description: 'An AI generated quiz app powered by Gemini using NextJs, Tailwind CSS and Typescript', liveLink: 'https://quizify-ai-generator.vercel.app/', GitHubLink: 'https://github.com/Lokesh9307/Ai-quiz-generator' },
    { name: 'Developer Helper', img: DevHelper, description: 'Developers Helping Website using NextJs, Tailwind CSS and Typescript', liveLink: 'https://developer-helper.vercel.app/', GitHubLink: 'https://github.com/Lokesh9307/developer-helper' },
    { name: 'Youtube Clone', img: Youtube, description: 'Youtube clone using React, Material UI and Rapid API', liveLink: 'https://beast-media-lokesh.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307/youtube-clone' },
    { name: 'Fitness App', img: Fitness, description: 'Fitness Apk using React, Material UI and Rapid API', liveLink: 'https://stayfit-fitness.vercel.app/', GitHubLink: 'https://github.com/Lokesh9307/Fitness-App' },
  ]


  return (
    <>
      <main id='projects' className='w-full h-auto p-10 bg-black'>
        <h1 className='Heading p-3 text-3xl mb-5'>My Projects</h1>
        <section className='flex flex-wrap mx-auto gap-10 lg:justify-evenly items-center justify-around'>
          {ProjectData.map((item, id) => (
            <div key={id} className={`max-w-[300px] bg-white h-auto flex flex-col p-2 overflow-hidden aspect-square relative rounded-2xl card mx-3`}>
              <div className='relative w-full h-full overflow-hidden'>
                  <Image className='absolute -top-10 left-0 w-full height-full z-[10] rounded-xl object-fill mb-10' src={item.img} alt='img'></Image>
              </div>
              <div className='Project-Card-Border p-2 z-20 relative bg-white backdrop-blur-sm rounded-xl '>
                <div className='flex flex-col justify-center items-center'>
                <span className='bg-transparent z-20 text-center'><b>{item.name}</b></span>
                <span className='bg-transparent z-30 text-center'>{item.description}</span>
                </div>
                <hr />
                <div className='flex justify-around'>
                  <Link  href={item.liveLink} target='blank'><span className='text-2xl'><IoIosLink/></span></Link>
                  <Link  href={item.GitHubLink} target='blank'><span className='text-2xl'><IoLogoGithub/></span></Link>
                </div>
              </div>
            </div>
          ))} 
        </section>
      </main><hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1'/>
    </>
  )
}

export default Projects