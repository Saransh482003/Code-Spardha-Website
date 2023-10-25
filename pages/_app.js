import Navbar from '@/Components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import styler from "../styles/Index.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <section className={styler.intro}>
        <video src='/Home/cs.mp4' autoPlay muted loop className={styler.video} />
        <div className={styler.videoContent}>
          <h1 className={styler.videoHead}>CODE SPARDHA</h1>
          <p className={styler.videoArc}>ARC-3</p>
          <p className={styler.videoDesc}>"Where Ideas Compete, Algorithms Conquer"</p>
        </div>
        {/* <Image src="/Home/banner.png" width={1920} height={600} className={styler.banner}></Image> */}
      </section>
      
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
      <link rel="icon" href="/Home/logo.png" />
      <title>Code Spardha : Let's Code It Up</title>
    </Head>

    <Component {...pageProps} />
  </>

}
