import React from 'react'
import styles from "./footer.module.css"
import {FaLinkedin, FaTwitter, FaGithub, FaFacebook} from "react-icons/fa6"

export default function footer() {
  return (
  <main className={styles.main}>
     <h1>&copy; 2024 ezeanwe chigozie godwin all right reserved</h1>
     <div>
        <ul>
            <li><a href="https://www.linkedin.com/in/ezeanwe-chigozie-49b78a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a></li>
            <li><a href="https://x.com/Ezeh0415?t=0XMxjJogd9ZqnlLA1kOuJw&s=09" target="_blank"> <FaTwitter /></a></li>
            <li><a href="https://github.com/Ezeh0415?tab=repositories" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.facebook.com/dele.godwin.9480?mibextid=ZbWKwL" target="_blank"><FaFacebook /></a></li>
        </ul>
     </div>
  </main>
  )
}
