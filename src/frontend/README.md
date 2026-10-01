# Frontend estático · JS Computación

Versión **estática** del frontend del proyecto final (React + Vite + Tailwind), sin backend.
Incluye las páginas **Inicio**, **Productos** y **Login**.

- Los productos están en [`src/data/productos.ts`](src/data/productos.ts). Salen del seed del backend, más teclados, mouse y auriculares nuevos.
- Las imágenes están en [`public/productos/`](public/productos/). Las de teclados, mouse y auriculares nuevos, y la de la RTX 5060 Ti, son de Wikimedia Commons.
- El buscador filtra en el navegador por texto, categoría, marca y rango de precio (no acepta negativos).
- El login y el carrito son solo visuales.

## Cómo abrirlo

Requisito: [Node.js](https://nodejs.org/) 20 o superior.

```bash
cd src/frontend
npm install
npm run dev
```

Abrir la URL que muestra la consola (por defecto http://localhost:5173).

### Versión compilada (para subir a un hosting estático)

```bash
npm run build
npm run preview
```

El resultado queda en `dist/` y se puede subir tal cual a cualquier hosting estático.
