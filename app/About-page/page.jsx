import React from 'react'
import styles from "./about.module.css"
import img from "../image/img.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function about() {
  return (
    <main className={styles.main}>
        <h1>ezeanwe .c. godwin</h1>

        <section>

        <div>
                <h2>front end web developer based in nigeria</h2>
                <blockquote>
                        my name is ezeanwe chigozie godwin from nigeria and based in nigeria am curently at the age of 20 years with the knowledge of a front-end web developer with the knowledgeof the programming language that i provided below this page after my picture i would like to delve into the tech industry more but as this that i have learnt i need real word exprerience ican hardly count how  many time i created a project alone but i can count how may times i collaborated in a project with a fellow developer and not to forget am a self taught web developer and i would love it if you found and interest im me and as you do i wont let you down
                </blockquote>
            </div>
            
            <div className={styles.imgDiv}>
            <Image 
                    src={img}
                    alt={"my photo"}
                    placeholder="blur"
                    style={{width:"100%",height:"300px"}}
                />
            </div>
            <div>
                <h2>my skills</h2> 
                <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>JavaScript</li>
                    <li>jquery</li>
                    <li>scss</li>
                    <li>React</li>
                    <li>next js</li>
                </ul>
                {/* <button><Link href="/Project-Page">Projects</Link></button> */}
            </div>
        </section>
    </main>
  )
}
