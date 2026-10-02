import { useState } from "react";
import type { Producto } from "../../data/productos";

const formatoPrecio = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
});

interface Props {
  producto: Producto;
  esFavorito: boolean;
  onToggleFavorito: (id: number) => void;
}

export default function ProductoCard({ producto, esFavorito, onToggleFavorito }: Props) {
  const { stock } = producto;
  const sinStock = stock <= 0;
  const [cantidad, setCantidad] = useState(1);

  // La cantidad siempre queda entre 1 y el stock disponible
  const cambiarCantidad = (valor: number) => {
    if (Number.isNaN(valor)) return;
    setCantidad(Math.min(Math.max(valor, 1), stock));
  };

  return (
    <article className="relative flex flex-col gap-2 rounded-xl border border-line bg-surface p-2 shadow-sm sm:gap-3 sm:p-3 transition duration-200 hover:z-20 hover:scale-105 hover:shadow-lg">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-surface">
        <img
          src={producto.imagenUrl}
          alt={producto.nombre}
          loading="lazy"
          className="h-full w-full object-contain"
        />
        <button
          type="button"
          aria-label={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={esFavorito}
          onClick={() => onToggleFavorito(producto.id)}
          className={`absolute right-1.5 top-1.5 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full sm:h-8 sm:w-8 bg-surface/90 shadow-sm transition-colors ${esFavorito ? "text-primary" : "text-muted hover:text-primary"}`}
        >
          <HeartIcon filled={esFavorito} />
        </button>
      </div>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted sm:text-xs">{producto.marca}</p>
        <h3 className="line-clamp-2 text-xs font-bold leading-snug text-ink sm:text-sm">{producto.nombre}</h3>
      </div>

      <p className="mt-auto text-base font-semibold text-ink sm:text-xl">{formatoPrecio.format(producto.precio)}</p>

      <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex h-8 items-center justify-between rounded-lg border border-line bg-surface sm:h-9 sm:justify-start">
          <button
            type="button"
            aria-label="Restar uno"
            onClick={() => cambiarCantidad(cantidad - 1)}
            disabled={sinStock || cantidad <= 1}
            className="h-full w-7 cursor-pointer text-muted hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
          <input
            type="number"
            aria-label="Cantidad"
            min={1}
            max={stock}
            value={sinStock ? 0 : cantidad}
            disabled={sinStock}
            onChange={(e) => cambiarCantidad(e.target.valueAsNumber)}
            className="h-full w-8 [appearance:textfield] bg-transparent text-center text-sm text-ink outline-none disabled:opacity-40 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            type="button"
            aria-label="Sumar uno"
            onClick={() => cambiarCantidad(cantidad + 1)}
            disabled={sinStock || cantidad >= stock}
            className="h-full w-7 cursor-pointer text-muted hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>

        <button
          type="button"
          disabled={sinStock}
          className="flex h-8 w-full cursor-pointer items-center sm:h-9 sm:w-auto sm:flex-1 justify-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
        >
          <CartIcon />
          {sinStock ? "Sin stock" : "Agregar"}
        </button>
      </div>
    </article>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 20.5s-7.5-4.6-9.2-9.4C1.7 7.9 3.9 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.8 1.1-1.7 2.7-2.8 4.7-2.8 3.4 0 5.6 3.4 4.5 6.6-1.7 4.8-9.2 9.4-9.2 9.4z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5.2 4H2V2h4.6l.9 2H21l-3.6 8.1a2 2 0 0 1-1.8 1.2H8.1l-1 1.7H19v2H5l2.3-4L5.2 4z" />
    </svg>
  );
}
