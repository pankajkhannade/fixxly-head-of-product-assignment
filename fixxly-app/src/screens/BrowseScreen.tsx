import { Search } from "lucide-react";
import { CATEGORIES, searchProducts } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";
import { ProductCard } from "../components/ProductCard";

export function BrowseScreen() {
  const {
    browseCategory,
    searchQuery,
    setSearchQuery,
    openBrowse,
    openProduct,
    cart,
    addToCart,
    updateQty,
    navigate,
  } = useApp();

  const activeCategory = browseCategory;
  const products = searchProducts(searchQuery, activeCategory ?? undefined);

  function cartQty(productId: string) {
    return cart.find((l) => l.productId === productId)?.qty ?? 0;
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "All products";

  return (
    <AppShell title="Browse" subtitle={categoryLabel}>
      <div className="sticky top-0 z-10 bg-fixxly-cream px-4 pb-3 pt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search in catalogue…"
            className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-fixxly-orange"
          />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => openBrowse(null)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${
              !activeCategory
                ? "bg-fixxly-navy text-white"
                : "bg-white text-gray-600 border border-black/10"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => openBrowse(cat.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${
                activeCategory === cat.id
                  ? "bg-fixxly-navy text-white"
                  : "bg-white text-gray-600 border border-black/10"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 px-4 pb-24">
        {products.map((product) => (
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
        {products.length === 0 && (
          <p className="py-12 text-center text-gray-500">No products in this category.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="safe-bottom fixed bottom-[4.5rem] left-0 right-0 z-10 mx-auto max-w-md px-4">
          <button
            type="button"
            onClick={() => navigate("cart")}
            className="w-full rounded-2xl bg-fixxly-navy py-3.5 text-sm font-semibold text-white shadow-lg"
          >
            View cart
          </button>
        </div>
      )}
    </AppShell>
  );
}
