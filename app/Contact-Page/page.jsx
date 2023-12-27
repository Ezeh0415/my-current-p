import React from 'react'
import Image from 'next/image'
import img from "../image/img.jpg"
import styles from "./contact.module.css"
import {FiFacebook,FiTwitter,FiLinkedin} from "react-icons/fi"
import {FaWhatsapp} from "react-icons/fa"

export default function Contact() {
  return (
   <main className={styles.main}>
    <h1>contact me</h1>
        <section>
            <ul>
                <li><a href="https://www.facebook.com/dele.godwin.9480?mibextid=ZbWKwL" target="_blank"><FiFacebook /></a> facebook</li>
                <li><a href="#"><FaWhatsapp /></a> whatsapp</li>
                <li><a href="https://x.com/Ezeh0415?t=0XMxjJogd9ZqnlLA1kOuJw&s=09" target="_blank"><FiTwitter /></a> twitter</li>
                <li><a href="https://www.linkedin.com/in/ezeanwe-chigozie-49b78a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FiLinkedin /></a> linkedin</li>
            </ul>
            <div>
                <Image 
                    src={img}
                    alt={"my photo"}
                    placeholder="blur"
                    style={{width:"100%",height:"300px"}}
                />
            </div>
        </section>
        <form action="#">
            <label htmlFor="name">
                FullName
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="FULL NAME" 
                />
            </label>
            <br />
            <br />
            <label htmlFor="email">
                Email
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="ENTER Email/GMAIL" 
                />
            </label>
            <br />
            <br />
            <label htmlFor="message">
                Text Message
                <input 
                  className={styles.inp}
                  type="text" 
                  name="message" 
                  id="message" 
                  placeholder="MESSAGE" 
                />
            </label>
            <button> send </button>
        </form>
   </main>
  )
}
