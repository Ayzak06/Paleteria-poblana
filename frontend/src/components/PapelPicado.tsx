import styles from './PapelPicado.module.scss'

interface Props {
  /** Voltea la tira para usarla como borde superior. */
  invertido?: boolean
  /** Color del papel. */
  tono?: 'rosa' | 'crema'
  className?: string
}

/** Separador de papel picado dibujado con un gradiente repetido. */
export default function PapelPicado({ invertido = false, tono = 'rosa', className = '' }: Props) {
  const clases = [styles.franja, styles[tono], invertido ? styles.invertido : '', className]
    .filter(Boolean)
    .join(' ')

  return <div className={clases} aria-hidden="true" />
}
