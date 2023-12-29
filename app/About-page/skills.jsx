import React from 'react'
import Image from 'next/image'
import html from "../image/html.png"
import css from "../image/css.png"
import javascript from "../image/javascript.png"
import jquery from "../image/jquery.png"
import scss from "../image/scss.png"
import react from "../image/react.png"
import next from "../image/next.png"
import styles from "./about.module.css"

export default function skills() {

    const imgs = [
        {
            id:1,
            lang:html
        },
        {
            id:2,
            lang:css
        },
        {
            id:3,
            lang:javascript
        },
        {
            id:4,
            lang:jquery
        },
        {
            id:5,
           lang:scss
        },
        {
            id:6,
            lang:react
        },
        {
            id:7,
           lang:next
        }
    ]

  return (
        <main className={styles.skills}>
                          <ul>
                                {imgs.map((eachImg) => {
                                        return (
                                            <li key={eachImg.id} className={styles.li}>
                                                <Image 
                                                        src={eachImg.lang}
                                                        placeholder="blur"
                                                        quality="100"
                                                        width="50px"
                                                        style={{
                                                            width:'50px',
                                                            height:'50px'
                                                        }}
                                                    />
                                            </li>
                                        )
                                    })}
                          </ul>
        </main>
  )
}
