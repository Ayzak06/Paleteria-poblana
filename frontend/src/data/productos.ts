// Datos de ejemplo mientras el backend no está listo.
import type { Categoria, Producto } from '../types/producto'

export const CATEGORIAS: Categoria[] = [
  { id: 'paleta-agua', nombre: 'Paletas de agua', emoji: '🍧', imagen: '/img/paleta-mango.jpg' },
  { id: 'paleta-leche', nombre: 'Paletas de leche', emoji: '🍦', imagen: '/img/paleta-chocolate.jpg' },
  { id: 'helado', nombre: 'Helados y nieves', emoji: '🍨', imagen: '/img/helado-vainilla.jpg' },
  { id: 'agua-fresca', nombre: 'Aguas frescas', emoji: '🥤', imagen: '/img/agua-jamaica.jpg' },
  { id: 'especial', nombre: 'Especialidades', emoji: '⭐', imagen: '/img/paleta-jamaica.jpg' },
]

export const PRODUCTOS: Producto[] = [
  { _id: '1', nombre: 'Mango con chile', categoria: 'paleta-agua', precio: 22, descripcion: 'Mango Ataulfo natural con chile en polvo y un toque de limón.', imagen: '/img/paleta-mango.jpg', color: '#ffb627', disponible: true, destacado: true },
  { _id: '2', nombre: 'Limón', categoria: 'paleta-agua', precio: 18, descripcion: 'Refrescante paleta de limón verde, ácida en su punto.', imagen: '/img/paleta-limon.jpg', color: '#b5e48c', disponible: true },
  { _id: '3', nombre: 'Fresa natural', categoria: 'paleta-agua', precio: 20, descripcion: 'Con trozos de fresa de temporada.', imagen: '/img/paleta-fresa.jpg', color: '#e63946', disponible: true, destacado: true },
  { _id: '4', nombre: 'Tamarindo', categoria: 'paleta-agua', precio: 20, descripcion: 'Tamarindo con su punto agridulce de siempre.', imagen: '/img/paleta-tamarindo.jpg', color: '#d97706', disponible: true },
  { _id: '5', nombre: 'Paleta de chocolate', categoria: 'paleta-leche', precio: 24, descripcion: 'Chocolate de mesa con canela, cubierta crujiente.', imagen: '/img/paleta-chocolate.jpg', color: '#5c3317', disponible: true },
  { _id: '6', nombre: 'Paleta de rompope', categoria: 'paleta-leche', precio: 25, descripcion: 'Receta conventual poblana, cremosa y aromática.', imagen: '/img/nieve-rompope.jpg', color: '#f4d58d', disponible: true, destacado: true },
  { _id: '7', nombre: 'Nieve de vainilla', categoria: 'helado', precio: 32, descripcion: 'Vainilla de Papantla, por bola.', imagen: '/img/helado-vainilla.jpg', color: '#fff1c1', disponible: true },
  { _id: '8', nombre: 'Helado de chocolate', categoria: 'helado', precio: 32, descripcion: 'Chocolate oscuro con trocitos de cacao, en cono.', imagen: '/img/helado-chocolate.jpg', color: '#6b3f23', disponible: true },
  { _id: '9', nombre: 'Helado de fresa', categoria: 'helado', precio: 30, descripcion: 'Fresa de huerto con crema, en cono de barquillo.', imagen: '/img/helado-cono.jpg', color: '#f7a8b8', disponible: true },
  { _id: '10', nombre: 'Agua de horchata', categoria: 'agua-fresca', precio: 25, descripcion: 'Horchata de arroz con canela, 1 litro.', imagen: '/img/agua-horchata.jpg', color: '#f1e3c6', disponible: true },
  { _id: '11', nombre: 'Agua de jamaica', categoria: 'agua-fresca', precio: 25, descripcion: 'Flor de jamaica natural, 1 litro.', imagen: '/img/agua-jamaica.jpg', color: '#9d0208', disponible: true },
  { _id: '12', nombre: 'Paleta de jamaica', categoria: 'especial', precio: 35, descripcion: 'Edición especial: flor de jamaica y un toque de jengibre.', imagen: '/img/paleta-jamaica.jpg', color: '#7b2d8e', disponible: true, destacado: true },
]
