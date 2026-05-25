import { ChevronRight, Clock, MapPin, Package } from "lucide-react";
import { formatRupee, getProduct } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";
import type { OrderStatus, CartLine } from "../types";

const STATUS_LABEL: Record<OrderStatus, string> = {
  confirmed: "Order confirmed",
  preparing: "Packing at dark store",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
};

export function OrdersScreen() {
  const { orders, openOrder } = useApp();

  return (
    <AppShell title="Orders" subtitle={orders.length ? `${orders.length} order(s)` : "No orders yet"}>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center px-6 py-16 text-center">
          <Package className="h-12 w-12 text-gray-300" />
          <h2 className="mt-4 text-lg font-semibold text-gray-900">No orders yet</h2>
          <p className="mt-2 text-sm text-gray-500">
            Your placed orders will show up here with 30-min delivery tracking.
          </p>
        </div>
      ) : (
        <div className="space-y-3 px-4 pb-24 pt-4">
          {orders.map((order) => (
            <button
              key={order.id}
              type="button"
              onClick={() => openOrder(order.id)}
              className="w-full rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-medium text-fixxly-orange">{order.id}</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {formatRupee(order.total)}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {order.siteLabel}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-gray-300" />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3">
                <span className="text-xs font-medium text-green-700">
                  {STATUS_LABEL[order.status as OrderStatus]}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  ~{order.etaMinutes} min
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </AppShell>
  );
}

export function OrderDetailScreen() {
  const { orders, selectedOrderId, navigate } = useApp();
  const order = orders.find((o) => o.id === selectedOrderId);

  if (!order) {
    return (
      <AppShell title="Order" onBack={() => navigate("orders")}>
        <p className="p-8 text-center text-gray-500">Order not found.</p>
      </AppShell>
    );
  }

  const created = new Date(order.createdAt);
  const timeStr = created.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <AppShell title={order.id} subtitle={`Placed at ${timeStr}`} onBack={() => navigate("orders")}>
      <div className="animate-slide-up space-y-4 px-4 pb-8 pt-4">
        <div className="rounded-2xl bg-green-600 px-4 py-5 text-white">
          <p className="text-lg font-bold">Order placed!</p>
          <p className="mt-1 text-sm text-green-100">
            Arriving in ~{order.etaMinutes} minutes at your site
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-green-800/40">
            <div className="h-full w-1/3 rounded-full bg-white animate-pulse" />
          </div>
        </div>

        <section className="rounded-2xl border border-black/5 bg-white p-4">
          <p className="text-xs text-gray-500">Deliver to</p>
          <p className="font-semibold text-gray-900">{order.siteLabel}</p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold">Items</h2>
          <div className="rounded-2xl border border-black/5 bg-white divide-y divide-black/5">
            {order.items.map((line: CartLine) => {
              const product = getProduct(line.productId);
              if (!product) return null;
              return (
                <div key={line.productId} className="flex gap-3 px-4 py-3">
                  <span className="text-xl">{product.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      {line.qty} × {formatRupee(product.price)}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">
                    {formatRupee(product.price * line.qty)}
                  </p>
                </div>
              );
            })}
            <div className="flex justify-between px-4 py-3 font-bold">
              <span>Total paid on delivery</span>
              <span>{formatRupee(order.total)}</span>
            </div>
          </div>
        </section>

        <button
          type="button"
          onClick={() => navigate("home")}
          className="w-full rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold text-gray-800"
        >
          Continue shopping
        </button>
      </div>
    </AppShell>
  );
}
