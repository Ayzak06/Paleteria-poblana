const formatoMXN = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' })

export function formatearPrecio(valor: number): string {
  return formatoMXN.format(Number(valor) || 0)
}

/** Quita acentos y pasa a minúsculas para búsquedas tolerantes ("limon" encuentra "Limón"). */
export function normalizar(texto = ''): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

/** Une clases CSS ignorando valores falsos: cx('a', cond && 'b') */
export function cx(...clases: Array<string | false | null | undefined>): string {
  return clases.filter(Boolean).join(' ')
}

/** Fondo suave a partir del color del producto (#rrggbb + 22 de opacidad) */
export function fondoSuave(color = '#e4007c'): string {
  return `${color}22`
}
