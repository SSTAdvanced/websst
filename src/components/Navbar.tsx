"use client";

import { ChevronDown, Globe, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { trackGaEvent } from "@/lib/ga";
import { logEvent } from "@/lib/eventLogger";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/#top", key: "home" },
  { href: "/#features", key: "features" },
  { href: "/#services", key: "services" },
  { href: "/#packages", key: "packages" },
  { href: "/#portfolio", key: "portfolio" },
  { href: "/articles", key: "articles" },
  { href: "/#contact", key: "contact" },
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuDesktopRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuMobileRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    if (!servicesOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const containers = [servicesMenuDesktopRef.current, servicesMenuMobileRef.current].filter(
        (node): node is HTMLDivElement => Boolean(node)
      );
      if (!containers.length) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (containers.every((container) => !container.contains(target))) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="flex items-center gap-3">
          <Image
            src="https://kyjtswuxuyqzidnxvsax.supabase.co/storage/v1/object/sign/sstinnovation/A-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZTI4NThhOC01MWIxLTQ0NTktYTg0My1kMjUzM2EyMTIxMTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzc3Rpbm5vdmF0aW9uL0EtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NjkwNzcxOTEsImV4cCI6MTgwMDYxMzE5MX0.bRpT_Qr2L8Rx7S_1EUFjwsS2Eybfbfvk61w9ALjY1_I"
            alt="SST INNOVATION"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="font-[var(--font-heading)] text-lg font-semibold text-slate-900">
              SST INNOVATION
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              SST INNOVATION CO., LTD.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => {
            if (item.key !== "services") {
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => onNavClick(item.key)}
                  className="transition-colors hover:text-slate-900"
                >
                  {labels[item.key]}
                </Link>
              );
            }

            return (
              <div
                key={item.key}
                ref={servicesMenuDesktopRef}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 transition-colors hover:text-slate-900"
                >
                  {labels[item.key]}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {servicesOpen ? (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
                  >
                    <Link
                      role="menuitem"
                      href="/#services"
                      onClick={() => {
                        onNavClick("services");
                        setServicesOpen(false);
                      }}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      {lang === "th" ? "ภาพรวมบริการ" : "Service overview"}
                    </Link>
                    <Link
                      role="menuitem"
                      href="/services/website"
                      onClick={() => {
                        onNavClick("services");
                        setServicesOpen(false);
                      }}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      {lang === "th" ? "รับทำเว็บไซต์" : "Website development"}
                    </Link>
                    <Link
                      role="menuitem"
                      href="/services/dormitory-system"
                      onClick={() => {
                        onNavClick("services");
                        setServicesOpen(false);
                      }}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      {lang === "th" ? "ระบบหอพัก/รีสอร์ท" : "Dormitory / resort system"}
                    </Link>
                    <Link
                      role="menuitem"
                      href="/services/company-registration"
                      onClick={() => {
                        onNavClick("services");
                        setServicesOpen(false);
                      }}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      {lang === "th" ? "จดทะเบียนบริษัท" : "Company registration"}
                    </Link>
                    <Link
                      role="menuitem"
                      href="/services"
                      onClick={() => {
                        onNavClick("services");
                        setServicesOpen(false);
                      }}
                      className="hidden"
                    >
                      {lang === "th" ? "ดูบริการทั้งหมด" : "View all services"}
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={servicesMenuMobileRef} className="relative lg:hidden">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
            >
              {labels.services}
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                <Link
                  role="menuitem"
                  href="/#services"
                  onClick={() => {
                    onNavClick("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {lang === "th" ? "ภาพรวมบริการ" : "Service overview"}
                </Link>
                <Link
                  role="menuitem"
                  href="/services/website"
                  onClick={() => {
                    onNavClick("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {lang === "th" ? "รับทำเว็บไซต์" : "Website development"}
                </Link>
                <Link
                  role="menuitem"
                  href="/services/dormitory-system"
                  onClick={() => {
                    onNavClick("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {lang === "th" ? "ระบบหอพัก/รีสอร์ท" : "Dormitory / resort system"}
                </Link>
                <Link
                  role="menuitem"
                  href="/services/company-registration"
                  onClick={() => {
                    onNavClick("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {lang === "th" ? "จดทะเบียนบริษัท" : "Company registration"}
                </Link>
                <Link
                  role="menuitem"
                  href="/services"
                  onClick={() => {
                    onNavClick("services");
                    setServicesOpen(false);
                  }}
                  className="hidden"
                >
                  {lang === "th" ? "ดูบริการทั้งหมด" : "View all services"}
                </Link>
              </div>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            <Globe className="h-4 w-4" />
            {lang === "th" ? "TH" : "EN"}
          </button>
          <Link href="/#contact" className={ctaClass}>
            <Phone className="h-4 w-4" />
            {cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
