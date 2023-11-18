import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styler from "../styles/Results.module.css"
import Link from 'next/link'

const results = () => {
  const [scores, setScores] = useState([])
  const [colors, setColors] = useState(["#ffc400","rgb(94, 94, 94)","green"])
  useEffect(() => {
    fetch("/api/score").then((a) => {
      return a.json()
    }).then((res) => {
      setScores(res)
    })
  }, [])
  return (
    <>
      <section className={styler.scoreSec} style={{marginTop:"3rem"}}>
        <Image src="/Home/top3graph.png" className={styler.top3} width={1000} height={1000}></Image>
      </section>
      <h1 className={styler.howHeader}>Important Information</h1>
      <section className={styler.scoreSec}>
        <div className={styler.decInfo}>
          <p className={styler.info}>1. These are your final ranking for the competition. We congratulate and thank all the participants for participating in the event and making it a huge success.</p>
          <p className={styler.info}>2. Download your certificates by clicking on the Download Certificate button.</p>
          <p className={styler.info}>3. Those who have "Contact Us" written in the Download Certificate section contact the Coordinators immediately, due to some reason we were not able to fetch your names for the certificates.</p>
          <p className={styler.info}>4. If you have any discrepancy in your name on the certificate then contact the Coordinators. We will entertain such requests only till 25 November 2023.</p>
        </div>
      </section>
      <h1 className={styler.howHeader}>Leader Board</h1>
      <section className={styler.scoreSec}>
        <div className={styler.scoreBoard}>
          <div className={styler.headRow}>
            <div className={styler.headers}>Rank</div>
            <div className={styler.headers}>Hackerrank User Name</div>
            <div className={styler.headers}>Name</div>
            <div className={styler.headers}>Score</div>
            <div className={styler.headers}>Download Certificate</div>
          </div>
          {
            scores.map((score,index)=>{
              if (index<3){
                return <div className={styler.scoreRow} >
                <div className={styler.score} style={{fontWeight:"500"}}>{score.rank}</div>
                <Link className={styler.score} href={`https://www.hackerrank.com/profile/${score["user name"]}`} target='_blank'>{score["user name"]}</Link>
                <div className={styler.score}>{score["Full name"]}</div>
                <div className={styler.score}>{score.marks}</div>
                <Link className={styler.score} href={score.certificate} target='_blank' style={{color:"green",fontWeight:"500"}}>Download Certificate</Link>

              </div>
              }
              else if (index>=3 && index<scores.length-1){
                  return <div className={styler.scoreRow}>
                <div className={styler.score} style={{fontWeight:"500"}}>{score.rank}</div>
                <Link className={styler.score} href={`https://www.hackerrank.com/profile/${score["user name"]}`} target='_blank'>{score["user name"]}</Link>
                <div className={styler.score}>{score["Full name"]}</div>
                <div className={styler.score}>{score.marks}</div>
                {score["Full name"] ? (
                  <Link className={styler.score} href={score.certificate} target='_blank' style={{color:"green",fontWeight:"500"}}>Download Certificate</Link>
                ) : (
                  <Link href="tel:+918178703402" className={styler.score} style={{color:"red",fontWeight:"500"}}>Contact Us</Link>
                )}
              </div>
              }
              else{
                  return <div className={styler.scoreRow} style={{borderBottomLeftRadius:"3rem",borderBottomRightRadius:"3rem"}}>
                  <div className={styler.score} style={{fontWeight:"500"}}>{score.rank}</div>
                  <Link className={styler.score} href={`https://www.hackerrank.com/profile/${score["user name"]}`} target='_blank'>{score["user name"]}</Link>
                  <div className={styler.score}>{score["Full name"]}</div>
                  <div className={styler.score}>{score.marks}</div>
                  {score["Full name"] ? (
                    <Link className={styler.score} href={score.certificate} target='_blank' style={{color:"green",fontWeight:"500"}}>Download Certificate</Link>
                  ) : (
                    <Link href="tel:+918178703402" className={styler.score} style={{color:"red",fontWeight:"500"}}>Contact Us</Link>
                  )}
                </div>
              }
            })
          }

        </div>
      </section>
    </>
  )
}

export default results