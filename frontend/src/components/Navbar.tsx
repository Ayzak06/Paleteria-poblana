import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cx } from '../utils'
import styles from './Navbar.module.scss'

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
  cx(styles.enlace, isActive && styles.activo)

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.marca} onClick={cerrar}>
          <img src="/favicon.svg" alt="" className={styles.logo} />
          <span className={styles.nombre}>
            Paletería <span className={styles.nombreAzul}>Poblana</span>
          </span>
        </Link>

        <ul className={styles.menuEscritorio}>
          {ENLACES.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} end={e.to === '/'} className={claseEnlace}>
                {e.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.hamburguesa}
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul className={styles.menuMovil}>
          {ENLACES.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} end={e.to === '/'} className={claseEnlace} onClick={cerrar}>
                {e.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
