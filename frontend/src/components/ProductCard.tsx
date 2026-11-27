import { Link } from 'react-router-dom'
import PaletaIlustracion from './PaletaIlustracion'
import { fondoSuave, formatearPrecio } from '../utils'
import type { Producto } from '../types/producto'

interface Props {
  producto: Producto
}

export default function ProductCard({ producto }: Props) {
  const { _id, nombre, precio, descripcion, imagen, color, disponible } = producto

  return (
    <Link
      to={`/catalogo/${_id}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-cafe/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: fondoSuave(color) }}>
        {imagen ? (
          <img
            src={imagen}
            alt={nombre}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid size-full place-items-center">
            <PaletaIlustracion color={color} className="h-[78%] w-auto transition-transform duration-500 group-hover:rotate-6" />
          </div>
        )}

        {disponible ? null : (
          <span className="absolute left-3 top-3 rounded-full bg-cafe/80 px-3 py-1 text-xs font-bold text-crema">
            Agotado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight text-cafe">{nombre}</h3>
          <span className="shrink-0 rounded-full bg-mango/25 px-3 py-1 text-sm font-extrabold tabular-nums text-cafe">
            {formatearPrecio(precio)}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-cafe/70">{descripcion}</p>
      </div>
    </Link>
  )
}
