import React from 'react'
import styler from "../styles/Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className={styler.navbar}>
            <Link href="/" className={styler.profile}>
                <Image src="/Home/Code Spardha Logo.png" className={styler.logo} width={200} height={200}></Image>
                <p className={styler.name}>Code Spardha</p>
            </Link>
            <div className={styler.extraLogos}>
                <Image src="/Home/dseuLogo.png" className={styler.logo} width={200} height={200}></Image>
                <Image src="/Home/g20Logo.png" className={styler.logo} width={200} height={200}></Image>
                <Image src="/Home/azadiLogo.png" className={styler.logo} width={200} height={200}></Image>
                <Image src="/Home/swatchLogo.png" className={styler.logo} width={200} height={200}></Image>
            </div>
        </div>
        <hr className={styler.hr}/>
        <div className={styler.subNav}>
            <Link href="/" className={styler.links}>Home</Link>
            <Link href="/about" className={styler.links}>About</Link>
            <Link href="/compt" className={styler.links}>Competition Portal</Link>
            <Link href="/results" className={styler.links}>Results</Link>
        </div>
    </>
  )
}

export default Navbar