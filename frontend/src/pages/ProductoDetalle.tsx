import { Link, useParams } from 'react-router-dom'
import { useProducto } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import PaletaIlustracion from '../components/PaletaIlustracion'
import { Cargando, MensajeError } from '../components/Estado'
import { contenedor, cx, fondoSuave, formatearPrecio } from '../utils'

export default function ProductoDetalle() {
  const { id } = useParams<{ id: string }>()
  const { producto, cargando, error } = useProducto(id)

  if (cargando) return <Cargando />

  if (error || !producto) {
    return (
      <div className={`${contenedor} py-20 text-center`}>
        <MensajeError mensaje={error ?? 'Producto no encontrado'} />
        <Link to="/catalogo" className="font-bold text-rosa hover:underline">
          ← Volver al catálogo
        </Link>
      </div>
    )
  }

  const categoria = obtenerCategorias().find((c) => c.id === producto.categoria)

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-72 bg-[url('/img/talavera.svg')] bg-[length:96px_96px] opacity-[0.07]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-papel/80 to-transparent"
        aria-hidden="true"
      />

      <div className={`${contenedor} max-w-5xl py-12`}>
        <Link to="/catalogo" className="text-sm font-bold text-talavera hover:underline">
          ← Volver al catálogo
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div
            className="overflow-hidden rounded-[2rem] shadow-card ring-1 ring-cafe/5"
            style={{ backgroundColor: fondoSuave(producto.color) }}
          >
            {producto.imagen ? (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                width={1000}
                height={1000}
                className="aspect-square size-full object-cover"
              />
            ) : (
              <div className="grid aspect-square place-items-center p-10">
                <PaletaIlustracion color={producto.color} className="h-[80%] w-auto" />
              </div>
            )}
          </div>

          <div>
            {categoria ? (
              <Link
                to={`/catalogo?categoria=${categoria.id}`}
                className="inline-flex rounded-full bg-rosa-suave px-3 py-1 text-sm font-bold text-rosa transition-colors hover:bg-rosa hover:text-white"
              >
                {categoria.nombre}
              </Link>
            ) : null}

            <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none text-cafe">
              {producto.nombre}
            </h1>

            <p className="mt-4 text-lg text-cafe/80">{producto.descripcion}</p>

            <p className="mt-6 font-display text-3xl tabular-nums text-talavera">
              {formatearPrecio(producto.precio)}
            </p>

            <p
              className={cx(
                'mt-2 flex items-center gap-2 text-sm font-bold',
                producto.disponible ? 'text-lima' : 'text-cafe/50',
              )}
            >
              <span
                className={cx('size-2.5 rounded-full', producto.disponible ? 'bg-lima' : 'bg-cafe/30')}
                aria-hidden="true"
              />
              {producto.disponible ? 'Disponible hoy' : 'Agotado por el momento'}
            </p>

            <Link
              to="/visitanos"
              className="mt-8 inline-block rounded-full bg-talavera px-6 py-3 font-bold text-crema transition-transform hover:-translate-y-0.5"
            >
              Encuéntrala en tienda
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
