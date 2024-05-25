'use client'
import Certificate from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SplineScene from '@/components/animation'
import Head from 'next/head'
import React from 'react'


const page = () => {
  return (
    <>
        <SplineScene />
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
    </>
  )
}

export default page