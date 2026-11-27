import { Link } from 'react-router-dom'
import { useProductos } from '../hooks/useProductos'
import { obtenerCategorias } from '../services/api'
import ProductCard from '../components/ProductCard'
import Hero from '../components/Hero'
import PapelPicado from '../components/PapelPicado'
import { Cargando, MensajeError } from '../components/Estado'
import { contenedor } from '../utils'

export default function Inicio() {
  const { productos, cargando, error } = useProductos()
  const destacados = productos.filter((p) => p.destacado)
  const categorias = obtenerCategorias()

  return (
    <>
      <Hero />
      <PapelPicado />

      {/* Categorías sobre papel con patrón de talavera */}
      <section className="relative isolate overflow-hidden bg-papel py-16">
        <div
          className="absolute inset-0 -z-10 bg-[url('/img/talavera.svg')] bg-[length:96px_96px] opacity-[0.08]"
          aria-hidden="true"
        />

        <div className={contenedor}>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-cafe">
            ¿Qué se te antoja?
          </h2>
          <p className="mt-2 max-w-md text-cafe/70">
            Cinco familias de antojo, todas hechas en casa.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {categorias.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/catalogo?categoria=${c.id}`}
                  className="group flex h-full flex-col items-center gap-3 rounded-3xl bg-crema/80 p-4 text-center shadow-sm ring-1 ring-cafe/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
                >
                  <span className="size-20 overflow-hidden rounded-full ring-4 ring-white">
                    <img
                      src={c.imagen}
                      alt=""
                      width={160}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <span className="text-sm font-bold leading-tight text-cafe">{c.nombre}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Favoritos */}
      <section className={`${contenedor} py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-cafe">
              Los favoritos de la casa
            </h2>
            <p className="mt-2 text-cafe/70">Los que se acaban primero cada tarde.</p>
          </div>
          <Link
            to="/catalogo"
            className="rounded-full border-2 border-rosa px-5 py-2 text-sm font-bold text-rosa transition-colors hover:bg-rosa hover:text-white"
          >
            Ver todo el catálogo
          </Link>
        </div>

        {cargando ? <Cargando /> : null}
        {error ? <MensajeError mensaje={error} /> : null}
        {!cargando && !error ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destacados.map((p) => (
              <ProductCard key={p._id} producto={p} />
            ))}
          </div>
        ) : null}
      </section>

      {/* Banda con foto de fondo */}
      <section className="relative isolate overflow-hidden py-20 text-crema">
        <img
          src="/img/puesto-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-talavera/90" aria-hidden="true" />

        <div className={`${contenedor} grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`}>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-mango">Del mercado a la paleta</p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight">
              La fruta se compra en la mañana. La paleta se vende en la tarde.
            </h2>
            <p className="mt-4 max-w-lg text-crema/80">
              Trabajamos con lo que da la temporada: mango Ataulfo, fresa de huerto, limón verde y flor de jamaica.
              Nada de concentrados ni colorantes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/catalogo"
                className="rounded-full bg-mango px-6 py-3 font-bold text-cafe transition-transform hover:-translate-y-0.5"
              >
                Ver sabores de hoy
              </Link>
              <Link
                to="/visitanos"
                className="rounded-full border-2 border-crema/70 px-6 py-3 font-bold text-crema transition-colors hover:bg-crema hover:text-talavera"
              >
                Visítanos
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl ring-4 ring-crema/20">
            <img
              src="/img/puesto.jpg"
              alt="Vendedor de paletas en su puesto de la calle"
              width={1000}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </section>
    </>
  )
}
