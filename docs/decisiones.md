# Registro de decisiones

Cada vez que el equipo toma una decisión (herramienta, plugin, cambio de diseño) se agrega una fila.

| nro | Fecha | Decisión | Motivo |
|-----|-------|----------|--------|
| 1 | 24/09/26 | Usar CMS WordPress | Se eligió en lugar de Wix porque escala mejor, es de código abierto, cuesta menos a largo plazo y tiene plugins para Mercado Pago |
| 2 | 24/09/26 | Usar Frontend React + Tailwind CSS | Se eligió en lugar de Preact porque tiene un ecosistema más completo (ruteo, estado, formularios), el equipo ya lo conoce y tiene más demanda laboral |
| 3 | 24/09/26 | Usar Express | Se eligió en lugar de Fastify y NestJS porque el equipo ya lo conoce, hay buena documentación para usarlo con Prisma y PostgreSQL, y alcanza para el tráfico de un comercio local |
| 4 | 25/09/26 | Usar como hosting InfinityFree | Tiene un plan gratuito para WordPress y podemos trabajar en equipo sobre un mismo proyecto |
| 5 | 26/09/26 | Usar Vite como herramienta de build del frontend | Se eligió en lugar de Create React App y Next.js porque CRA está discontinuado y Next.js suma renderizado en servidor que no necesitamos; Vite arranca más rápido y genera un build estático simple |
| 6 | 26/09/26 | Usar TypeScript en el frontend | Permite detectar errores en los datos de los productos y en las props de los componentes antes de ejecutar, y es el mismo lenguaje que usa el backend |
| 7 | 27/09/26 | Usar React Router con rutas por hash (`#/productos`) | Se eligió en lugar de las rutas normales (BrowserRouter) porque en un hosting estático las rutas con hash funcionan sin configurar el servidor y no dan error 404 al recargar la página |
| 8 | 27/09/26 | Definir la paleta de colores en el `@theme` de Tailwind | Los colores del logo (bordó y celeste) se cargan en un solo lugar y Tailwind genera las clases (`bg-primary`, `text-secondary`, etc.); así un cambio de color se hace en una sola línea |
| 9 | 28/09/26 | Extraer el frontend del Trabajo Final y adaptarlo a una versión estática (Inicio, Productos y Login) | Se tomó el frontend del proyecto final (React + Tailwind) y se pasaron los productos a datos estáticos, sin backend ni base de datos, para poder visualizarlo y demostrarlo en clase sin levantar el servidor; además, en el TP2 no se pide interoperabilidad con otros sistemas |
| 10 | 28/09/26 | Cargar el catálogo desde un archivo local (`src/data/productos.ts`) | Reemplaza a la API del backend con los mismos datos del seed, y se sumaron teclados, mouse y auriculares para mostrar más variedad de periféricos |
| 11 | 29/09/26 | Guardar las imágenes de los productos dentro del proyecto | Se eligió en lugar de enlazar imágenes de otras páginas porque algunas tenían captcha o podían dejar de estar disponibles; se redujeron a 600 px para que el sitio cargue rápido |
| 12 | 29/09/26 | Filtrar los productos en el navegador | El buscador filtra por texto, categoría, marca y rango de precio sin pedir datos a un servidor; el rango de precio no acepta números negativos |
| 13 | 30/09/26 | Rediseñar el banner del inicio | Se cambió el banner de la plantilla por uno oscuro con los colores del logo, un texto orientado a la venta de productos y cards de Armado de PC y Servicio técnico |
| 14 | 01/10/26 | Mostrar productos destacados al azar en el inicio | Cada vez que se entra al sitio se ven productos distintos, con un botón "Mostrar otros" para sortear de nuevo |
