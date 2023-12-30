import React from 'react'
import styles from "./cv.module.css"
import Image from 'next/image'
import cv from "../image/cv.jpg"

export default function page() {
  return (
    <main className={styles.main}>
       <h1>resume</h1>

       <div className={styles.Image}>
        <Image 
            src={cv}
            placeholder="blur"
            style={{width:"100%"}}
        />
       </div>
    </main>
  )
}
