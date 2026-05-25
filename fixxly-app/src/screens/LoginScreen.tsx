import { useState } from "react";
import { Truck, Zap } from "lucide-react";
import { DEMO_OTP, DEMO_PHONE } from "../data/catalog";
import { useApp } from "../context/AppContext";
import { AppShell } from "../components/AppShell";

export function LoginScreen() {
  const { login } = useApp();
  const [phone, setPhone] = useState(DEMO_PHONE);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [error, setError] = useState("");

  function sendOtp() {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setStep("otp");
    setOtp("");
  }

  function verify() {
    const ok = login(phone, otp);
    if (!ok) {
      setError(`Wrong OTP. Demo OTP is ${DEMO_OTP}`);
    }
  }

  return (
    <AppShell hideHeader>
      <div className="flex min-h-full flex-col bg-fixxly-navy px-6 pb-8 pt-[max(3rem,env(safe-area-inset-top))] text-white">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
            <Truck className="h-3.5 w-3.5" />
            30-min delivery to your site
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Fixxly</h1>
          <p className="mt-2 text-lg text-white/80">Building materials for contractors</p>
          <p className="mt-1 text-sm text-white/60">निर्माण सामग्री — 30 मिनट में</p>
        </div>

        <div className="animate-slide-up rounded-3xl bg-white p-6 text-gray-900 shadow-xl">
          {step === "phone" ? (
            <>
              <h2 className="text-xl font-semibold">Login with mobile</h2>
              <p className="mt-1 text-sm text-gray-500">We'll send a one-time password</p>
              <label className="mt-6 block text-sm font-medium text-gray-700">
                Mobile number
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-lg outline-none focus:border-fixxly-orange focus:ring-2 focus:ring-fixxly-orange/20"
                />
              </label>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              <button
                type="button"
                onClick={sendOtp}
                className="mt-6 w-full rounded-xl bg-fixxly-orange py-3.5 text-base font-semibold text-white active:bg-fixxly-orange-dark"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Enter OTP</h2>
              <p className="mt-1 text-sm text-gray-500">Sent to +91 {phone.replace(/\D/g, "").slice(-10)}</p>
              <label className="mt-6 block text-sm font-medium text-gray-700">
                6-digit OTP
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="••••••"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-center text-2xl tracking-[0.4em] outline-none focus:border-fixxly-orange focus:ring-2 focus:ring-fixxly-orange/20"
                />
              </label>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              <button
                type="button"
                onClick={verify}
                className="mt-6 w-full rounded-xl bg-fixxly-orange py-3.5 text-base font-semibold text-white active:bg-fixxly-orange-dark"
              >
                Verify & continue
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep("phone");
                  setError("");
                }}
                className="mt-3 w-full py-2 text-sm font-medium text-gray-500"
              >
                Change number
              </button>
            </>
          )}

          <div className="mt-6 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
            <Zap className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Demo: phone <strong>{DEMO_PHONE}</strong>, OTP <strong>{DEMO_OTP}</strong>
            </span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
