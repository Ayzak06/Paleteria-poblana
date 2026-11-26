// Tipos compartidos. Ajusta la interfaz Producto al esquema real de tu colección en MongoDB.

export type CategoriaId =
  | 'paleta-agua'
  | 'paleta-leche'
  | 'helado'
  | 'agua-fresca'
  | 'especial'

export interface Categoria {
  id: CategoriaId
  nombre: string
  emoji: string
  /** Foto que se muestra en el círculo de categorías. */
  imagen: string
}

export interface Producto {
  _id: string
  nombre: string
  categoria: CategoriaId
  precio: number
  descripcion?: string
  /** URL de la foto. Si no viene, se dibuja una paleta del color indicado. */
  imagen?: string
  /** Color hexadecimal, p. ej. "#ffb627" */
  color?: string
  disponible: boolean
  /** Si es true, aparece en la página de inicio */
  destacado?: boolean
}
