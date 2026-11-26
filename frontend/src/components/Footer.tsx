import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="papel-picado papel-picado--invertido" />
      <div className={styles.columnas}>
        <div>
          <p className={styles.marca}>Paletería Poblana</p>
          <p className={styles.texto}>Paletas, nieves y aguas frescas hechas a mano con fruta de temporada.</p>
        </div>
        <div>
          <p className={styles.etiqueta}>Navegación</p>
          <ul className={styles.lista}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/visitanos">Visítanos</Link></li>
          </ul>
        </div>
        <div>
          <p className={styles.etiqueta}>Horario</p>
          <p className={styles.texto}>Lunes a domingo<br />10:00 – 21:00</p>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Paletería Poblana</p>
    </footer>
  )
}
