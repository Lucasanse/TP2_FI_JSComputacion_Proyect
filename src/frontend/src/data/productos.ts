// Catálogo ESTÁTICO: reemplaza a la API del backend (GET /api/productos).
// Los datos salen del seed del BE (JS-Proyect-BE/prisma/seed.ts) + teclados, mouse y auriculares nuevos.
// Las imágenes están en public/productos/.

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  marca: string;
  precio: number;
  stock: number;
  imagenUrl: string;
  categoria: string;
}

const img = (archivo: string) => `${import.meta.env.BASE_URL}productos/${archivo}`;

export const PRODUCTOS: Producto[] = [
  // ── Teclados (nuevos) ────────────────────────────────────────────
  { id: 1, categoria: "Teclados", nombre: "Teclado Mecánico K95 RGB", marca: "Corsair", precio: 120000, stock: 18,
    descripcion: "Teclado mecánico full size con iluminación RGB y teclas macro.", imagenUrl: img("teclado-mecanico-k95.jpg") },
  { id: 2, categoria: "Teclados", nombre: "Teclado Gamer BlackWidow", marca: "Razer", precio: 135000, stock: 9,
    descripcion: "Switches mecánicos verdes, táctiles y con clic.", imagenUrl: img("teclado-razer-blackwidow.jpg") },
  { id: 3, categoria: "Teclados", nombre: "Teclado G PRO TKL", marca: "Logitech", precio: 145000, stock: 12,
    descripcion: "Formato tenkeyless pensado para esports.", imagenUrl: img("teclado-logitech-g-pro-tkl.jpg") },
  { id: 4, categoria: "Teclados", nombre: "Teclado Mecánico K4 Inalámbrico", marca: "Keychron", precio: 110000, stock: 6,
    descripcion: "Teclado mecánico 96% con Bluetooth y cable USB-C.", imagenUrl: img("teclado-keychron-k4.jpg") },
  { id: 5, categoria: "Teclados", nombre: "Teclado MX Keys", marca: "Logitech", precio: 125000, stock: 0,
    descripcion: "Teclado inalámbrico retroiluminado para oficina.", imagenUrl: img("teclado-logitech-mx-keys.jpg") },

  // ── Mouse (nuevos) ───────────────────────────────────────────────
  { id: 6, categoria: "Mouse", nombre: "Mouse Gamer G203", marca: "Logitech", precio: 25000, stock: 30,
    descripcion: "Mouse gamer con sensor de 8000 DPI e iluminación RGB.", imagenUrl: img("mouse-gamer-g203.jpg") },
  { id: 7, categoria: "Mouse", nombre: "Mouse DeathAdder Elite", marca: "Razer", precio: 60000, stock: 15,
    descripcion: "Diseño ergonómico y sensor óptico de 16000 DPI.", imagenUrl: img("mouse-razer-deathadder.jpg") },
  { id: 8, categoria: "Mouse", nombre: "Mouse Inalámbrico G305", marca: "Logitech", precio: 48000, stock: 22,
    descripcion: "Mouse inalámbrico Lightspeed liviano y con gran autonomía.", imagenUrl: img("mouse-logitech-g305.jpg") },
  { id: 9, categoria: "Mouse", nombre: "Mouse PRO X Superlight 2", marca: "Logitech", precio: 210000, stock: 4,
    descripcion: "Mouse inalámbrico ultraliviano de 60 g para esports.", imagenUrl: img("mouse-logitech-superlight-2.jpg") },
  { id: 10, categoria: "Mouse", nombre: "Mouse MX Master 3S", marca: "Logitech", precio: 140000, stock: 0,
    descripcion: "Mouse ergonómico inalámbrico para productividad.", imagenUrl: img("mouse-mx-master-3s.jpg") },

  // ── Auriculares (nuevos) ─────────────────────────────────────────
  { id: 11, categoria: "Auriculares", nombre: "Auriculares HyperX Cloud II", marca: "HyperX", precio: 95000, stock: 20,
    descripcion: "Auriculares gamer con sonido envolvente 7.1.", imagenUrl: img("auriculares-hyperx-cloud-ii.jpg") },
  { id: 12, categoria: "Auriculares", nombre: "Auriculares Gamer G35", marca: "Logitech", precio: 85000, stock: 7,
    descripcion: "Headset 7.1 con micrófono desmontable y teclas G.", imagenUrl: img("auriculares-logitech-g35.jpg") },
  { id: 13, categoria: "Auriculares", nombre: "Auriculares HD 25", marca: "Sennheiser", precio: 170000, stock: 5,
    descripcion: "Auriculares cerrados de monitoreo, livianos y resistentes.", imagenUrl: img("auriculares-sennheiser-hd25.jpg") },
  { id: 14, categoria: "Auriculares", nombre: "Auriculares HD 800 S", marca: "Sennheiser", precio: 1900000, stock: 2,
    descripcion: "Auriculares abiertos de alta fidelidad para audiófilos.", imagenUrl: img("auriculares-sennheiser-hd800s.jpg") },

  // ── Componentes ──────────────────────────────────────────────────
  { id: 15, categoria: "Procesadores", nombre: "Ryzen 5 7600", marca: "AMD", precio: 320000, stock: 10,
    descripcion: "Procesador de 6 núcleos para gaming y uso general.", imagenUrl: img("ryzen-5-7600.jpg") },
  { id: 16, categoria: "Procesadores", nombre: "Core i7-14700K", marca: "Intel", precio: 650000, stock: 0,
    descripcion: "Procesador de 20 núcleos de alto rendimiento.", imagenUrl: img("core-i7-14700k.jpg") },
  { id: 17, categoria: "Procesadores", nombre: "Core i5-14400F", marca: "Intel", precio: 290000, stock: 14,
    descripcion: "Procesador de 10 núcleos sin gráficos integrados.", imagenUrl: img("core-i5-14400f.jpg") },
  { id: 18, categoria: "Placas de Video", nombre: "GeForce RTX 5060 Ti 16GB", marca: "PNY", precio: 690000, stock: 12,
    descripcion: "Placa de video ideal para jugar en 1080p y 1440p.", imagenUrl: img("geforce-rtx-5060-ti.jpg") },
  { id: 19, categoria: "Placas de Video", nombre: "GeForce RTX 4070", marca: "MSI", precio: 780000, stock: 8,
    descripcion: "Placa de video para jugar en 1440p con ray tracing.", imagenUrl: img("geforce-rtx-4070.jpg") },
  { id: 20, categoria: "Placas de Video", nombre: "Radeon RX 7600", marca: "Sapphire", precio: 480000, stock: 10,
    descripcion: "Placa de video AMD para 1080p.", imagenUrl: img("radeon-rx-7600.jpg") },
  { id: 21, categoria: "Memorias RAM", nombre: "Fury Beast 16GB DDR5", marca: "Kingston", precio: 70000, stock: 25,
    descripcion: "Módulo de memoria DDR5 de 16GB.", imagenUrl: img("fury-beast-16gb-ddr5.jpg") },
  { id: 22, categoria: "Memorias RAM", nombre: "Vengeance 16GB DDR4", marca: "Corsair", precio: 50000, stock: 30,
    descripcion: "Módulo de memoria DDR4 de 16GB.", imagenUrl: img("vengeance-16gb-ddr4.jpg") },
  { id: 23, categoria: "Motherboards", nombre: "B650M Gaming", marca: "Gigabyte", precio: 230000, stock: 9,
    descripcion: "Motherboard AM5 micro-ATX con DDR5.", imagenUrl: img("b650m-gaming.jpg") },
  { id: 24, categoria: "Motherboards", nombre: "Z790 Tomahawk", marca: "MSI", precio: 420000, stock: 5,
    descripcion: "Motherboard LGA1700 ATX con WiFi.", imagenUrl: img("z790-tomahawk.jpg") },
  { id: 25, categoria: "Fuentes", nombre: "RM750e", marca: "Corsair", precio: 150000, stock: 12,
    descripcion: "Fuente de 750W 80 Plus Gold modular.", imagenUrl: img("rm750e.jpg") },
  { id: 26, categoria: "Fuentes", nombre: "MWE 550 Bronze", marca: "Cooler Master", precio: 75000, stock: 16,
    descripcion: "Fuente de 550W 80 Plus Bronze.", imagenUrl: img("mwe-550-bronze.jpg") },
  { id: 27, categoria: "Almacenamiento", nombre: "SSD 990 EVO 1TB", marca: "Samsung", precio: 110000, stock: 20,
    descripcion: "Disco sólido NVMe de 1TB.", imagenUrl: img("ssd-990-evo-1tb.jpg") },
  { id: 28, categoria: "Almacenamiento", nombre: "Barracuda 2TB", marca: "Seagate", precio: 85000, stock: 13,
    descripcion: "Disco rígido de 2TB a 7200 RPM.", imagenUrl: img("barracuda-2tb.jpg") },

  // ── Equipos ──────────────────────────────────────────────────────
  { id: 29, categoria: "Computadoras", nombre: "PC Gamer Ryzen 5 RTX 4060", marca: "HP", precio: 1450000, stock: 4,
    descripcion: "PC armada para gaming en 1080p.", imagenUrl: img("pc-gamer-ryzen-5-rtx-4060.jpg") },
  { id: 30, categoria: "Computadoras", nombre: "PC Oficina Core i3", marca: "Lenovo", precio: 620000, stock: 9,
    descripcion: "Equipo compacto para tareas de oficina.", imagenUrl: img("pc-oficina-core-i3.jpg") },
  { id: 31, categoria: "Computadoras", nombre: "Mac mini M2", marca: "Apple", precio: 1300000, stock: 0,
    descripcion: "Computadora compacta con chip Apple M2.", imagenUrl: img("mac-mini-m2.jpg") },
  { id: 32, categoria: "Notebooks", nombre: "Notebook Gamer G15", marca: "Dell", precio: 1650000, stock: 7,
    descripcion: "Notebook gamer con pantalla de 15.6\" 120Hz.", imagenUrl: img("notebook-gamer-g15.jpg") },
  { id: 33, categoria: "Notebooks", nombre: "Notebook Ideapad 3", marca: "Lenovo", precio: 950000, stock: 10,
    descripcion: "Notebook para estudio y trabajo.", imagenUrl: img("notebook-ideapad-3.jpg") },
  { id: 34, categoria: "Notebooks", nombre: "MacBook Air M2", marca: "Apple", precio: 2400000, stock: 5,
    descripcion: "Notebook ultradelgada con chip Apple M2.", imagenUrl: img("macbook-air-m2.jpg") },

  // ── Otros periféricos e insumos ──────────────────────────────────
  { id: 35, categoria: "Periféricos", nombre: "Monitor 24\" 144Hz", marca: "Samsung", precio: 320000, stock: 11,
    descripcion: "Monitor gamer Full HD de 144Hz.", imagenUrl: img("monitor-24-144hz.jpg") },
  { id: 36, categoria: "Periféricos", nombre: "Webcam C920", marca: "Logitech", precio: 80000, stock: 15,
    descripcion: "Webcam Full HD 1080p con micrófono estéreo.", imagenUrl: img("webcam-c920.jpg") },
  { id: 37, categoria: "Insumos", nombre: "Pasta Térmica MX-4 4g", marca: "Arctic", precio: 9000, stock: 50,
    descripcion: "Pasta térmica de alto rendimiento.", imagenUrl: img("pasta-termica-mx-4-4g.jpg") },
  { id: 38, categoria: "Insumos", nombre: "Cable HDMI 2.1 2m", marca: "Ugreen", precio: 12000, stock: 40,
    descripcion: "Cable HDMI 2.1 de 2 metros, soporta 8K.", imagenUrl: img("cable-hdmi-2-1-2m.jpg") },
  { id: 39, categoria: "Insumos", nombre: "Cartucho 664 Negro", marca: "HP", precio: 18000, stock: 35,
    descripcion: "Cartucho de tinta original HP 664 negro.", imagenUrl: img("cartucho-664-negro.jpg") },
  { id: 40, categoria: "Insumos", nombre: "Toner 85A", marca: "HP", precio: 65000, stock: 0,
    descripcion: "Tóner original HP 85A negro.", imagenUrl: img("toner-85a.jpg") },
  { id: 41, categoria: "Insumos", nombre: "Pendrive 64GB", marca: "Kingston", precio: 8000, stock: 60,
    descripcion: "Pendrive USB 3.2 de 64GB.", imagenUrl: img("pendrive-64gb.jpg") },
];

// Listas para los filtros del buscador (sin repetidos y ordenadas)
export const CATEGORIAS = [...new Set(PRODUCTOS.map((p) => p.categoria))].sort();
export const MARCAS = [...new Set(PRODUCTOS.map((p) => p.marca))].sort();
