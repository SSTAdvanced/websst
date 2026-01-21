"use client";

import { Globe, Phone } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { trackGaEvent } from "@/lib/ga";
import { logEvent } from "@/lib/eventLogger";

const navItems = [
  { href: "#top", key: "home" },
  { href: "#features", key: "features" },
  { href: "#platform-intro", key: "platforms" },
  { href: "#services", key: "services" },
  { href: "#package-list", key: "packages" },
  { href: "#portfolio", key: "portfolio" },
  { href: "/articles", key: "articles" },
  { href: "#contact", key: "contact" },
] as const;

type NavbarProps = {
  lang: Lang;
  onToggleLang: () => void;
  labels: Record<(typeof navItems)[number]["key"], string>;
  cta: string;
};

export default function Navbar({ lang, onToggleLang, labels, cta }: NavbarProps) {
  const ctaClass =
    lang === "th"
      ? "hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-slate-800 md:flex"
      : "hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md transition hover:bg-slate-800 md:flex";
  const onNavClick = (key: (typeof navItems)[number]["key"]) => {
    if (key !== "services") {
      return;
    }
    trackGaEvent("service_click", { service: "services_menu", location: "navbar" });
    logEvent({
      eventName: "service_click",
      service: "services_menu",
      meta: { location: "navbar" },
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
            <span className="text-sm font-semibold tracking-[0.2em]">SST</span>
          </div>
          <div className="leading-tight">
            <p className="font-[var(--font-heading)] text-lg font-semibold text-slate-900">
              WebCraft Pro
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">SST INNOVATION</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => onNavClick(item.key)}
              className="transition-colors hover:text-slate-900"
            >
              {labels[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            <Globe className="h-4 w-4" />
            {lang === "th" ? "TH" : "EN"}
          </button>
          <a
            href="#contact"
            className={ctaClass}
          >
            <Phone className="h-4 w-4" />
            {cta}
          </a>
        </div>
      </div>
    </header>
  );
}
