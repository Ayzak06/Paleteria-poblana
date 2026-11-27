import type { ReactNode } from 'react'
import { contenedor } from '../utils'

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
    <>
      <header className="relative isolate overflow-hidden">
        <img
          src="/img/vitrina.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-talavera/95 via-talavera/80 to-talavera/40" aria-hidden="true" />

        <div className={`${contenedor} py-16 text-crema sm:py-24`}>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-mango">Visítanos</p>
          <h1 className="mt-2 max-w-xl font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none">
            Pasa por la tuya
          </h1>
          <p className="mt-4 max-w-lg text-crema/80">
            Desde hace años preparamos nuestras paletas con recetas de familia y fruta fresca del mercado.
            Estamos en el Centro Histórico, a dos calles del zócalo.
          </p>
        </div>
      </header>

      <section className={`${contenedor} py-14`}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid content-start gap-5">
            <Bloque titulo="Dirección">
              <p>{SUCURSAL.direccion}</p>
            </Bloque>

            <Bloque titulo="Horario">
              <ul className="grid gap-2">
                {SUCURSAL.horario.map((h) => (
                  <li key={h.dias} className="flex justify-between gap-4">
                    <span className="text-cafe/75">{h.dias}</span>
                    <strong className="tabular-nums">{h.horas}</strong>
                  </li>
                ))}
              </ul>
            </Bloque>

            <Bloque titulo="Contacto">
              <p>
                Tel.{' '}
                <a
                  className="font-bold hover:underline"
                  href={`tel:${SUCURSAL.telefono.replace(/\s/g, '')}`}
                >
                  {SUCURSAL.telefono}
                </a>
              </p>
              <a
                href={`https://wa.me/${SUCURSAL.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-lima px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </Bloque>
          </div>

          <figure className="self-start overflow-hidden rounded-3xl shadow-card ring-1 ring-cafe/5">
            <img
              src="/img/hero.jpg"
              alt="Paletas de fresa y mango recién hechas sobre una tabla de madera"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>

        <iframe
          title="Mapa de la sucursal"
          src={mapaUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-8 h-80 w-full rounded-3xl border-0 shadow-card ring-1 ring-cafe/10"
        />
      </section>
    </>
  )
}

function Bloque({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-cafe/5">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-rosa">{titulo}</p>
      <div className="mt-2 text-cafe">{children}</div>
    </div>
  )
}
