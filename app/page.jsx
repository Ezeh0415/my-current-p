import styles from './page.module.css'
import MyHome from './componets/folders/home'

export default function Home() {
  return (
    <main className={styles.main}>
        <MyHome />
    </main>
  )
}
