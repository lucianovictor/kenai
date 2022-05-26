import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <h2>Kenai</h2>
    <ul>
      <li>
        <a href="">
          <ReactSVG img src="icons/instagram.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/twitter.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/facebook.svg" alt="" />
        </a>
      </li>
    </ul>
  </footer>
)
