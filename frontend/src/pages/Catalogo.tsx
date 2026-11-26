import { useMemo, type ButtonHTMLAttributes } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import ProductCard from '../components/ProductCard'
import PaletaIlustracion from '../components/PaletaIlustracion'
import { Cargando, MensajeError } from '../components/Estado'
import { contenedor, cx, normalizar } from '../utils'

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
    <>
      {/* Cabecera con foto de fondo */}
      <header className="relative isolate overflow-hidden">
        <img
          src="/img/banda-mango.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-crema via-crema/90 to-crema/25" aria-hidden="true" />

        <div className={`${contenedor} py-14 sm:py-20`}>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rosa">Catálogo</p>
          <h1 className="mt-2 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none text-cafe">
            Todo lo que hay hoy
          </h1>
          <p className="mt-3 max-w-lg text-cafe/75">
            Precios en pesos mexicanos. La disponibilidad cambia con la temporada y con el antojo de la tarde.
          </p>
        </div>
      </header>

      <section className={`${contenedor} pb-16`}>
        <div className="rounded-3xl bg-white/70 p-4 shadow-card ring-1 ring-cafe/5 backdrop-blur-sm">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por categoría">
            <BotonCategoria activo={!categoria} onClick={() => cambiarFiltro('categoria', '')}>
              Todos
            </BotonCategoria>
            {categorias.map((c) => (
              <BotonCategoria
                key={c.id}
                activo={categoria === c.id}
                onClick={() => cambiarFiltro('categoria', c.id)}
              >
                {c.nombre}
              </BotonCategoria>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-cafe/10 pt-3">
            <label className="flex cursor-pointer items-center gap-2 whitespace-nowrap text-[13px] font-bold text-cafe">
              <input
                type="checkbox"
                checked={soloDisponibles}
                onChange={(e) => cambiarFiltro('disponibles', e.target.checked ? '1' : '')}
                className="size-4 accent-rosa"
              />
              Solo disponibles
            </label>

            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-cafe/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Buscar sabor..."
                aria-label="Buscar producto por nombre o descripción"
                value={busqueda}
                onChange={(e) => cambiarFiltro('q', e.target.value)}
                className="w-full rounded-full border border-cafe/20 bg-white py-2 pl-9 pr-4 text-sm outline-none transition focus:border-rosa focus:ring-4 focus:ring-rosa-suave sm:w-56"
              />
            </div>
          </div>
        </div>

        {cargando ? <Cargando texto="Cargando productos..." /> : null}
        {error ? <MensajeError mensaje={error} /> : null}

        {!cargando && !error ? (
          filtrados.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((p) => (
                <ProductCard key={p._id} producto={p} />
              ))}
            </div>
          ) : (
            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-papel/60 px-6 py-16 text-center">
              <PaletaIlustracion color="#c8a165" className="h-28 w-auto opacity-70" />
              <p className="font-display text-xl text-cafe">No encontramos ese antojo</p>
              <p className="max-w-sm text-sm text-cafe/70">
                Prueba con otro sabor o quita los filtros para ver el catálogo completo.
              </p>
            </div>
          )
        ) : null}
      </section>
    </>
  )
}

interface BotonCategoriaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activo: boolean
}

function BotonCategoria({ activo, children, ...props }: BotonCategoriaProps) {
  return (
    <button
      type="button"
      className={cx(
        'rounded-full px-3 py-2 text-[13px] font-bold transition-colors sm:px-3.5 sm:text-sm',
        activo
          ? 'bg-rosa text-white shadow-sm'
          : 'bg-white text-cafe ring-1 ring-cafe/10 hover:bg-rosa-suave hover:ring-rosa/30',
      )}
      aria-pressed={activo}
      {...props}
    >
      {children}
    </button>
  )
}
