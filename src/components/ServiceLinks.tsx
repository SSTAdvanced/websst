import Link from "next/link";
import type { Locale } from "@/lib/locale";

type ServiceLinksProps = {
  locale: Locale;
  current?: "website" | "dormitory-system" | "company-registration";
};

const servicesByLocale = {
  th: [
    {
      key: "website",
      title: "รับทำเว็บไซต์ระดับมืออาชีพ",
      description:
        "ออกแบบและพัฒนาเว็บไซต์องค์กรที่สื่อสารแบรนด์ชัดเจน พร้อมรองรับ SEO และการเติบโตในระยะยาว",
      href: "/services/website",
    },
    {
      key: "dormitory-system",
      title: "โปรแกรมบริหารหอพัก/รีสอร์ท",
      description:
        "ระบบจัดการห้องพัก สัญญา และการชำระเงินแบบครบวงจร ลดงานซ้ำซ้อนและเพิ่มความแม่นยำ",
      href: "/services/dormitory-system",
    },
    {
      key: "company-registration",
      title: "บริการจดทะเบียนบริษัทครบวงจร",
      description:
        "ดูแลตั้งแต่การวางโครงสร้างธุรกิจ เอกสาร ไปจนถึงการยื่นจดทะเบียนอย่างถูกต้อง",
      href: "/services/company-registration",
    },
  ],
  en: [
    {
      key: "website",
      title: "Professional Website Development",
      description:
        "Strategic, premium websites built for credibility, SEO readiness, and long-term scalability.",
      href: "/services/website",
    },
    {
      key: "dormitory-system",
      title: "Dormitory & Resort Management System",
      description:
        "End-to-end system for rooms, contracts, payments, and reporting with real-world workflows.",
      href: "/services/dormitory-system",
    },
    {
      key: "company-registration",
      title: "Complete Company Registration Service",
      description:
        "Guided setup, documentation, and registration support to launch with confidence.",
      href: "/services/company-registration",
    },
  ],
} as const;

export default function ServiceLinks({ locale, current }: ServiceLinksProps) {
  const services = servicesByLocale[locale];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => {
        const isCurrent = service.key === current;
        return (
          <Link
            key={service.key}
            href={service.href}
            className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-card-soft transition hover:-translate-y-1 hover:shadow-xl ${
              isCurrent ? "ring-2 ring-blue-600/20" : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {locale === "th" ? "ดูรายละเอียด" : "View details"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
