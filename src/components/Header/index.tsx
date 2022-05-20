import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <h2>Kenai</h2>
    <ul>
      <li>
        <a href="">
          <ReactSVG img src="icons/search.svg" alt="" />
        </a>
      </li>
      <li>Início</li>
      <li>Minha lista</li>
      <li>
        <a href="">
          <ReactSVG img src="icons/bell.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <ReactSVG img src="icons/user.svg" alt="" />
        </a>
      </li>
    </ul>
  </header>
)
