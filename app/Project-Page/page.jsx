import React from 'react'
import styles from "./project.module.css"
import ProjectList from './projectList'

export default function Project() {
  return (
        <main className={styles.main}>
            <h1>Latest Projects</h1>
            <ProjectList />
        </main>
  )
}
