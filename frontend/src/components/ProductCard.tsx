import { Link } from 'react-router-dom'
import PaletaIlustracion from './PaletaIlustracion'
import { fondoSuave, formatearPrecio } from '../utils'
import type { Producto } from '../types/producto'
import styles from './ProductCard.module.scss'

interface Props {
  producto: Producto
}

export default function ProductCard({ producto }: Props) {
  const { _id, nombre, precio, descripcion, imagen, color, disponible } = producto

  return (
    <Link to={`/catalogo/${_id}`} className={styles.tarjeta}>
      <div className={styles.imagen} style={{ backgroundColor: fondoSuave(color) }}>
        {imagen ? (
          <img src={imagen} alt={nombre} className={styles.foto} loading="lazy" />
        ) : (
          <PaletaIlustracion color={color} className={styles.ilustracion} />
        )}
        {!disponible && <span className={styles.agotado}>Agotado</span>}
      </div>

      <div className={styles.cuerpo}>
        <div className={styles.encabezado}>
          <h3 className={styles.nombre}>{nombre}</h3>
          <span className={styles.precio}>{formatearPrecio(precio)}</span>
        </div>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </Link>
  )
}
