import Link from "next/link"
import styles from "./second.module.css"

export default function Second() {
  return (
    <main className={styles.main}>
        <h1>my services</h1>
        <section>
          <div>
             <h2>web developer</h2>
             <blockquote>
                i offer service in front end web developer with the option for more. like the Reusable Code which i mentioned while Reusable code are for react and next js i wont back down in creating a clean code both in react and next js or be it html css javaScript and i happen to be maintaning and debuging front-end bugs i hope you find me intresting enough to contact me . 
             </blockquote>
             <button><Link href="/Contact-Page">talk to me</Link></button>
          </div>
          <hr />
          <div>
            <ul>
              <li>Reusable Code</li>
              <li>Clean code</li>
              <li>Launch</li>
            </ul>
          </div>
        </section>
        {/* <section className={styles.secondSection}>
          <div>
             <h2>web developer</h2>
             <blockquote>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda, vitae exercitationem placeat amet officia voluptatem magnam sed quod optio unde deserunt quaerat tempore odit, doloribus explicabo laborum. Mollitia, voluptatum.
             </blockquote>
             <button><a href="/Contact-Page">talk to me</a></button>
          </div>
          <div>
            <ul> 
              <li>Design interface</li>
              <li>Clean code</li>
              <li>Launch</li>
            </ul>
          </div>
        </section> */}
        <section>
          <div>
             <h2>Responsiveness</h2>
             <blockquote>
               responsiveness is what a front-end developer should put an effort in in mastering cause these days 90% of users visit the internet through tablet or mobile phone so that why a developer should know how to create a responsive page  hit me up for a clean and mouth watering responsiveness
             </blockquote>
             <button><Link href="/Contact-Page">talk to me</Link></button>
          </div>
          <hr />
          <div>
            <ul>
              <li>Desktop responsive</li>
              <li>Tablet responsive</li>
              <li>mobile responsive</li>
            </ul>
          </div>
        </section>
    </main>
  )
}
