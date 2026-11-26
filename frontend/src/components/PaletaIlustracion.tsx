import { useId } from 'react'

interface Props {
  color?: string
  className?: string
}

/** Ilustración de una paleta, coloreada según el producto. Se usa cuando no hay `imagen`. */
export default function PaletaIlustracion({ color = '#e4007c', className }: Props) {
  const idBrillo = useId()

  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={idBrillo} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="20" y="6" width="60" height="88" rx="28" fill={color} />
      <rect x="20" y="6" width="60" height="88" rx="28" fill={`url(#${idBrillo})`} />
      <rect x="44" y="90" width="12" height="44" rx="6" fill="#c8a165" />
    </svg>
  )
}
