import Navbar from '@/Components/navbar'
import React from 'react'
import styler from "../styles/Index.module.css"
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const home = () => {
  return (
    <>
      {/* <section className={styler.intro}>
        <video src='/Home/cs.mp4' autoPlay muted loop className={styler.video} />
        <div className={styler.videoContent}>
          <h1 className={styler.videoHead}>CODE SPARDHA</h1>
          <p className={styler.videoArc}>ARC-3</p>
          <p className={styler.videoDesc}>"Where Ideas Compete, Algorithms Conquer"</p>
        </div>
        <Image src="/Home/banner.png" width={1920} height={600} className={styler.banner}></Image>
      </section> */}
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
              <div className={styler.descLink}>Go to Form &#10140;</div>
            </div>
            
          </Link>
          <Link href="https://www.hackerrank.com/code-spardha-arc-3" target='_blank' className={styler.card}>
          <div className={styler.imgCont}>
            <Image src="/Home/Howto/hacker.png" className={styler.img} width={1500} height={1500}></Image>
          </div>
            <div className={styler.stepContent}>
              <h3 className={styler.stepHead}>Step 2 : Sign Up on Hackerrank</h3>
              <p className={styler.stepDesc}>Visit the HackerRank website, sign up, and provide accurate information. Use a valid email address. After creating your account, sign in, and navigate to the competition page. Click 'Sign Up' before the deadline on November 3rd, 11:59 PM. Your active participation is crucial. Thank you for your cooperation.</p>
              <div className={styler.descLink}>Go to HackerRank &#10140;</div>
            </div>
          </Link>
        </div>
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>Event Schedule</h1>
        <div className={styler.table}>
          <div className={styler.headRow}>
            <div className={styler.headData}>Event</div>
            <div className={styler.headData}>Date</div>
          </div>
          <div className={styler.row} style={{borderBottom:"0.2rem solid black"}}>
            <div className={styler.data}>Registration deadline</div>
            <div className={styler.data}>3 November 2023 23:59 (Mid-Night)</div>
          </div>
          <div className={styler.row} style={{borderBottom:"0.2rem solid black"}}>
            <div className={styler.data}>Competition</div>
            <div className={styler.data}>4 November 2023 12:30 (Noon)</div>
          </div>
          <div className={styler.row}>
            <div className={styler.data}>Declaration of Results and Certificates</div>
            <div className={styler.data}>18 November</div>
          </div>
        </div>
        {/* <table className={styler.scheduler}>
          <thead>
            <tr className={styler.tableRow}>
              <th className={styler.datakh}>Event</th>
              <th className={styler.datah}>Date</th>
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
        </table> */}
      </section>
      <section className={styler.instructionPanel}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{rotate:"180deg"}}><path fill="#ffffff" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,53.3C320,43,400,53,480,90.7C560,128,640,192,720,202.7C800,213,880,171,960,144C1040,117,1120,107,1200,128C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L30,144C60,160,120,192,180,170.7C240,149,300,75,360,64C420,53,480,107,540,112C600,117,660,75,720,53.3C780,32,840,32,900,53.3C960,75,1020,117,1080,160C1140,203,1200,245,1260,229.3C1320,213,1380,139,1410,101.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </section>
      <section className={styler.howTo}>
        <h1 className={styler.howHeader}>Student Organiser Team</h1>
        <div className={styler.container}>
          <h1 className={styler.contHead}>Coordinators</h1>
          <div className={styler.entry}>
            <h3 className={styler.name}>Saransh Saini</h3>
            <p className={styler.desc}>3rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8178708402</p>
            <Link href="https://datakiscience.com/" target="_blank" className={styler.desc}><u>Go to Website</u> &#10140;</Link>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Mamta</h3>
            <p className={styler.desc}>3rd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8800147938</p>
            <Link href="https://mamta-portfolio.onrender.com" target="_blank" className={styler.desc}><u>Go to Website</u> &#10140;</Link>
          </div>
        </div>
        <hr className={styler.hre}></hr>
        <div className={styler.container}>
          <h1 className={styler.contHead}>Co-coordinators</h1>
          <div className={styler.entry}>
            <h3 className={styler.name}>Sonu Singh</h3>
            <p className={styler.desc}>2nd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>8178944525</p>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Md Hamid</h3>
            <p className={styler.desc}>2nd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>9576014911</p>
          </div>
          <div className={styler.entry}>
            <h3 className={styler.name}>Suryansh Naithani</h3>
            <p className={styler.desc}>2nd Year B.Sc. Data Analytics Student</p>
            <p className={styler.desc}>9650972122</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default home