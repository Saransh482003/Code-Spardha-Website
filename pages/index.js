import Navbar from '@/Components/navbar'
import React from 'react'
import styler from "../styles/Home.module.css"

const home = () => {
  return (
    <>
      <section className={styler.intro}>
        <p className={styler.introTitle}>Code Spardha</p>
      </section>
    </>
  )
}

export default home