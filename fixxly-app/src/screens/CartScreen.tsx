import { Minus, Plus, Trash2 } from "lucide-react";
import { formatRupee, getProduct } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";

export function CartScreen() {
  const { cart, updateQty, removeFromCart, navigate, cartSubtotal } = useApp();

  const lines = cart
    .map((line) => ({ line, product: getProduct(line.productId) }))
    .filter((x) => x.product);

  return (
    <AppShell
      title="Cart"
      subtitle={lines.length ? `${lines.reduce((s, x) => s + x.line.qty, 0)} items` : "Empty"}
      footer={
        lines.length > 0 ? (
          <div className="safe-bottom border-t border-black/5 bg-white px-4 pt-3">
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold text-gray-900">{formatRupee(cartSubtotal)}</span>
            </div>
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-gray-500">Delivery</span>
              <span className="font-semibold text-green-600">FREE · 30 min</span>
            </div>
            <button
              type="button"
              onClick={() => navigate("checkout")}
              className="w-full rounded-xl bg-fixxly-orange py-3.5 text-base font-semibold text-white"
            >
              Place order · {formatRupee(cartSubtotal)}
            </button>
          </div>
        ) : undefined
      }
    >
      {lines.length === 0 ? (
        <div className="flex flex-col items-center px-6 py-16 text-center">
          <span className="text-5xl">🛒</span>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-sm text-gray-500">Browse materials and add what you need for today's job.</p>
          <button
            type="button"
            onClick={() => navigate("browse")}
            className="mt-6 rounded-xl bg-fixxly-navy px-6 py-3 text-sm font-semibold text-white"
          >
            Browse catalogue
          </button>
        </div>
      ) : (
        <div className="space-y-3 px-4 pb-8 pt-4">
          {lines.map(({ line, product }) => (
            <div
              key={line.productId}
              className="flex gap-3 rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                {product!.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 text-sm font-semibold">{product!.name}</h3>
                <p className="text-sm font-bold text-fixxly-navy">
                  {formatRupee(product!.price * line.qty)}
                </p>
                <p className="text-xs text-gray-400">
                  {formatRupee(product!.price)} / {product!.unit}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  type="button"
                  onClick={() => removeFromCart(line.productId)}
                  className="text-gray-300 hover:text-red-500"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-0.5">
                  <button
                    type="button"
                    onClick={() => updateQty(line.productId, line.qty - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-white"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="min-w-[1.5rem] text-center text-sm font-bold">{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(line.productId, line.qty + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-fixxly-orange text-white"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
