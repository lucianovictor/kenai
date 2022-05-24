import { IoStarSharp } from 'react-icons/io5'

import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.content}>
      <h1>Ação</h1>
      <img src="/icons/timecircle.png" alt="" />
      <h3>1h 57m</h3>
      <h2>Batman</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
        convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor
        sit amet laoreet dignissim.{' '}
      </p>
      <button type="button">Assistir agora</button>
      <div className={styles.stars}>
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
    </div>
  </main>
)
