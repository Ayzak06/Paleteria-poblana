import { useMemo, type ButtonHTMLAttributes } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import ProductCard from '../components/ProductCard'
import { Cargando, MensajeError } from '../components/Estado'
import { cx, normalizar } from '../utils'
import styles from './Catalogo.module.scss'

type Filtro = 'categoria' | 'q' | 'disponibles'

export default function Catalogo() {
  const { productos, cargando, error } = useProductos()
  const [params, setParams] = useSearchParams()
  const categorias = obtenerCategorias()

  const categoria = params.get('categoria') ?? ''
  const busqueda = params.get('q') ?? ''
  const soloDisponibles = params.get('disponibles') === '1'

  // Los filtros viven en la URL, así se pueden compartir como link
  function cambiarFiltro(clave: Filtro, valor: string) {
    const nuevos = new URLSearchParams(params)
    if (valor) nuevos.set(clave, valor)
    else nuevos.delete(clave)
    setParams(nuevos, { replace: true })
  }

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return productos.filter((p) => {
      if (categoria && p.categoria !== categoria) return false
      if (soloDisponibles && !p.disponible) return false
      if (q && !normalizar(`${p.nombre} ${p.descripcion ?? ''}`).includes(q)) return false
      return true
    })
  }, [productos, categoria, busqueda, soloDisponibles])

  return (
    <section className={styles.catalogo}>
      <h1 className={styles.titulo}>Catálogo</h1>
      <p className={styles.nota}>Precios en pesos mexicanos. La disponibilidad puede variar por temporada.</p>

      <div className={styles.filtros}>
        <div className={styles.categorias}>
          <BotonCategoria activo={!categoria} onClick={() => cambiarFiltro('categoria', '')}>
            Todos
          </BotonCategoria>
          {categorias.map((c) => (
            <BotonCategoria
              key={c.id}
              activo={categoria === c.id}
              onClick={() => cambiarFiltro('categoria', c.id)}
            >
              {c.emoji} {c.nombre}
            </BotonCategoria>
          ))}
        </div>

        <div className={styles.controles}>
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(e) => cambiarFiltro('disponibles', e.target.checked ? '1' : '')}
            />
            Solo disponibles
          </label>
          <input
            type="search"
            placeholder="Buscar sabor..."
            value={busqueda}
            onChange={(e) => cambiarFiltro('q', e.target.value)}
            className={styles.buscador}
          />
        </div>
      </div>

      {cargando && <Cargando texto="Cargando productos..." />}
      {error && <MensajeError mensaje={error} />}

      {!cargando && !error && (
        filtrados.length > 0 ? (
          <div className={styles.grid}>
            {filtrados.map((p) => (
              <ProductCard key={p._id} producto={p} />
            ))}
          </div>
        ) : (
          <p className={styles.vacio}>No encontramos productos con esos filtros. 🍧</p>
        )
      )}
    </section>
  )
}

interface BotonCategoriaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activo: boolean
}

function BotonCategoria({ activo, children, ...props }: BotonCategoriaProps) {
  return (
    <button type="button" className={cx(styles.chip, activo && styles.chipActivo)} {...props}>
      {children}
    </button>
  )
}
