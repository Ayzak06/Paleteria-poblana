import type { ReactNode } from 'react'
import styles from './Visitanos.module.scss'

interface Sucursal {
  direccion: string
  telefono: string
  /** Formato internacional sin "+", para el link wa.me */
  whatsapp: string
  horario: { dias: string; horas: string }[]
}

// Actualiza estos datos con la información real de la sucursal.
const SUCURSAL: Sucursal = {
  direccion: 'Calle de los Dulces 123, Centro Histórico, Puebla, Pue.',
  telefono: '222 000 0000',
  whatsapp: '522220000000',
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 – 21:00' },
    { dias: 'Sábado y domingo', horas: '09:00 – 22:00' },
  ],
}

export default function Visitanos() {
  const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(SUCURSAL.direccion)}&output=embed`

  return (
    <section className={styles.visitanos}>
      <h1 className={styles.titulo}>Visítanos</h1>
      <p className={styles.intro}>
        Desde hace años preparamos nuestras paletas con recetas de familia y fruta fresca del mercado.
        Pasa por la tuya.
      </p>

      <div className={styles.contenido}>
        <div className={styles.bloques}>
          <Bloque titulo="Dirección">{SUCURSAL.direccion}</Bloque>

          <Bloque titulo="Horario">
            <ul className={styles.horario}>
              {SUCURSAL.horario.map((h) => (
                <li key={h.dias}>
                  <span>{h.dias}</span>
                  <strong>{h.horas}</strong>
                </li>
              ))}
            </ul>
          </Bloque>

          <Bloque titulo="Contacto">
            <p>
              Tel.{' '}
              <a className={styles.telefono} href={`tel:${SUCURSAL.telefono.replace(/\s/g, '')}`}>
                {SUCURSAL.telefono}
              </a>
            </p>
            <a
              href={`https://wa.me/${SUCURSAL.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={`btn btn--limon ${styles.whatsapp}`}
            >
              Escríbenos por WhatsApp
            </a>
          </Bloque>
        </div>

        <iframe
          title="Mapa de la sucursal"
          src={mapaUrl}
          className={styles.mapa}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

function Bloque({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className={styles.bloque}>
      <p className={styles.etiqueta}>{titulo}</p>
      <div className={styles.bloqueContenido}>{children}</div>
    </div>
  )
}
