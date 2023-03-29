import React from 'react'
import home from '../../assests/icones/home-ativo.png'
import maiscurtidas from '../../assests/icones/mais-curtidas-inativo.png'
import maisvistas from '../../assests/icones/mais-vistas-inativo.png'
import novas from '../../assests/icones/novas-inativo.png'
import surpreendaMe from '../../assests/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}> 
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maiscurtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisvistas} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
       
