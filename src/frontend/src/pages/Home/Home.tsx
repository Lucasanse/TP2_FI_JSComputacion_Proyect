import { useState } from "react";
import { Link } from "react-router-dom";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { PRODUCTOS } from "../../data/productos";

const CANTIDAD_EN_INICIO = 10;

// Elige productos al azar (con stock) mezclando la lista con Fisher-Yates
function productosAlAzar() {
  const lista = PRODUCTOS.filter((p) => p.stock > 0);
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista.slice(0, CANTIDAD_EN_INICIO);
}

// Cards del banner (informativas en la versión estática)
const SERVICIOS = [
  { icono: "🖥️", titulo: "Armado de PC", texto: "Elegí cada componente y armamos tu equipo a medida." },
  { icono: "🔧", titulo: "Servicio técnico", texto: "Reparación y mantenimiento de tus equipos." },
];

export default function Home() {
  // Favoritos solo en memoria (versión estática)
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set());
  // Se sortean al entrar al inicio y con el botón "Mostrar otros"
  const [destacados, setDestacados] = useState(productosAlAzar);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-dark text-white">
        {/* Decoración de fondo */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-secondary-dark/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-14 lg:px-8">
          <div>
            <h1 className="text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">
              La tecnología que buscás, <span className="text-accent">al mejor precio</span>
            </h1>
            <p className="mt-3 max-w-lg text-base text-secondary">
              Placas de video, procesadores, periféricos y mucho más de las mejores marcas y al mejor precio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/productos"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
              >
                Ver productos
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SERVICIOS.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="text-2xl" aria-hidden="true">{b.icono}</span>
                <h3 className="mt-2 font-semibold text-white">{b.titulo}</h3>
                <p className="mt-1 text-sm text-secondary/80">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {destacados.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-primary">Productos destacados</h2>
            <div className="flex shrink-0 items-center gap-4">
              <button
                type="button"
                onClick={() => setDestacados(productosAlAzar())}
                className="cursor-pointer rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
              >
                🔀 Mostrar otros
              </button>
              <Link to="/productos" className="text-sm font-semibold text-secondary-dark hover:underline">
                Ver todos →
              </Link>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {destacados.map((p) => (
              <ProductoCard
                key={p.id}
                producto={p}
                esFavorito={favoritos.has(p.id)}
                onToggleFavorito={toggleFavorito}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
