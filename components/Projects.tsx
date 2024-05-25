import React from 'react'
import '../app/index.css'
import Image from 'next/image'
import Link from 'next/link'
import Youtube from '../utils/projects/youtube.jpeg'
import Todo from '../utils/projects/todo.jpeg'
import Fitness from '../utils/projects/fitness.jpg'
import Calculator from '../utils/projects/Calculator.jpeg'
import Travel from '../utils/projects/travel.jpeg'
import DevHelper from '../utils/projects/devhelper.png'
import { IoIosLink, IoLogoGithub } from "react-icons/io";



const Projects = () => {

  const ProjectData = [
    { name: 'Youtube Clone', img: Youtube, description: 'Youtube clone using React, Material UI and Rapid API', liveLink: 'https://beast-media-lokesh.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307/youtube-clone' },
    { name: 'Todo List', img: Todo, description: 'Todo List using React, Material UI using localhost storage', liveLink: 'https://todoapp-lokii.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307/Todo-App' },
    { name: 'Fitness App', img: Fitness, description: 'Fitness Apk using React, Material UI and Rapid API', liveLink: 'https://stayfit-n-strong.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307/Fitness-App' },
    { name: 'Calculator', img: Calculator, description: 'Calculator using HTML, CSS, JavaScript', liveLink: 'https://simple-calculator-lokii.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307' },
    { name: 'Travel App UI', img: Travel, description: 'Travel App UI design using NextJs , Tailwind CSS ', liveLink: 'https://hilink-travelapp.netlify.app/', GitHubLink: 'https://github.com/Lokesh9307/TravelApp-UI' },
    { name: 'Developer Helper', img: DevHelper, description: 'Developers Helping Website using NextJs, Tailwind CSS and Typescript', liveLink: 'https://developer-helper.vercel.app/', GitHubLink: 'https://github.com/Lokesh9307/developer-helper' },
  ]


  return (
    <>
      <main id='projects' className='w-full h-auto p-10 bg-transparent'>
        <h1 className='Heading p-3 text-3xl mb-5'>My Projects</h1>
        <section className='flex flex-wrap mx-auto gap-10 lg:justify-evenly items-center justify-around'>
          {ProjectData.map((item, id) => (
            <div key={id} className={`max-w-[300px] bg-white h-auto flex flex-col p-2 overflow-hidden aspect-square relative rounded-2xl card mx-3`}>
              <div className='relative w-full h-full overflow-hidden'>
                  <Image className='absolute top-0 left-0 w-full height-full z-[10] rounded-xl' src={item.img} alt='img'></Image>
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