export type CategoryId = "plumbing" | "electrical" | "hardware" | "paint";

export interface Product {
  id: string;
  name: string;
  nameHi: string;
  category: CategoryId;
  brand: string;
  unit: string;
  unitHi: string;
  price: number;
  mrp?: number;
  inStock: boolean;
  emoji: string;
  tags?: string[];
}

export interface CartLine {
  productId: string;
  qty: number;
}

export type OrderStatus = "confirmed" | "preparing" | "out_for_delivery" | "delivered";

export interface Order {
  id: string;
  createdAt: string;
  siteId: string;
  siteLabel: string;
  items: CartLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  etaMinutes: number;
}

export interface JobSite {
  id: string;
  label: string;
  labelHi: string;
}

export interface Contractor {
  name: string;
  nameHi: string;
  trade: string;
  phone: string;
}

export type Screen =
  | "login"
  | "home"
  | "browse"
  | "product"
  | "cart"
  | "checkout"
  | "orders"
  | "order-detail";
