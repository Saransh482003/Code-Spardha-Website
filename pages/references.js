import React from 'react'
import styler from "../styles/References.module.css"
import Image from 'next/image'

const references = () => {
  return (
    <section className={styler.sec}>
      <h1 className={styler.header}>These are the References for the Questions</h1>
      <div className={styler.ques}>
        <h3 className={styler.quesName}>Level 2 : Knight Strolls</h3>
        <Image src="/Home/reference/knight.jpeg" className={styler.img} width={1500} height={1500}></Image>
      </div>
      <div className={styler.ques}>
        <h3 className={styler.quesName}>Level 2 : Mixnacci</h3>
        <Image src="/Home/reference/mixnacci.png" className={styler.img} width={1500} height={1500}></Image>
      </div>
      <div className={styler.ques}>
        <h3 className={styler.quesName}>Level 3 : The Mystic Maze</h3>
        <Image src="/Home/reference/mixnacci.png" className={styler.img} width={1500} height={1500}></Image>
      </div>
      <div className={styler.ques}>
        <h3 className={styler.quesName}>Level 3 : The Traveller's Economy</h3>
        <h4 className={styler.quesPart} style={{marginTop:"1rem"}}>Sample Input 0</h4>
        <Image src="/Home/reference/traveler1.png" style={{width:"50%",height:"50%"}} className={styler.img} width={1500} height={1500}></Image>
        <h4 className={styler.quesPart} style={{marginTop:"1rem"}}>Sample Input 1</h4>
        <Image src="/Home/reference/traveler2.png" className={styler.img} width={1500} height={1500}></Image>
      </div>
    </section>
  )
}

export default references