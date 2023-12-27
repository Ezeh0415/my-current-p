'use client'
import styles from "./NavBar.module.css"
import Link from "next/link"
import {RxHamburgerMenu} from "react-icons/rx"
import {GiCancel} from "react-icons/gi"
import {useState} from "react"

export default function NavBar() {
    const [isNavOpen,setIsNavOpen] = useState(false);

    const toggle = () => {
       setIsNavOpen(!isNavOpen)
    }

  return (
    <main className={styles.main}>
        <header>
            <h2>EZEH</h2>
              <nav className={`${styles.navbar} ${isNavOpen ? styles.open : styles.close}`}>
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/About-page">about me</Link></li>
                    <li><Link href="/Project-Page">project</Link></li>
                    <li><Link href="#">my approach</Link></li>
                </ul>
                <button><a href="/Contact-Page">talk to me</a></button>
              </nav>
            {isNavOpen ? <div className={styles.drawer} onClick={toggle}><GiCancel /></div> :  <div className={styles.drawer} onClick={toggle}><RxHamburgerMenu /></div>}
        </header> 
    </main>
  )
}
