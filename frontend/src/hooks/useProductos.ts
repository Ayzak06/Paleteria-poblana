import { useEffect, useState } from 'react'
import { obtenerProductos, obtenerProducto } from '../services/api'
import type { Producto } from '../types/producto'

const mensajeDe = (e: unknown) => (e instanceof Error ? e.message : 'Error desconocido')

export function useProductos() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let activo = true
    obtenerProductos()
      .then((data) => { if (activo) setProductos(data) })
      .catch((e: unknown) => { if (activo) setError(mensajeDe(e)) })
      .finally(() => { if (activo) setCargando(false) })
    return () => {
      activo = false
    }
  }, [])

  return { productos, cargando, error }
}

export function useProducto(id: string | undefined) {
  const [producto, setProducto] = useState<Producto | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('Producto no encontrado')
      setCargando(false)
      return
    }
    let activo = true
    setCargando(true)
    setError(null)
    obtenerProducto(id)
      .then((data) => { if (activo) setProducto(data) })
      .catch((e: unknown) => { if (activo) setError(mensajeDe(e)) })
      .finally(() => { if (activo) setCargando(false) })
    return () => {
      activo = false
    }
  }, [id])

  return { producto, cargando, error }
}
