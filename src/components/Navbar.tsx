"use client";

import { Globe, Phone } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const navItems = [
  { id: "top", key: "home" },
  { id: "features", key: "features" },
  { id: "platform-intro", key: "platforms" },
  { id: "services", key: "services" },
  { id: "package-list", key: "packages" },
  { id: "portfolio", key: "portfolio" },
  { id: "contact", key: "contact" },
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
              key={item.id}
              href={`#${item.id}`}
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
