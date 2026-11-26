import { Link } from 'react-router-dom'
import { contenedor } from '../utils'
import PaletaIlustracion from './PaletaIlustracion'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Foto de fondo: paletas recién hechas sobre tabla de madera */}
      <img
        src="/img/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-crema via-crema/90 to-crema/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-crema/80 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className={`${contenedor} relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_18rem]`}>
        <div className={styles.entrada}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-rosa ring-1 ring-rosa/20 backdrop-blur-sm">
            Hecho a mano en Puebla
          </p>

          <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.95] text-cafe">
            El sabor de siempre, <span className="text-rosa">bien frío.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg text-cafe/80">
            Paletas de agua y de leche, nieves y aguas frescas preparadas cada día con fruta natural.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalogo"
              className="rounded-full bg-rosa px-6 py-3 font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-rosa/90"
            >
              Ver catálogo
            </Link>
            <Link
              to="/visitanos"
              className="rounded-full border-2 border-talavera px-6 py-3 font-bold text-talavera transition-colors hover:bg-talavera hover:text-crema"
            >
              Cómo llegar
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-cafe/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M20 4c-8 0-14 4-14 12v4M20 4c0 8-4 14-12 14" strokeLinecap="round" />
            </svg>
            Fruta del mercado, sin colorantes artificiales
          </p>
        </div>

        {/* Sello tipo cartel de feria */}
        <div className="hidden justify-self-end lg:block">
          <div className={`${styles.sello} grid size-60 place-items-center rounded-full border-4 border-dashed border-rosa/60 bg-crema/90 p-6 text-center shadow-card backdrop-blur-sm`}>
            <div>
              <PaletaIlustracion color="#e4007c" className="mx-auto h-20 w-auto" />
              <p className="mt-3 font-display text-lg leading-tight text-talavera">
                100%
                <br />
                fruta natural
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
