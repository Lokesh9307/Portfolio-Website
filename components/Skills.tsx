import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaFigma, FaAws, FaBootstrap, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss,SiNextdotjs  } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import '../app/index.css';





const Skills = () => {


  const frontend = [
    { icon: <FaHtml5 className='text-orange-500' />, label: 'HTML' ,style:'border-2 border-orange-500/50' },
    { icon: <FaCss3Alt className='text-blue-500' />, label: 'CSS' ,style:'border-2 border-blue-500/50' },
    { icon: <IoLogoJavascript className='text-yellow-500' />, label: 'JavaScript',style:'border-2 border-yellow-500/50' },
    { icon: <FaReact className='text-blue-300' />, label: 'React JS',style:'border-2 border-blue-300/50' },
    { icon: <SiNextdotjs />, label: 'Next JS' ,style:'border-2 border-white/50'},
    { icon: <SiTailwindcss className='text-blue-700' />, label: 'Tailwind CSS',style:'border-2 border-blue-700/50' },
    { icon: <FaBootstrap className='text-purple-800' />, label: 'Bootstrap' ,style:'border-2 border-purple-800/50'},
  ]

  const Backend = [
    { icon: <FaNodeJs className='text-green-400' />, label: 'Node JS',style:'border-2 border-green-400/50' },
    { icon: <SiExpress className='text-yellow-800' />, label: 'Express JS' ,style:'border-2 border-yellow-800/50'},
    { icon: <SiMongodb className='text-green-700' />, label: 'MongoDB',style:'border-2 border-green-700/50' },
  ]

  const Others = [
    { icon: <FaPython className='text-yellow-200' />, label: 'Python' ,style:'border-2 border-blue-500/50'},
    { icon: <FaFigma className='text-orange-800' />, label: 'Figma',style:'border-2 border-orange-800/50' },
    { icon: <FaAws className='text-orange-500' />, label: 'AWS',style:'border-2 border-orange-500/50' },
    { icon: <FaDocker className='text-blue-600' />, label: 'Docker' ,style:'border-2 border-blue-600/50'},
  ]
  return (
    <>
      <main id='skills' className='w-full lg:h-[76.5vh] h-auto bg-[#212529] text-white p-10 flex flex-col justify-between lg:gap-2 gap-4'>
        <h1 className=' Heading text-4xl'>Ask Me About </h1>
        <section className='flex gap-4 flex-col'>
          <h1>Frontend Stack :</h1>
          <div className='flex gap-3 flex-wrap '>
            {frontend.map((item, id) => (
              <div className={`lg:w-40 h-[50px] bg-black/50 backdrop-filter backdrop-blur-md  flex justify-center items-center gap-1 rounded-md ${item.style} w-[140px]`}>
                <span className='text-lg'>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
        <hr />

        <section className='flex gap-4 flex-col'>
          <h1>Backend Stack :</h1>
          <div className='flex gap-3 flex-wrap '>
            {Backend.map((item, id) => (
              <div key={id} className={`lg:w-40 h-[50px] bg-black/50 backdrop-filter backdrop-blur-md  flex justify-center items-center gap-1 rounded-md ${item.style} w-[140px]`}>
                <span className='text-lg'>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
        <hr />

        <section className='flex gap-4 flex-col'>
          <h1>Others Stack :</h1>
          <div className='flex gap-3 flex-wrap '>
            {Others.map((item, id) => (
              <div key={id} className={`lg:w-40 h-[50px] bg-black/50 backdrop-filter backdrop-blur-md  flex justify-center items-center gap-1 rounded-md ${item.style} w-[140px]`}>
                <span className='text-lg'>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1'/>
    </>
  )
}

export default Skills