"use client";
import React, { useState } from 'react';
import '../app/index.css';
import emailjs from '@emailjs/browser';
import 'dotenv';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Lokesh Umredkar",
            message: message,
        };

        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => {
                console.log("SUCCESS!", response.status, response.text);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch(err => {
                console.log("FAILED...", err);
            });
    };

    return (
        <>
            <main id="contact" className="w-full h-[76.5vh] flex items-center justify-center bg-black">
                <form onSubmit={HandleSubmit} className="contact max-h-96 flex items-center justify-center flex-col gap-3" method="POST">
                    <section className="form-section lg:w-auto h-full flex flex-col gap-3 items-center justify-center p-10 text-white rounded-lg ">
                        <h1 className="text-2xl">Contact Me 😉</h1>
                        <div className="flex lg:flex-row flex-col items-center justify-evenly gap-5">
                            <div className="flex gap-3 flex-col">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-3 flex-col">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col w-full">
                            <label htmlFor="textarea">Subject:</label>
                            <textarea
                                name="Subject"
                                id="textarea"
                                className="w-full"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md cursor-pointer">
                            <input type="submit" value="Submit" className="cursor-pointer" />
                        </div>
                    </section>
                </form>
            </main>
            <hr className="bg-gradient-to-r from-purple-500 to-pink-500 h-1" />
        </>
    );
};

export default Contact;
