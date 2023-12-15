import React from 'react'

const ScrollBar = () => {

    const bodyel = document.body;
    const barel = document.querySelector('.bar');

    const updateBar = ()=>{
        let scrollPos = (window.scrollY / (bodyel.scrollHeight - window.innerHeight))*100 ;
        // barel.style.width = `${scrollPos}%`;
        requestAnimationFrame(updateBar);
    }
    updateBar();
  return (
    <>
    <div className='progress fixed top-0 left-0  w-full h-[10px] bg-white'>
        <span className='bar block w-0 h-[inherit] bg-black'></span>
    </div>
    </>
  )
}

export default ScrollBar