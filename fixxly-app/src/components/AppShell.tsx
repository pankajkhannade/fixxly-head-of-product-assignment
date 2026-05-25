import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

interface AppShellProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  headerRight?: ReactNode;
  hideHeader?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}

export function AppShell({
  title,
  subtitle,
  onBack,
  headerRight,
  hideHeader,
  children,
  footer,
}: AppShellProps) {
  return (
    <div className="mx-auto flex h-full max-w-md flex-col bg-fixxly-cream">
      {!hideHeader && (
        <header className="sticky top-0 z-20 bg-fixxly-navy px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] text-white shadow-md">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="-ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 active:bg-white/20"
                aria-label="Go back"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <div className="min-w-0 flex-1">
              {title && <h1 className="truncate text-lg font-semibold">{title}</h1>}
              {subtitle && (
                <p className="truncate text-sm text-white/75">{subtitle}</p>
              )}
            </div>
            {headerRight}
          </div>
        </header>
      )}
      <main className="flex-1 overflow-y-auto">{children}</main>
      {footer}
    </div>
  );
}
