import React from 'react'

function PdfView() {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center p-8 bg-[#212529]'>
        <object data="./pdf/Resume.pdf" type="" className='w-50 h-full' width="900" height="900"></object>
    </div>
  )
}

export default PdfView