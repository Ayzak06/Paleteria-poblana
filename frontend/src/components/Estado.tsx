import styles from './Estado.module.scss'

export function Cargando({ texto = 'Cargando...' }: { texto?: string }) {
  return (
    <div className={styles.cargando} role="status">
      <div className={styles.spinner} />
      <p>{texto}</p>
    </div>
  )
}

export function MensajeError({ mensaje }: { mensaje: string }) {
  return (
    <div className={styles.error}>
      <p className={styles.errorTitulo}>Algo salió mal</p>
      <p className={styles.errorTexto}>{mensaje}</p>
    </div>
  )
}
