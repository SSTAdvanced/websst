"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Home, Layers, LayoutGrid, Menu, Phone, X } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#services", label: "Services", icon: Briefcase },
  { href: "/#packages", label: "Packages", icon: LayoutGrid },
  { href: "/#portfolio", label: "Portfolio", icon: Layers },
  { href: "/#contact", label: "Contact", icon: Phone },
] as const;

const serviceLinks = [
  { href: "/#services", label: "Overview" },
  { href: "/services/website", label: "Website" },
  { href: "/services/dormitory-system", label: "Dormitory/Resort" },
  { href: "/services/company-registration", label: "Company Registration" },
] as const;

export default function MobileAppShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!drawerOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const container = drawerRef.current;
      if (!container) {
        return;
      }
      const target = event.target;
      if (target instanceof Node && !container.contains(target)) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [drawerOpen]);

  return (
    <div className="min-h-dvh">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-[var(--font-heading)] text-base font-semibold text-slate-900">
            SST INNOVATION
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm">
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] border-l border-slate-200 bg-white p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-slate-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Services
              </p>
              <div className="mt-2 space-y-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="pt-14 pb-20 scroll-pb-24">{children}</div>

      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white">
        <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-5 px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-slate-600 transition hover:text-slate-900"
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

