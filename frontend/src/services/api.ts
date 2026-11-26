import { PRODUCTOS, CATEGORIAS } from '../data/productos'
import type { Categoria, CategoriaId, Producto } from '../types/producto'

// Si VITE_API_URL está definida (archivo .env), se usa el backend real.
// Si no, se usan los datos de ejemplo para trabajar el front de forma independiente.
const API_URL = import.meta.env.VITE_API_URL

const esperar = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

async function pedir<T>(ruta: string): Promise<T> {
  const res = await fetch(`${API_URL}${ruta}`)
  if (!res.ok) {
    throw new Error(`Error ${res.status} al consultar ${ruta}`)
  }
  return res.json() as Promise<T>
}

interface FiltrosProductos {
  categoria?: CategoriaId
}

/** GET /productos — opcionalmente ?categoria=... */
export async function obtenerProductos({ categoria }: FiltrosProductos = {}): Promise<Producto[]> {
  if (!API_URL) {
    await esperar(300)
    return categoria ? PRODUCTOS.filter((p) => p.categoria === categoria) : PRODUCTOS
  }
  const query = categoria ? `?categoria=${encodeURIComponent(categoria)}` : ''
  return pedir<Producto[]>(`/productos${query}`)
}

/** GET /productos/:id */
export async function obtenerProducto(id: string): Promise<Producto> {
  if (!API_URL) {
    await esperar(200)
    const producto = PRODUCTOS.find((p) => p._id === id)
    if (!producto) throw new Error('Producto no encontrado')
    return producto
  }
  return pedir<Producto>(`/productos/${encodeURIComponent(id)}`)
}

/** Las categorías se definen en el front por ahora; se pueden mover a GET /categorias. */
export function obtenerCategorias(): Categoria[] {
  return CATEGORIAS
}
