import { Link } from 'react-router-dom'
import styles from './NoEncontrado.module.scss'

export default function NoEncontrado() {
  return (
    <section className={styles.noEncontrado}>
      <p className={styles.emoji}>🫠</p>
      <h1 className={styles.titulo}>Esta página se derritió</h1>
      <p className={styles.texto}>No encontramos lo que buscabas.</p>
      <Link to="/" className={`btn btn--rosa ${styles.boton}`}>Volver al inicio</Link>
    </section>
  )
}
