import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CONTRACTOR, getProduct, JOB_SITES } from "../data/catalog";
import type { CartLine, CategoryId, Order, Screen } from "../types";

const DELIVERY_FEE = 0;
const ETA_MINUTES = 30;

interface AppState {
  isLoggedIn: boolean;
  screen: Screen;
  browseCategory: CategoryId | null;
  searchQuery: string;
  selectedProductId: string | null;
  selectedOrderId: string | null;
  cart: CartLine[];
  orders: Order[];
  checkoutSiteId: string;
  login: (phone: string, otp: string) => boolean;
  logout: () => void;
  navigate: (screen: Screen) => void;
  openBrowse: (category?: CategoryId | null) => void;
  setSearchQuery: (q: string) => void;
  openProduct: (productId: string) => void;
  openOrder: (orderId: string) => void;
  addToCart: (productId: string, qty?: number) => void;
  updateQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setCheckoutSiteId: (siteId: string) => void;
  placeOrder: () => Order | null;
  cartCount: number;
  cartSubtotal: number;
  contractor: typeof CONTRACTOR;
}

const AppContext = createContext<AppState | null>(null);

function orderId(): string {
  return `ORD-${Date.now().toString().slice(-6)}`;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screen, setScreen] = useState<Screen>("login");
  const [browseCategory, setBrowseCategory] = useState<CategoryId | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [checkoutSiteId, setCheckoutSiteId] = useState(JOB_SITES[0].id);

  const login = useCallback((phone: string, otp: string) => {
    const ok =
      phone.replace(/\D/g, "").endsWith("9876543210") && otp === "123456";
    if (ok) {
      setIsLoggedIn(true);
      setScreen("home");
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setScreen("login");
    setCart([]);
  }, []);

  const navigate = useCallback((s: Screen) => setScreen(s), []);

  const openBrowse = useCallback((category?: CategoryId | null) => {
    setBrowseCategory(category ?? null);
    setScreen("browse");
  }, []);

  const openProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setScreen("product");
  }, []);

  const openOrder = useCallback((orderId: string) => {
    setSelectedOrderId(orderId);
    setScreen("order-detail");
  }, []);

  const addToCart = useCallback((productId: string, qty = 1) => {
    const product = getProduct(productId);
    if (!product?.inStock) return;
    setCart((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        return prev.map((l) =>
          l.productId === productId ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { productId, qty }];
    });
  }, []);

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((l) => l.productId !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((l) => (l.productId === productId ? { ...l, qty } : l)),
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartSubtotal = useMemo(
    () =>
      cart.reduce((sum, line) => {
        const p = getProduct(line.productId);
        return sum + (p?.price ?? 0) * line.qty;
      }, 0),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.qty, 0),
    [cart],
  );

  const placeOrder = useCallback((): Order | null => {
    if (cart.length === 0) return null;
    const site = JOB_SITES.find((s: (typeof JOB_SITES)[number]) => s.id === checkoutSiteId) ?? JOB_SITES[0];
    const order: Order = {
      id: orderId(),
      createdAt: new Date().toISOString(),
      siteId: site.id,
      siteLabel: site.label,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee: DELIVERY_FEE,
      total: cartSubtotal + DELIVERY_FEE,
      status: "confirmed",
      etaMinutes: ETA_MINUTES,
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    setSelectedOrderId(order.id);
    setScreen("order-detail");
    return order;
  }, [cart, cartSubtotal, checkoutSiteId]);

  const value: AppState = {
    isLoggedIn,
    screen,
    browseCategory,
    searchQuery,
    selectedProductId,
    selectedOrderId,
    cart,
    orders,
    checkoutSiteId,
    login,
    logout,
    navigate,
    openBrowse,
    setSearchQuery,
    openProduct,
    openOrder,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    setCheckoutSiteId,
    placeOrder,
    cartCount,
    cartSubtotal,
    contractor: CONTRACTOR,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
