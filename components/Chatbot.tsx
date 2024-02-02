
'use client'
import { useEffect, useState } from 'react';
import { FaRobot } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";



interface EmbeddedChatbotConfig {
    chatbotId: string;
    domain: string;
}

declare global {
    interface Window {
        embeddedChatbotConfig: EmbeddedChatbotConfig;
    }
}

const Chatbot: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        // script.chatbotId = window.embeddedChatbotConfig.chatbotId;
        // script.domain = window.embeddedChatbotConfig.domain;
        script.defer = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const [open, setOpen] = useState(false);
    const Toggle = () => {
        setOpen(!open)
    }

    const Toggleclass = !open ? 'hidden' : 'block';

    return (
        <>
            <section className='fixed p-10  w-[500px] z-[9999]'>
                <div className='fixed top-50 right-0 p-3 rounded-lg'>
                    <b><h1 className={`${Toggleclass} font-medium lg:text-3xl text-2xl bg-white text-black rounded-lg text-center mb-[-8px] p-1`}>Ask About Me 😎</h1></b>
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/fvwDxQ5j0TEZ71seh3BZ_"
                        width="100%"
                        className={`lg:w-[500px] h-[400px] text-[20px] rounded-lg ${Toggleclass}`}
                    ></iframe>

                </div>
                <div className='fixed bottom-0 right-0 p-3'>
                    <button className='text-3xl text-white bg-black p-2 rounded-full font-bolder' onClick={Toggle}>{open ? <IoIosCloseCircle className='hover:text-red-500'/> : <FaRobot className='hover:text-green-300' />}</button>
                </div>
            </section>
        </>
    );
};

export default Chatbot;


