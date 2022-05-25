import styles from './styles.module.scss'

export const Films = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <h2>Populares</h2>
      <span></span>
      <div className={styles.films}>
        <img src="/filmes/filme-1.png" alt="" />
        <img src="/filmes/filme-2.png" alt="" />
        <img src="/filmes/filme-3.png" alt="" />
        <img src="/filmes/filme-4.png" alt="" />
        <img src="/filmes/filme-5.png" alt="" />
      </div>
    </div>
  </section>
)
