import Navbar from '@/Components/navbar'
import React from 'react'
import styler from "../styles/Index.module.css"
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const home = () => {
  return (
    <>
      <section className={styler.intro}>  
        <video src='/Home/cs.mp4' autoPlay muted loop className={styler.video}/>
        <div className={styler.videoContent}>
          <h1 className={styler.videoHead}>CODE SPARDHA</h1>
          <p className={styler.videoArc}>ARC-3</p>
          <br></br>
          <br></br>
          <p className={styler.videoDesc}>Where Ideas Compete, Algorithms Conquer</p>
        </div>
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>How To Register?</h1>
        <div className={styler.steps}>
          <Link href="/" className={styler.card}>
            <Image src="/Home/Howto/form.png" className={styler.img} width={1500} height={1500}></Image>
            <div className={styler.stepContent}>
              <h3 className={styler.stepHead}>Step 1 : Fill in the Registeration Form</h3>
              <p className={styler.stepDesc}>Welcome to Code Spardha! We invite participants from all backgrounds to take part in this event. To begin your journey, please complete the Registration Form with utmost accuracy and sincerity. Your provided information will be used to generate your certificates, making this step essential. Ensure all fields are filled out seriously and comprehensively. Only registered participants will be eligible for certificates.</p>
            </div>
          </Link>
        <Link href="https://www.hackerrank.com/code-spardha-arc-3" target='_blank' className={styler.card}>
            <Image src="/Home/Howto/hacker.png" className={styler.img} width={1500} height={1500}></Image>
            <div className={styler.stepContent}>
              <h3 className={styler.stepHead}>Step 2 : Sign Up on Hackerrank</h3>
              <p className={styler.stepDesc}>Welcome to Code Spardha! We invite participants from all backgrounds to take part in this event. To begin your journey, please complete the Registration Form with utmost accuracy and sincerity. Your provided information will be used to generate your certificates, making this step essential. Ensure all fields are filled out seriously and comprehensively. Only registered participants will be eligible for certificates.</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default home