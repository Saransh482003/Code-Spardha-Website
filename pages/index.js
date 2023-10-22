import Navbar from '@/Components/navbar'
import React from 'react'
import styler from "../styles/Home.module.css"
import { useEffect } from 'react'

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
          
        </div>
      </section>
    </>
  )
}

export default home