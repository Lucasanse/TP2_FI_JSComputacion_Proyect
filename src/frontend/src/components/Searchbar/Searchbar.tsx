import { useState } from "react";
import { CATEGORIAS, MARCAS } from "../../data/productos";

export interface Filtros {
  texto: string;
  categoria: string;
  marca: string;
  precioMin: string;
  precioMax: string;
}

export const FILTROS_VACIOS: Filtros = {
  texto: "",
  categoria: "",
  marca: "",
  precioMin: "",
  precioMax: "",
};

interface Props {
  filtros: Filtros;
  onChange: (filtros: Filtros) => void;
}

const inputClass =
  "px-4 py-2 border border-line rounded-md bg-surface focus:outline-none focus:ring-2 focus:ring-primary";

export default function SearchBar({ filtros, onChange }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cambiar = (campo: keyof Filtros, valor: string) => onChange({ ...filtros, [campo]: valor });

  // Solo se aceptan dígitos: así no se pueden cargar negativos (ni "e", "+", etc.)
  const soloPositivos = (valor: string) => valor.replace(/[^0-9]/g, "");
  const bloquearTeclas = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["-", "+", "e", "E", ".", ","].includes(e.key)) e.preventDefault();
  };

  return (
    <div className="w-full bg-surface-alt p-4 rounded-lg shadow-md">
      {/* Buscador principal (filtra mientras se escribe) */}
      <div className="flex gap-2">
        <input
          type="search"
          value={filtros.texto}
          onChange={(e) => cambiar("texto", e.target.value)}
          placeholder="Buscar productos..."
          className={`flex-1 min-w-0 ${inputClass}`}
        />
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden px-4 py-2 border border-line rounded-md bg-surface"
        >
          Filtros
        </button>
      </div>

      {/* Panel de filtros (desktop visible, mobile desplegable) */}
      <div className={`mt-4 flex-wrap gap-4 ${mobileOpen ? "flex" : "hidden md:flex"}`}>
        <select value={filtros.categoria} onChange={(e) => cambiar("categoria", e.target.value)} className={inputClass}>
          <option value="">Todas las categorías</option>
          {CATEGORIAS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={filtros.marca} onChange={(e) => cambiar("marca", e.target.value)} className={inputClass}>
          <option value="">Todas las marcas</option>
          {MARCAS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Rango de precio */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={filtros.precioMin}
            onChange={(e) => cambiar("precioMin", soloPositivos(e.target.value))}
            onKeyDown={bloquearTeclas}
            placeholder="Precio mín."
            className="w-32 px-2 py-2 border border-line rounded-md bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span>-</span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={filtros.precioMax}
            onChange={(e) => cambiar("precioMax", soloPositivos(e.target.value))}
            onKeyDown={bloquearTeclas}
            placeholder="Precio máx."
            className="w-32 px-2 py-2 border border-line rounded-md bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="button"
          onClick={() => onChange(FILTROS_VACIOS)}
          className="px-4 py-2 border border-line rounded-md hover:bg-surface transition"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
