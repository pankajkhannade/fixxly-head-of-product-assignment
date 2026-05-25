import { Minus, Plus, ShoppingCart } from "lucide-react";
import { formatRupee, getProduct } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";

export function ProductScreen() {
  const {
    selectedProductId,
    cart,
    addToCart,
    updateQty,
    navigate,
  } = useApp();

  const product = selectedProductId ? getProduct(selectedProductId) : undefined;

  if (!product) {
    return (
      <AppShell title="Product" onBack={() => navigate("browse")}>
        <p className="p-8 text-center text-gray-500">Product not found.</p>
      </AppShell>
    );
  }

  const qty = cart.find((l) => l.productId === product.id)?.qty ?? 0;

  return (
    <AppShell
      title={product.brand}
      subtitle={product.category}
      onBack={() => navigate("browse")}
      footer={
        product.inStock ? (
          <div className="safe-bottom border-t border-black/5 bg-white px-4 pt-3">
            {qty > 0 ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => updateQty(product.id, qty - 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="min-w-[2rem] text-center text-lg font-bold">{qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(product.id, qty + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-fixxly-orange text-white"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => navigate("cart")}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-fixxly-navy py-3.5 font-semibold text-white"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Go to cart
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => addToCart(product.id)}
                className="w-full rounded-xl bg-fixxly-orange py-3.5 text-base font-semibold text-white"
              >
                Add to cart — {formatRupee(product.price)}
              </button>
            )}
          </div>
        ) : undefined
      }
    >
      <div className="animate-slide-up px-4 pb-8 pt-4">
        <div className="flex h-40 items-center justify-center rounded-3xl bg-white text-7xl shadow-sm">
          {product.emoji}
        </div>

        <h1 className="mt-5 text-2xl font-bold text-gray-900">{product.name}</h1>
        <p className="mt-1 text-base text-gray-500">{product.nameHi}</p>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-3xl font-bold text-fixxly-navy">
            {formatRupee(product.price)}
          </span>
          {product.mrp && product.mrp > product.price && (
            <>
              <span className="text-lg text-gray-400 line-through">
                {formatRupee(product.mrp)}
              </span>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off
              </span>
            </>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500">Per {product.unit} · {product.unitHi}</p>

        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-4">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Brand</dt>
              <dd className="font-medium">{product.brand}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Availability</dt>
              <dd className={product.inStock ? "font-medium text-green-600" : "font-medium text-red-500"}>
                {product.inStock ? "In stock at nearest dark store" : "Out of stock"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Delivery</dt>
              <dd className="font-medium">~30 minutes to your site</dd>
            </div>
          </dl>
        </div>
      </div>
    </AppShell>
  );
}
