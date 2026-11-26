import { Link } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import ProductCard from '../components/ProductCard'
import PaletaIlustracion from '../components/PaletaIlustracion'
import { Cargando, MensajeError } from '../components/Estado'
import styles from './Inicio.module.scss'

export default function Inicio() {
  const { productos, cargando, error } = useProductos()
  const destacados = productos.filter((p) => p.destacado)
  const categorias = obtenerCategorias()

  return (
    <>
      {/* Portada */}
      <section className={styles.hero}>
        <div>
          <p className={styles.antetitulo}>Hecho a mano en Puebla</p>
          <h1 className={styles.titulo}>
            El sabor de siempre, <span className={styles.resaltado}>bien frío.</span>
          </h1>
          <p className={styles.subtitulo}>
            Paletas de agua y de leche, nieves y aguas frescas preparadas cada día con fruta natural.
          </p>
          <div className={styles.acciones}>
            <Link to="/catalogo" className="btn btn--rosa">Ver catálogo</Link>
            <Link to="/visitanos" className="btn btn--contorno">Cómo llegar</Link>
          </div>
        </div>
        <div className={styles.paletas} aria-hidden="true">
          <PaletaIlustracion color="#ffb627" className={styles.paletaIzq} />
          <PaletaIlustracion color="#e4007c" className={styles.paletaCentro} />
          <PaletaIlustracion color="#7ac143" className={styles.paletaDer} />
        </div>
      </section>

      <div className="papel-picado" />

      {/* Categorías */}
      <section className={styles.seccion}>
        <h2 className={styles.tituloSeccion}>¿Qué se te antoja?</h2>
        <div className={styles.categorias}>
          {categorias.map((c) => (
            <Link key={c.id} to={`/catalogo?categoria=${c.id}`} className={styles.categoria}>
              <span className={styles.emoji}>{c.emoji}</span>
              <p>{c.nombre}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className={styles.seccionDestacados}>
        <div className={styles.encabezadoSeccion}>
          <h2 className={styles.tituloSeccion}>Los favoritos de la casa</h2>
          <Link to="/catalogo" className="enlace">Ver todo →</Link>
        </div>
        {cargando && <Cargando />}
        {error && <MensajeError mensaje={error} />}
        {!cargando && !error && (
          <div className={styles.grid}>
            {destacados.map((p) => (
              <ProductCard key={p._id} producto={p} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
