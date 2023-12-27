import Image from 'next/image'
import img from "../image/img (1).jpg"
import img2 from "../image/img (9).jpg"
import img3 from "../image/img (5).jpg"
import img4 from "../image/img (6).jpg"
import img5 from "../image/img (7).jpg"
import img6 from "../image/img (8).jpg"
import img7 from "../image/snap.jpg"
import img8 from "../image/movieBazar.jpg"
import img9 from "../image/my-portfolio.jpg"
import styles from "./project.module.css"
import React from 'react'

export default function projectList() {
    const projects = [
        {
            id:1,
            img_url:img,
            img_alt:"img-alt",
            project_name:"Product Display Page",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/perfum",
            live_link:" https://perfum-delta.vercel.app/"
        },
        {
            id:2,
            img_url:img2,
            img_alt:"img-alt",
            project_name:"De Cloud Recipe site",
            project_lang:"React",
            source_code:"https://github.com/Ezeh0415/Recipe-app",
            live_link:"https://recipe-app-ezeh0415.vercel.app/"
        },
        {
            id:3,
            img_url:img3,
            img_alt:"img-alt",
            project_name:"Front-End Mentor Project",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/nft-preview-card-componet",
            live_link:"https://nft-preview-card-componet.vercel.app/"
        },
        {
            id:4,
            img_url:img4,
            img_alt:"img-alt",
            project_name:"Ecormerce project",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/-e-cormerce-site",
            live_link:"https://e-cormerce-site.vercel.app/"
        },
        {
            id:5,
            img_url:img5,
            img_alt:"img-alt",
            project_name:"Counter project",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/counter-",
            live_link:"#"
        },
        {
            id:6,
            img_url:img6,
            img_alt:"img-alt",
            project_name:"Bithumb site",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/Gee-project-",
            live_link:" https://gee-project.vercel.app/"
        },
        {
            id:7,
            img_url:img7,
            img_alt:"img-alt",
            project_name:"Front-End-Mentor project snap",
            project_lang:"html css JavaScript",
            source_code:"https://github.com/Ezeh0415/intro-with-dropdown",
            live_link:"https://intro-with-dropdown-psi.vercel.app/"
        },
        {
            id:8,
            img_url:img8,
            img_alt:"img-alt",
            project_name:"Movie site",
            project_lang:"React",
            source_code:"https://github.com/Ezeh0415/Movie-Site",
            live_link:"https://movie-site-umber.vercel.app/"
        },
        {
            id:9,
            img_url:img9,
            img_alt:"img-alt",
            project_name:"My portfolio",
            project_lang:"Next Js",
            source_code:"#",
            live_link:"#"
        },
    ]
  return (
    <main className={styles.plMain}>
        <section>
            {projects.map((project) => {
                return (
                <div className={styles.mainDiv} key={project.id}>
                    <Image 
                        src={project.img_url}
                        alt={project.img_alt}
                        placeholder="blur"
                        quality={100}
                        style={{width:"100%",height:"300px",borderRadius:"10px"}}
                    /> 
                    <div className={styles.textDiv}>
                        <h3>{project.project_name}</h3>
                        <p><small>{project.project_lang}</small></p>
                        <div>
                            <button><a href={project.source_code}target="_blank">source code</a></button>
                            <button><a href={project.live_link}target="_blank">live link</a></button>
                        </div>
                    </div>
                </div>
                )
            })}
        </section>
    </main>
  )
}
