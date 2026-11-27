import { Link } from 'react-router-dom'
import { contenedor } from '../utils'
import PapelPicado from './PapelPicado'

export default function Footer() {
  return (
    <footer className="relative mt-20 isolate overflow-hidden text-crema">
      <img
        src="/img/puesto-bg.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-talavera/90" aria-hidden="true" />

      <PapelPicado invertido />

      <div className={`${contenedor} grid gap-10 py-12 md:grid-cols-3`}>
        <div>
          <p className="font-display text-2xl">Paletería Poblana</p>
          <p className="mt-3 max-w-xs text-sm text-crema/80">
            Paletas, nieves y aguas frescas hechas a mano con fruta de temporada.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-mango">Navegación</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:underline">Catálogo</Link></li>
            <li><Link to="/visitanos" className="hover:underline">Visítanos</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-mango">Horario</p>
          <p className="mt-3 text-sm text-crema/80">
            Lunes a domingo
            <br />
            10:00 – 21:00
          </p>
        </div>
      </div>

      <p className="pb-6 text-center text-xs text-crema/60">
        © {new Date().getFullYear()} Paletería Poblana · Puebla, México
      </p>
    </footer>
  )
}
