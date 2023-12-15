import React from 'react'
import '../app/index.css'

const Contact = () => {
    return (
        <>
            <main id='contact' className=' w-full h-[76.5vh] flex items-center justify-center bg-[#212529]'>
                <form action="https://formsubmit.co/4e8d0a60736f1b308d8a99e92c2567e1 " className='contact  h-96 flex items-center justify-center flex-col gap-3' method='POST'>
                    <section className='form-section lg:w-auto flex flex-col gap-3 items-center justify-center p-10 text-white rounded-lg '>
                        <h1 className='text-2xl '>Contact Me 😉</h1>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" id='name' name='name' required />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label htmlFor="textarea">Subject:</label>
                            <textarea name="Subject" id="textarea" required></textarea>
                        </div>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-md cursor-pointer'>
                            <input type="submit" value="Submit" className='cursor-pointer' />
                        </div>
                    </section>
                </form>
            </main>
            <hr className='bg-gradient-to-r from-purple-500 to-pink-500 h-1'/>
        </>
    )
}

export default Contact