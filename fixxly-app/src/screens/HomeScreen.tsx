import { Clock, Search, Zap } from "lucide-react";
import { CATEGORIES, DARK_STORES, searchProducts } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";
import { ProductCard } from "../components/ProductCard";

export function HomeScreen() {
  const {
    contractor,
    searchQuery,
    setSearchQuery,
    openBrowse,
    openProduct,
    cart,
    addToCart,
    updateQty,
    navigate,
  } = useApp();

  const results = searchQuery.trim() ? searchProducts(searchQuery) : [];

  function cartQty(productId: string) {
    return cart.find((l) => l.productId === productId)?.qty ?? 0;
  }

  return (
    <AppShell
      hideHeader
      footer={undefined}
    >
      <div className="bg-fixxly-navy px-4 pb-6 pt-[max(1rem,env(safe-area-inset-top))] text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-white/70">Namaste,</p>
            <h1 className="text-xl font-bold">{contractor.name}</h1>
            <p className="text-sm text-white/60">{contractor.trade} · {contractor.nameHi}</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-3 py-2 text-center">
            <div className="flex items-center gap-1 text-xs font-medium text-fixxly-orange">
              <Clock className="h-3.5 w-3.5" />
              30 min
            </div>
            <p className="text-[10px] text-white/60">delivery</p>
          </div>
        </div>

        <div className="relative mt-5">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search PVC, valve, wire…"
            className="w-full rounded-2xl border-0 bg-white py-3.5 pl-12 pr-4 text-gray-900 shadow-lg outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="px-4 pb-24">
        {!searchQuery.trim() && (
          <>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {DARK_STORES.map((store) => (
                <div
                  key={store.id}
                  className="shrink-0 rounded-xl border border-black/5 bg-white px-3 py-2 text-xs shadow-sm"
                >
                  <span className="font-semibold text-gray-800">{store.name}</span>
                  <span className="ml-2 text-gray-400">{store.opd} OPD</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-800">
              <Zap className="h-4 w-4 shrink-0" />
              Order before 6 PM for same-day delivery to your site
            </div>

            <h2 className="mt-6 text-base font-semibold text-gray-900">Categories</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => openBrowse(cat.id)}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm active:scale-[0.98]"
                >
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{cat.label}</p>
                    <p className="text-xs text-gray-500">{cat.labelHi}</p>
                  </div>
                </button>
              ))}
            </div>

            <h2 className="mt-6 text-base font-semibold text-gray-900">Popular picks</h2>
            <div className="mt-3 space-y-3">
              {searchProducts("", "plumbing")
                .filter((p) => p.inStock)
                .slice(0, 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    qty={cartQty(product.id)}
                    onOpen={() => openProduct(product.id)}
                    onAdd={() => addToCart(product.id)}
                    onInc={() => updateQty(product.id, cartQty(product.id) + 1)}
                    onDec={() => updateQty(product.id, cartQty(product.id) - 1)}
                  />
                ))}
            </div>
          </>
        )}

        {searchQuery.trim() && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
            <div className="mt-3 space-y-3">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  qty={cartQty(product.id)}
                  onOpen={() => openProduct(product.id)}
                  onAdd={() => addToCart(product.id)}
                  onInc={() => updateQty(product.id, cartQty(product.id) + 1)}
                  onDec={() => updateQty(product.id, cartQty(product.id) - 1)}
                />
              ))}
              {results.length === 0 && (
                <p className="py-8 text-center text-gray-500">No products found. Try PVC or valve.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {cart.length > 0 && !searchQuery.trim() && (
        <div className="safe-bottom fixed bottom-[4.5rem] left-0 right-0 z-10 mx-auto max-w-md px-4">
          <button
            type="button"
            onClick={() => navigate("cart")}
            className="w-full rounded-2xl bg-fixxly-navy py-3.5 text-sm font-semibold text-white shadow-lg active:scale-[0.99]"
          >
            View cart · {cart.reduce((s, l) => s + l.qty, 0)} items
          </button>
        </div>
      )}
    </AppShell>
  );
}
