# TP2 – CMS y Frameworks Web · JS Computación

Trabajo Práctico N°2 (2026) de la materia **Frameworks e Interoperabilidad**.
El objetivo es investigar, elegir y adaptar un **Sistema de Gestión de Contenidos (CMS)** y un **Framework web** aplicados al dominio del Trabajo Final de la Tecnicatura Web.

---

## Índice

1. [Equipo](#equipo)
2. [Dominio: JS Computación](#dominio-js-computación)
3. [Consigna](#consigna)
4. [Hosting](#hosting)
5. [Estructura](#Estructura)
6. [Cómo correr el frontend estático](#cómo-correr-el-frontend-estático)


---

## Equipo

**Grupo:** QWERTY

| Nombre | Legajo | Usuario GitHub |
|--------|--------|----------------|
| Lucas San Segundo | FAI-1921 | [@lucasanse](https://github.com/lucasanse) |
| Joaquín Ignacio Castillo | FAI-5521 | [@naxoCastt](https://github.com/naxoCastt) |

**Docentes:** Marcos Cruz · Jorge Navarro · Lara Acuña Bravo

**Tablero de trabajo (Kanban):** [_link al tablero compartido con los docentes_](https://github.com/users/Lucasanse/projects/6)

---

## Dominio: JS Computación

**JS Computación** es un comercio de la ciudad de **Allen** especializado en la venta de computadoras, sistemas informáticos, servicios técnicos e insumos tecnológicos. Atiende a clientes particulares y empresas de toda la región del Alto Valle.

El sistema busca digitalizar y centralizar el proceso comercial del negocio, desde la publicación y búsqueda de productos hasta la gestión administrativa de ventas, entregas y solicitudes de servicio técnico. La idea es ofrecer una experiencia simple tanto para el cliente como para el equipo administrador.

### Funcionalidades del proyecto final

- **Catálogo de productos** (computadoras, insumos y periféricos) con un buscador y filtros para encontrar productos rápido.
- **Solicitud de servicio técnico** (reparación, mantenimiento, armado, etc.), asistida por una herramienta de IA que ayuda al usuario a describir el problema y sugiere un posible diagnóstico. Los administradores gestionan las solicitudes y, si se confirman, el servicio se realiza en el local.
- **Pagos** mediante la API de Mercado Pago.
- **Retiro en el local**, con aviso por WhatsApp de los estados de la entrega (confirmación, preparación, listo para retirar, entregado).
- **Panel de administración** con control total del catálogo (alta, baja y modificación), del stock, de las solicitudes de servicio técnico y de las ventas, con seguimiento de cada pedido hasta la entrega.

### Actores

| Actor | Acciones |
|-------|----------|
| Cliente | Navega el catálogo, busca productos, compra y solicita servicio técnico. |
| Administrador | Gestiona productos y stock, sigue las ventas y responde las solicitudes de servicio. |

---

## Consigna

### Pautas de trabajo

1. **Tablero colaborativo Kanban** GitHub Projects.
2. **Trabajo en equipo con git**: el repositorio se comparte con la cátedra y debe reflejar las decisiones tomadas durante el desarrollo (documentación de los cambios).
   - Las ramas permiten desarrollar partes del proyecto en paralelo, sin pisarse.

### Actividades

1. **Investigar y elegir un CMS y un Framework** aplicados al dominio del proyecto final.
   - La elección se fundamenta en la exposición oral.
   - Se justifica por qué se descartaron **al menos dos (2) herramientas similares** (otro CMS y otro framework).
2. **Elegir un template CSS o tema** acorde al dominio y modificarlo:
   - a. Mostrar el CMS/framework y el template **sin modificaciones** (para comparar).
   - b. Listar y mostrar los cambios realizados.
3. **Crear y/o modificar al menos tres (3) módulos**, describiendo sus características y funcionalidad, incluyendo plugins, librerías, etc.
   - En este práctico **no** se agrega interoperabilidad con otros sistemas.
4. **Explicación y demostración en vivo** del trabajo a toda la clase.

**Fecha de entrega:** viernes 02/10/26· **Fecha de exposición:** miércoles 07/10/26

---


## Hosting

El sitio en WordPress se aloja en **[InfinityFree](https://www.infinityfree.com/)**, que tiene un plan gratuito y planes pagos con más prestaciones.

- **URL del sitio:** https://jscomputacion.infinityfree.io/

---

## Estructura

```
.
├── README.md                    # Presentación del proyecto, stack, forma de trabajo
├── docs/
│   ├── decisiones.md            # Registro de decisiones (nro, fecha, decisión, motivo)
│   ├── informe/
│   │   └── TP2_Informe.pdf       # Informe final (máx. 20 páginas)
│   ├── presentacion/
│   │   └── TP2_presentacion.pptx      # Diapositivas de la exposición
│   ├── capturas/
│       ├── original/            # Template sin modificar (el "antes")
│       │   ├── home-escritorio.png
│       │   └── home-movil.png
│       └── modificado/          # Template personalizado (el "después")
│              
└── src/                         # Código (se suma cuando haya)
    ├── wordpress/               # Tema hijo, plugins propios o exportación del sitio
    ├── frontend/                # React + Tailwind (proyecto final)
    └── backend/                 # Node.js + Express + Prisma (proyecto final)
```

| Carpeta / archivo | Contenido |
|-------------------|-----------|
| `docs/decisiones.md` | Una fila por cada decisión tomada (herramienta, plugin, cambio de diseño). |
| `docs/informe/` | Informe final del TP |
| `docs/presentacion/` | Diapositivas de la exposición oral. |
| `docs/capturas/original/` | Capturas del template sin modificar. |
| `docs/capturas/modificado/` | Capturas del template personalizado, con el mismo nombre que su "antes" para compararlas. |
| `src/wordpress/` | Tema hijo y plugins propios si se modifica código, o exportación del sitio. |
| `src/frontend/` | Código del proyecto final (React + Express). |

---

## Cómo correr el frontend estático

En `src/frontend/` está el frontend del Trabajo Final (React + Vite + Tailwind CSS) adaptado a una versión **estática**. Los productos están en un archivo local (`src/data/productos.ts`), así que no hace falta levantar el backend ni la base de datos. Incluye las páginas **Inicio**, **Productos** (con buscador y filtros) y **Login**.

**Requisito:** tener instalado [Node.js](https://nodejs.org/) 20 o superior.

1. Entrar a la carpeta del frontend:
   ```bash
   cd src/frontend
   ```
2. Instalar las dependencias (solo la primera vez):
   ```bash
   npm install
   ```
3. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador la URL que muestra la consola (por defecto http://localhost:5173).
5. Para detenerlo, presionar `Ctrl + C` en la terminal.

**Versión compilada (opcional):** `npm run build` genera la carpeta `dist/`, que se puede subir a cualquier hosting estático. Con `npm run preview` se prueba localmente.
