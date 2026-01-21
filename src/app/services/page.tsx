import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import StructuredData from "@/components/StructuredData";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://websst.vercel.app";

const content = {
  th: {
    meta: {
      title: "บริการของเรา | SST INNOVATION",
      description:
        "รวมบริการหลักของ SST INNOVATION ครอบคลุมรับทำเว็บไซต์ โปรแกรมบริหารหอพัก/รีสอร์ท และบริการจดทะเบียนบริษัท",
    },
    hero: {
      title: "บริการหลักของ SST INNOVATION",
      subtitle: "เลือกบริการที่ตอบโจทย์ธุรกิจของคุณ พร้อมทีมงานดูแลครบวงจร",
    },
    crumbs: [
      { label: "หน้าแรก", href: "/" },
      { label: "บริการ" },
    ],
  },
  en: {
    meta: {
      title: "Our Services | SST INNOVATION",
      description:
        "Explore core services by SST INNOVATION: professional website development, dormitory/resort systems, and company registration.",
    },
    hero: {
      title: "Core services by SST INNOVATION",
      subtitle: "Choose the service that best fits your business goals.",
    },
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Services" },
    ],
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const data = content[locale].meta;
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const url = `${baseUrl}/services`;

  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: "/services" },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function ServicesIndexPage() {
  const locale = await getRequestedLocale();
  const data = content[locale];
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <StructuredData
        locale={locale}
        breadcrumbs={[
          { name: data.crumbs[0].label, item: `${baseUrl}/` },
          { name: data.crumbs[1].label, item: `${baseUrl}/services` },
        ]}
      />

      <section className="border-b border-slate-200 bg-mist py-10">
        <div className="mx-auto w-full max-w-6xl space-y-4 px-6">
          <Breadcrumbs items={data.crumbs} />
          <h1 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {data.hero.title}
          </h1>
          <p className="max-w-2xl text-base text-slate-600">{data.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
            >
              {locale === "th" ? "ขอใบเสนอราคา" : "Request a quote"}
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-700"
            >
              {locale === "th" ? "ปรึกษาฟรี" : "Free consultation"}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <ServiceLinks locale={locale} />
          <div className="mt-8">
            <Link href="/" className="text-sm font-semibold text-blue-700">
              {locale === "th" ? "กลับหน้าแรก" : "Back to home"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
