# Registro de decisiones

Cada vez que el equipo toma una decisión (herramienta, plugin, cambio de diseño) se agrega una fila.

| nro | Fecha | Decisión | Motivo |
|-----|-------|----------|--------|
| 1 | 24/09/26 | Usar CMS WordPress | Se eligió en lugar de Wix porque escala mejor, es de código abierto, cuesta menos a largo plazo y tiene plugins para Mercado Pago |
| 2 | 24/09/26 | Usar Frontend React + Tailwind CSS | Se eligió en lugar de Preact porque tiene un ecosistema más completo (ruteo, estado, formularios), el equipo ya lo conoce y tiene más demanda laboral |
| 3 | 24/09/26 | Usar Express | Se eligió en lugar de Fastify y NestJS porque el equipo ya lo conoce, hay buena documentación para usarlo con Prisma y PostgreSQL, y alcanza para el tráfico de un comercio local |
| 4 | 25/09/26 | Usar como hosting InfinityFree | Tiene un plan gratuito para WordPress y podemos trabajar en equipo sobre un mismo proyecto |
| 5 | 26/09/26 | Usar Vite como herramienta de build del frontend | Se eligió en lugar de Create React App y Next.js porque CRA está discontinuado y Next.js suma renderizado en servidor que no necesitamos; Vite arranca más rápido y genera un build estático simple |
| 6 | 26/09/26 | React: Usar TypeScript en el frontend | Permite detectar errores en los datos de los productos y en las props de los componentes antes de ejecutar, y es el mismo lenguaje que usa el backend. Además, tiene mucha utilidad en el mercado. |
| 7 | 27/09/26 | React: Definir la paleta de colores en el `@theme` de Tailwind | Permite usar los colores del logo de forma consistente en todos los componentes desde un único lugar |
| 8 | 28/09/26 | React: Extraer el frontend del Trabajo Final y adaptarlo a una versión estática (Inicio, Productos y Login) | Se tomó el frontend del proyecto final (React + Tailwind) y se pasaron los productos a datos estáticos, sin backend ni base de datos, para poder visualizarlo y demostrarlo en clase sin levantar el servidor; además, en el TP2 no se pide interoperabilidad con otros sistemas |
| 9 | 28/09/26 | React: Cargar el catálogo desde un archivo local (`src/data/productos.ts`) | Reemplaza a la API del backend con los mismos datos del seed, y se sumaron teclados, mouse y auriculares para mostrar más variedad de periféricos |
| 10 | 29/09/26 | React: Guardar las imágenes de los productos dentro del proyecto | Se eligió en lugar de enlazar imágenes de otras páginas porque algunas tenían captcha o podían dejar de estar disponibles; se redujeron a 600 px para que el sitio cargue rápido |
| 11 | 29/09/26 | React: Filtrar los productos en el navegador | El buscador filtra por texto, categoría, marca y rango de precio sin pedir datos a un servidor; el rango de precio no acepta números negativos |
| 12 | 30/09/26 | React: Rediseñar el banner del inicio | Se cambió el banner por uno oscuro con los colores del logo, un texto orientado a la venta de productos y cards de Armado de PC y Servicio técnico |
| 13 | 30/09/26 | React: Mostrar productos destacados al azar en el inicio | Cada vez que se entra al sitio se ven productos random, no se implementó un sistema de productos avanzados |
| 14 | 30/09/26 | WordPress: Dejar de usar InfinityFree y trabajar WordPress con la herramienta Local | El sitio en InfinityFree se crasheó y no se pudo seguir usando, por lo que se pasó a Local, una aplicación de escritorio que instala sitios WordPress en la propia computadora sin necesidad de hosting (reemplaza la decisión 4) |
| 15 | 30/09/26 | WordPress: Descartar Elementor y usar el editor de plantillas de WordPress | En su versión gratuita Elementor está orientado a sitios simples (blogs, institucionales) y varias herramientas que necesita un e-commerce son pagas; el editor de WordPress ya brinda una base para empezar |
| 16 | 30/09/26 | WordPress: Usar el tema por defecto de WordPress como template | Fue el único que funcionó en el entorno local, genera páginas responsive sin configuración adicional y es compatible con WooCommerce |
| 17 | 30/09/26 | WordPress: Usar WooCommerce y plugins de sus creadores para el catálogo en WordPress | Permiten cargar los productos y mostrarlos en pantalla con buscador, y WooCommerce tiene el plugin oficial de Mercado Pago |
| 18 | 01/10/26 | WordPress: Renovar casi toda la interfaz del template de WordPress | El template original no se ajustaba a lo buscado: se aplicaron los colores del logo, se agregaron un banner, una sección de productos destacados y una navbar con las secciones del dominio, el acceso a la cuenta y el carrito |
| 19 | 01/10/26 | WordPress: Login en WordPress con los templates propios y un footer acorde al sitio | El editor de plantillas ofrece todo lo necesario para resolverlo sin plugins adicionales; solo se ajustaron los colores |
| 20 | 01/10/26 | WordPress: Login en React como componente propio, con footer oscuro y opción "Recuérdame" | Se tomó como referencia el login del Trabajo Final con la paleta del `@theme`; el footer muestra el logo y los apartados Tienda, Cuenta y Local; se redujo el espacio entre la navbar, el login y el footer |
| 21 | 01/10/26 | React: Mostrar las cards de productos en 2 columnas y más compactas en mobile | En una sola columna las cards ocupaban todo el ancho de la pantalla y se veían demasiado grandes |
| 23 | 01/10/26 | WordPress y React: Se completaron los 3 módulos: Página de inicio, Pantalla de login y Catálogo de productos | Cada módulo se desarrolló tanto en WordPress como en React |
| 24 | 02/10/26 | Finalización y entrega del informe | Se elaboró el informe solicitado por la catedra luego de recompilar todo lo escrito en un borrador |
