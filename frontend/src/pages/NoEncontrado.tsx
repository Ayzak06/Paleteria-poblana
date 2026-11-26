import { Link } from 'react-router-dom'
import PaletaIlustracion from '../components/PaletaIlustracion'
import { contenedor } from '../utils'

export default function NoEncontrado() {
  return (
    <section className={`${contenedor} max-w-xl py-24 text-center`}>
      <PaletaIlustracion color="#ffb627" className="mx-auto h-40 w-auto -rotate-12" />
      <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] leading-tight text-cafe">
        Esta página se derritió
      </h1>
      <p className="mt-3 text-cafe/70">No encontramos lo que buscabas, pero tenemos paletas.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-rosa px-6 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
