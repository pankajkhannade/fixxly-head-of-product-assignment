import { Home, LayoutGrid, Package, ShoppingCart } from "lucide-react";
import { useApp } from "../context/AppContext";
import type { Screen } from "../types";

const tabs: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "browse", label: "Browse", icon: LayoutGrid },
  { id: "cart", label: "Cart", icon: ShoppingCart },
  { id: "orders", label: "Orders", icon: Package },
];

export function BottomNav() {
  const { screen, navigate, cartCount } = useApp();

  const active =
    screen === "product"
      ? "browse"
      : screen === "checkout" || screen === "order-detail"
        ? screen === "checkout"
          ? "cart"
          : "orders"
        : screen;

  if (screen === "login" || screen === "checkout" || screen === "product" || screen === "order-detail") {
    return null;
  }

  return (
    <nav className="safe-bottom sticky bottom-0 z-20 border-t border-black/5 bg-white px-2 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => navigate(id)}
              className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 transition-colors ${
                isActive ? "text-fixxly-orange" : "text-gray-500"
              }`}
            >
              <span className="relative">
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
                {id === "cart" && cartCount > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-fixxly-orange px-1 text-[10px] font-bold text-white">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </span>
              <span className={`text-[11px] ${isActive ? "font-semibold" : "font-medium"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
