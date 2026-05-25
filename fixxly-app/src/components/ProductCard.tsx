import { Minus, Plus } from "lucide-react";
import type { Product } from "../types";
import { formatRupee } from "../data/catalog";

interface ProductCardProps {
  product: Product;
  qty?: number;
  onOpen: () => void;
  onAdd: () => void;
  onInc?: () => void;
  onDec?: () => void;
}

export function ProductCard({
  product,
  qty = 0,
  onOpen,
  onAdd,
  onInc,
  onDec,
}: ProductCardProps) {
  return (
    <article
      className={`animate-slide-up rounded-2xl border bg-white p-3 shadow-sm ${
        product.inStock ? "border-black/5" : "border-black/5 opacity-75"
      }`}
    >
      <button type="button" onClick={onOpen} className="flex w-full gap-3 text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
          {product.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.brand}
          </p>
          <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500">{product.nameHi}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-base font-bold text-fixxly-navy">
              {formatRupee(product.price)}
            </span>
            {product.mrp && product.mrp > product.price && (
              <span className="text-xs text-gray-400 line-through">
                {formatRupee(product.mrp)}
              </span>
            )}
            <span className="text-xs text-gray-400">/ {product.unit}</span>
          </div>
        </div>
      </button>

      <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3">
        {!product.inStock ? (
          <span className="text-xs font-medium text-red-500">Out of stock</span>
        ) : qty > 0 ? (
          <div className="ml-auto flex items-center gap-2 rounded-xl bg-fixxly-navy/5 p-1">
            <button
              type="button"
              onClick={onDec}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm active:scale-95"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-bold">{qty}</span>
            <button
              type="button"
              onClick={onInc}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-fixxly-orange text-white shadow-sm active:scale-95"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className="ml-auto rounded-xl bg-fixxly-orange px-5 py-2 text-sm font-semibold text-white shadow-sm active:bg-fixxly-orange-dark"
          >
            Add
          </button>
        )}
      </div>
    </article>
  );
}
