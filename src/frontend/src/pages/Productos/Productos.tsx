import { useMemo, useState } from "react";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import SearchBar, { FILTROS_VACIOS, type Filtros } from "../../components/Searchbar/Searchbar";
import { PRODUCTOS } from "../../data/productos";

// Sin tildes ni mayúsculas, para que "teclado" encuentre "Teclado Mecánico"
const normalizar = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function Productos() {
  const [filtros, setFiltros] = useState<Filtros>(FILTROS_VACIOS);
  // Favoritos solo en memoria (versión estática)
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set());

  const productos = useMemo(() => {
    const texto = normalizar(filtros.texto.trim());
    const min = filtros.precioMin === "" ? 0 : Number(filtros.precioMin);
    const max = filtros.precioMax === "" ? Infinity : Number(filtros.precioMax);
    return PRODUCTOS.filter(
      (p) =>
        (!texto || normalizar(`${p.nombre} ${p.marca} ${p.categoria}`).includes(texto)) &&
        (!filtros.categoria || p.categoria === filtros.categoria) &&
        (!filtros.marca || p.marca === filtros.marca) &&
        p.precio >= min &&
        p.precio <= max,
    );
  }, [filtros]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SearchBar filtros={filtros} onChange={setFiltros} />
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-bold text-primary">Productos</h1>
        <p className="text-sm text-muted">{productos.length} resultados</p>
      </div>

      {productos.length === 0 && (
        <p className="mt-6 text-muted">No encontramos productos con esos filtros.</p>
      )}

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productos.map((p) => (
          <ProductoCard
            key={p.id}
            producto={p}
            esFavorito={favoritos.has(p.id)}
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </section>
  );
}
