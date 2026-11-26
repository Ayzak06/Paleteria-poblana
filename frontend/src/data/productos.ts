// Datos de ejemplo mientras el backend no está listo.
import type { Categoria, Producto } from '../types/producto'

export const CATEGORIAS: Categoria[] = [
  { id: 'paleta-agua', nombre: 'Paletas de agua', emoji: '🍧' },
  { id: 'paleta-leche', nombre: 'Paletas de leche', emoji: '🍦' },
  { id: 'helado', nombre: 'Helados y nieves', emoji: '🍨' },
  { id: 'agua-fresca', nombre: 'Aguas frescas', emoji: '🥤' },
  { id: 'especial', nombre: 'Especialidades', emoji: '⭐' },
]

export const PRODUCTOS: Producto[] = [
  { _id: '1', nombre: 'Mango con chile', categoria: 'paleta-agua', precio: 22, descripcion: 'Mango Ataulfo natural con chile en polvo y un toque de limón.', color: '#ffb627', disponible: true, destacado: true },
  { _id: '2', nombre: 'Limón', categoria: 'paleta-agua', precio: 18, descripcion: 'Refrescante paleta de limón verde, ácida en su punto.', color: '#7ac143', disponible: true },
  { _id: '3', nombre: 'Fresa natural', categoria: 'paleta-agua', precio: 20, descripcion: 'Con trozos de fresa de temporada.', color: '#e63946', disponible: true },
  { _id: '4', nombre: 'Tamarindo', categoria: 'paleta-agua', precio: 20, descripcion: 'Tamarindo con su punto agridulce de siempre.', color: '#8b5a2b', disponible: true },
  { _id: '5', nombre: 'Rompope', categoria: 'paleta-leche', precio: 25, descripcion: 'Receta conventual poblana, cremosa y aromática.', color: '#f4d58d', disponible: true, destacado: true },
  { _id: '6', nombre: 'Nuez', categoria: 'paleta-leche', precio: 26, descripcion: 'Base de leche con nuez picada.', color: '#c8a165', disponible: true },
  { _id: '7', nombre: 'Chocolate', categoria: 'paleta-leche', precio: 24, descripcion: 'Chocolate de mesa con canela.', color: '#5c3317', disponible: false },
  { _id: '8', nombre: 'Nieve de limón', categoria: 'helado', precio: 30, descripcion: 'Nieve tradicional de garrafa, por bola.', color: '#b5e48c', disponible: true },
  { _id: '9', nombre: 'Helado de vainilla', categoria: 'helado', precio: 32, descripcion: 'Vainilla de Papantla, por bola.', color: '#fff1c1', disponible: true },
  { _id: '10', nombre: 'Agua de horchata', categoria: 'agua-fresca', precio: 25, descripcion: 'Horchata de arroz con canela, 1 litro.', color: '#f1e3c6', disponible: true },
  { _id: '11', nombre: 'Agua de jamaica', categoria: 'agua-fresca', precio: 25, descripcion: 'Flor de jamaica natural, 1 litro.', color: '#9d0208', disponible: true },
  { _id: '12', nombre: 'Paleta de mole poblano', categoria: 'especial', precio: 35, descripcion: 'Edición especial: chocolate, chiles y especias del mole, en versión dulce.', color: '#4a1c0f', disponible: true, destacado: true },
]
