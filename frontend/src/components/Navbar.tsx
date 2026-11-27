import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cx, contenedor } from '../utils'

interface Enlace {
  to: string
  label: string
}

const ENLACES: Enlace[] = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/visitanos', label: 'Visítanos' },
]

const claseEnlace = ({ isActive }: { isActive: boolean }) =>
  cx(
    'block rounded-full px-4 py-2 text-sm font-bold transition-colors',
    isActive ? 'bg-rosa text-white' : 'text-cafe hover:bg-rosa-suave',
  )

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="sticky top-0 z-40 border-b border-rosa/20 bg-crema/80 backdrop-blur-md">
      <nav className={cx(contenedor, 'flex h-16 items-center justify-between gap-4')} aria-label="Principal">
        <Link to="/" className="flex items-center gap-2.5" onClick={cerrar}>
          <img src="/favicon.svg" alt="" width={36} height={36} className="size-9" />
          <span className="font-display text-xl leading-none tracking-tight">
            <span className="text-rosa">Paletería</span>{' '}
            <span className="text-talavera">Poblana</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {ENLACES.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} end={e.to === '/'} className={claseEnlace}>
                {e.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/visitanos"
          className="hidden rounded-full bg-talavera px-4 py-2 text-sm font-bold text-crema transition-colors hover:bg-talavera/90 md:inline-block"
        >
          Cómo llegar
        </Link>

        <button
          type="button"
          className="rounded-xl p-2 text-cafe transition-colors hover:bg-rosa-suave md:hidden"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {abierto ? (
        <div id="menu-movil" className={cx(contenedor, 'pb-4 md:hidden')}>
          <ul className="flex flex-col gap-1 rounded-2xl bg-white p-2 shadow-card ring-1 ring-cafe/5">
            {ENLACES.map((e) => (
              <li key={e.to}>
                <NavLink to={e.to} end={e.to === '/'} className={claseEnlace} onClick={cerrar}>
                  {e.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
