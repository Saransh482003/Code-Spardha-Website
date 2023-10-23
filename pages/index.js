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
        <video src='/Home/cs.mp4' autoPlay muted loop className={styler.video} />
        <div className={styler.videoContent}>
          <h1 className={styler.videoHead}>CODE SPARDHA</h1>
          <p className={styler.videoArc}>ARC-3</p>
          <br></br>
          <br></br>
          <p className={styler.videoDesc}>"Where Ideas Compete, Algorithms Conquer"</p>
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
              <p className={styler.stepDesc}>Visit the HackerRank website, sign up, and provide accurate information. Use a valid email address. After creating your account, sign in, and navigate to the competition page. Click 'Sign Up' before the deadline on November 3rd, 11:59 PM. Your active participation is crucial. Thank you for your cooperation.</p>
            </div>
          </Link>
        </div>
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>Event Schedule</h1>
        <table className={styler.scheduler}>
          <thead>
            <tr className={styler.tableRow}>
              <th className={styler.datak}>Event</th>
              <th className={styler.data}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styler.tableRow}>
              <td className={styler.datak}>Registration deadline</td>
              <td className={styler.data}>3 November 2023 23:59 (Mid-Night)</td>
            </tr>
            <tr className={styler.tableRow}>
              <td className={styler.datak}>Competition</td>
              <td className={styler.data}>4 November 2023 12:30 (Noon)</td>
            </tr>
            <tr className={styler.tableRow}>
              <td className={styler.datafk}>Declaration of Results and Certificates</td>
              <td className={styler.dataf}>18 November</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styler.howTo}>
      <h1 className={styler.howHeader}>Instructions</h1>
      </section>
    </>
  )
}

export default home