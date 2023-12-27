import React from 'react'
import styles from "./first.module.css"
import Image from 'next/image'
import logo from "../../../image/img1.jpg"

export default function First() {
  return (
    <main className={styles.main}>
       <div>
        <h1>bring your ideas to life </h1>
        <blockquote>my name is ezeanwe chigozie godwin based in nigeria and a front-end web developer i have polished my skilles with alot of projects and side code collaboration on git hub i started programing early last year with aim to achive what iam doing today and with all due respect i have a strong backer that would confirm on the skills i have to day.</blockquote>
        <div className={styles.buttons}>
            <button><a href="/Project-Page">view projects</a></button>
            <button><a href="/Contact-Page">contact me</a></button>
        </div>
       </div>
       <div className={styles.imgDiv}>
       <Image 
            src={logo} 
            alt="svg" 
            // height={40}
            quality={100}
            placeholder='blur'
            style={{borderRadius:"10px",width:"100%",height:"330px"}}
          />
       </div>
    </main>
  )
}
