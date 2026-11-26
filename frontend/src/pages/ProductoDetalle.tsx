import { Link, useParams } from 'react-router-dom'
import { useProducto } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import PaletaIlustracion from '../components/PaletaIlustracion'
import { Cargando, MensajeError } from '../components/Estado'
import { cx, fondoSuave, formatearPrecio } from '../utils'
import styles from './ProductoDetalle.module.scss'

export default function ProductoDetalle() {
  const { id } = useParams<{ id: string }>()
  const { producto, cargando, error } = useProducto(id)

  if (cargando) return <Cargando />

  if (error || !producto) {
    return (
      <div className={styles.contenedorError}>
        <MensajeError mensaje={error ?? 'Producto no encontrado'} />
        <Link to="/catalogo" className="enlace">← Volver al catálogo</Link>
      </div>
    )
  }

  const categoria = obtenerCategorias().find((c) => c.id === producto.categoria)

  return (
    <section className={styles.detalle}>
      <Link to="/catalogo" className="enlace">← Volver al catálogo</Link>

      <div className={styles.contenido}>
        <div className={styles.imagen} style={{ backgroundColor: fondoSuave(producto.color) }}>
          {producto.imagen ? (
            <img src={producto.imagen} alt={producto.nombre} className={styles.foto} />
          ) : (
            <PaletaIlustracion color={producto.color} className={styles.ilustracion} />
          )}
        </div>

        <div className={styles.info}>
          {categoria && (
            <Link to={`/catalogo?categoria=${categoria.id}`} className={styles.categoria}>
              {categoria.emoji} {categoria.nombre}
            </Link>
          )}
          <h1 className={styles.nombre}>{producto.nombre}</h1>
          <p className={styles.descripcion}>{producto.descripcion}</p>
          <p className={styles.precio}>{formatearPrecio(producto.precio)}</p>
          <p className={cx(styles.estado, producto.disponible ? styles.disponible : styles.agotado)}>
            {producto.disponible ? '● Disponible hoy' : '● Agotado por el momento'}
          </p>
          <Link to="/visitanos" className={cx('btn btn--talavera', styles.boton)}>
            Encuéntrala en tienda
          </Link>
        </div>
      </div>
    </section>
  )
}
