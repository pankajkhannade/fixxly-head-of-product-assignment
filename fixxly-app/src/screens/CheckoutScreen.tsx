import { MapPin, Truck } from "lucide-react";
import { formatRupee, getProduct, JOB_SITES } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";

export function CheckoutScreen() {
  const {
    cart,
    checkoutSiteId,
    setCheckoutSiteId,
    placeOrder,
    navigate,
    cartSubtotal,
    contractor,
  } = useApp();

  const lines = cart
    .map((line) => ({ line, product: getProduct(line.productId) }))
    .filter((x) => x.product);

  return (
    <AppShell
      title="Confirm order"
      subtitle="Deliver in ~30 minutes"
      onBack={() => navigate("cart")}
      footer={
        <div className="safe-bottom border-t border-black/5 bg-white px-4 pt-3">
          <button
            type="button"
            onClick={() => placeOrder()}
            disabled={lines.length === 0}
            className="w-full rounded-xl bg-fixxly-orange py-3.5 text-base font-semibold text-white disabled:opacity-50"
          >
            Confirm & place order · {formatRupee(cartSubtotal)}
          </button>
        </div>
      }
    >
      <div className="space-y-4 px-4 pb-8 pt-4">
        <section className="rounded-2xl border border-black/5 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <Truck className="h-4 w-4 text-fixxly-orange" />
            30-minute delivery
          </div>
          <p className="mt-1 text-xs text-gray-500">
            From nearest dark store · Koramangala, Whitefield, or HSR
          </p>
        </section>

        <section>
          <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <MapPin className="h-4 w-4" />
            Deliver to job site
          </h2>
          <div className="space-y-2">
            {JOB_SITES.map((site) => (
              <label
                key={site.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 ${
                  checkoutSiteId === site.id
                    ? "border-fixxly-orange bg-orange-50"
                    : "border-black/5 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="site"
                  checked={checkoutSiteId === site.id}
                  onChange={() => setCheckoutSiteId(site.id)}
                  className="mt-1 accent-fixxly-orange"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{site.label}</p>
                  <p className="text-xs text-gray-500">{site.labelHi}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-4">
          <p className="text-xs text-gray-500">Ordering as</p>
          <p className="font-semibold text-gray-900">{contractor.name}</p>
          <p className="text-sm text-gray-500">{contractor.phone}</p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold text-gray-900">Order summary</h2>
          <div className="rounded-2xl border border-black/5 bg-white divide-y divide-black/5">
            {lines.map(({ line, product }) => (
              <div key={line.productId} className="flex justify-between px-4 py-3 text-sm">
                <span className="text-gray-700">
                  {product!.emoji} {line.qty}× {product!.name}
                </span>
                <span className="font-medium">{formatRupee(product!.price * line.qty)}</span>
              </div>
            ))}
            <div className="flex justify-between px-4 py-3 font-bold">
              <span>Total</span>
              <span>{formatRupee(cartSubtotal)}</span>
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-gray-400">
          Pay on delivery · Cash or UPI accepted at site
        </p>
      </div>
    </AppShell>
  );
}
