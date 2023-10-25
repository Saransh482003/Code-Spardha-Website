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
          <p className={styler.videoDesc}>"Where Ideas Compete, Algorithms Conquer"</p>
        </div>
        {/* <Image src="/Home/banner.png" width={1920} height={600} className={styler.banner}></Image> */}
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>How To Register?</h1>
        <div className={styler.steps}>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScuGJhP38w_iIG8il3smlOG4bx4MD8Cp1d60-Xh5nlgmrydNQ/viewform?usp=sf_link" target='_blank' className={styler.card}>
            <div className={styler.imgCont}>
            <Image src="/Home/Howto/codespardha.png" className={styler.img} width={1500} height={1500}></Image>
            </div>
            <div className={styler.stepContent}>
              <h3 className={styler.stepHead}>Step 1 : Fill in the Registeration Form</h3>
              <p className={styler.stepDesc}>Welcome to Code Spardha! We invite participants from all backgrounds to take part in this event. To begin your journey, please complete the Registration Form with utmost accuracy and sincerity. Your provided information will be used to generate your certificates, making this step essential. Ensure all fields are filled out seriously and comprehensively. Only registered participants will be eligible for certificates.</p>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/code-spardha-arc-3" target='_blank' className={styler.card}>
          <div className={styler.imgCont}>
            <Image src="/Home/Howto/hacker.png" className={styler.img} width={1500} height={1500}></Image>
          </div>
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
        <h1 className={styler.howHeader}>Instructions and Rules</h1>
        <ol className={styler.instructions}>
          <li className={styler.inst}>Date of Competition: November 4, 2023</li>
          <li className={styler.inst}>Time: 12:30 PM to 3:30 PM</li>
          <li className={styler.inst}>There will be 3 levels with increasing degree of difficulty.</li>
          <ol type='i' style={{marginLeft:"3rem"}}>
            <li>Level 1 : 2 Questions</li>
            <li>Level 2 : 2 Questions</li>
            <li>Level 3 : Any 1 of 2 Questions</li>
          </ol>
          <li className={styler.inst}>All 5 questions would be marked.</li>
          <li className={styler.inst}>Submissions made after 3:45 PM will NOT be considered for evaluation.</li>
          <li className={styler.inst}>You are free to attend whatever question you want; there are no restrictions on access to levels.</li>
          <li className={styler.inst}>Contact the coordinators or co-coordinators if you have any queries.</li>
          
        </ol>
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>Student Organiser Team</h1>
        <div className={styler.container}>
          <h1 className={styler.contHead}>Coordinators</h1>
          <div className={styler.entry}>
            <h3 className={styler.name}>Saransh Saini</h3>
            <p className={styler.desc}>3rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8178708402</p>
            <Link href="https://datakiscience.com/" className={styler.desc}>Go to Website</Link>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Mamta</h3>
            <p className={styler.desc}>3rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8800147938</p>
            <Link href="https://mamta-portfolio.onrender.com" className={styler.desc}>Go to Website</Link>
          </div>
        </div>
        <hr className={styler.hre}></hr>
        <div className={styler.container}>
          <h1 className={styler.contHead}>Co-coordinators</h1>
          <div className={styler.entry}>
            <h3 className={styler.name}>Sonu</h3>
            <p className={styler.desc}>2rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8178944525</p>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Hamid</h3>
            <p className={styler.desc}>2rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>9576014911</p>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Suryansh</h3>
            <p className={styler.desc}>2rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>9650972122</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default home
