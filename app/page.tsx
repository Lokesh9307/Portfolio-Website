
import Certificate from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'
import React from 'react'
import { Analytics } from "@vercel/analytics/react"



const page = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
      <Analytics/>
    </>
  )
}

export default page