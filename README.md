# Paletería Poblana

Sitio web con el catálogo público de la paletería.

```
paleteria_poblana/
├── frontend/   → React + Vite + Tailwind CSS
└── backend/    → Node.js + MongoDB (pendiente)
```

## Correr el front

Requisitos: Node.js 20 o superior.

```bash
cd frontend
npm install
npm run dev
```

Abre http://localhost:5173

## Conectar con el backend

Mientras no exista la API, el front usa datos de ejemplo (`frontend/src/data/productos.ts`).
Cuando el backend esté listo:

1. Copia `frontend/.env.example` como `frontend/.env`.
2. Define `VITE_API_URL=http://localhost:3000/api` (o la URL de tu API).
3. Reinicia `npm run dev`.

El front espera estos endpoints:

| Método | Ruta                        | Respuesta                    |
|--------|-----------------------------|------------------------------|
| GET    | `/productos`                | Arreglo de productos         |
| GET    | `/productos?categoria=...`  | Productos de una categoría   |
| GET    | `/productos/:id`            | Un producto                  |

Forma de cada producto (documento de Mongo). Está tipada en `frontend/src/types/producto.ts`:

```json
{
  "_id": "665f...",
  "nombre": "Mango con chile",
  "categoria": "paleta-agua",
  "precio": 22,
  "descripcion": "Mango Ataulfo natural con chile...",
  "imagen": "https://...",   // opcional; si falta se dibuja una paleta del color indicado
  "color": "#ffb627",        // opcional
  "disponible": true,
  "destacado": true          // aparece en la página de inicio
}
```

Categorías usadas: `paleta-agua`, `paleta-leche`, `helado`, `agua-fresca`, `especial`
(definidas en `frontend/src/data/productos.ts`).

> En el backend habilita CORS para `http://localhost:5173` durante el desarrollo.

## Estructura del front

```
frontend/src/
├── styles/
│   ├── _variables.scss   colores, fuentes, medidas, breakpoints
│   ├── _mixins.scss      desde(md), contenedor, titulo, tarjeta, grid-productos...
│   └── global.scss       reset, botones .btn, .enlace, .papel-picado
├── components/   Navbar, Footer, ProductCard, PaletaIlustracion, Estado
│                 (cada uno con su Componente.module.scss)
├── pages/        Inicio, Catalogo, ProductoDetalle, Visitanos, NoEncontrado
│                 (cada una con su Pagina.module.scss)
├── types/        producto.ts → interfaces Producto y Categoria
├── hooks/        useProductos, useProducto
├── services/     api.ts → todas las llamadas al backend
├── data/         productos.ts → datos de ejemplo y categorías
└── utils.ts      formato de precio, búsqueda sin acentos, cx()
```

### Estilos

Cada componente importa su módulo SCSS y usa las variables y mixins compartidos:

```scss
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.mi-clase {
  color: $rosa;
  @include desde(md) { ... }
}
```

En el TSX las clases con guion se usan en camelCase: `.nombre-azul` → `styles.nombreAzul`.

### Scripts

- `npm run dev` → servidor de desarrollo
- `npm run typecheck` → revisa los tipos de TypeScript
- `npm run build` → revisa tipos y genera `dist/`
