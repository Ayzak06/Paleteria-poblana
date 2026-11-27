import { useId } from 'react'

interface Props {
  color?: string
  className?: string
}

/** Ilustración de una paleta, coloreada según el producto. Se usa cuando no hay `imagen`. */
export default function PaletaIlustracion({ color = '#e4007c', className }: Props) {
  const id = useId()
  const cuerpo = `${id}-cuerpo`
  const palo = `${id}-palo`

  return (
    <svg viewBox="0 0 120 180" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={cuerpo} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.32" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id={palo} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b98f52" />
          <stop offset="0.5" stopColor="#ddb97e" />
          <stop offset="1" stopColor="#a97f45" />
        </linearGradient>
      </defs>

      <ellipse cx="60" cy="172" rx="30" ry="5" fill="#2f1b10" opacity="0.12" />
      <rect x="53" y="112" width="14" height="56" rx="7" fill={`url(#${palo})`} />
      <rect x="20" y="8" width="80" height="112" rx="36" fill={color} />
      <rect x="20" y="8" width="80" height="112" rx="36" fill={`url(#${cuerpo})`} />
      <ellipse cx="45" cy="42" rx="14" ry="22" fill="#fff" opacity="0.18" transform="rotate(-18 45 42)" />
      <g fill="#fff" opacity="0.28">
        <circle cx="78" cy="34" r="2.4" />
        <circle cx="87" cy="52" r="1.8" />
        <circle cx="70" cy="62" r="1.5" />
        <circle cx="80" cy="78" r="2" />
      </g>
    </svg>
  )
}
