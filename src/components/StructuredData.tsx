import type { Locale } from "@/lib/locale";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceSchema = {
  name: string;
  description: string;
  serviceType: string;
  url: string;
};

type StructuredDataProps = {
  locale: Locale;
  includeGlobal?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  service?: ServiceSchema;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://websst.vercel.app";

const companyInfo = {
  th: {
    name: "บริษัท เอสเอสที อินโนเวชั่น จำกัด",
    alternateName: "SST INNOVATION Co., Ltd.",
    description:
      "SST INNOVATION ให้บริการรับทำเว็บไซต์ระดับมืออาชีพ พัฒนาโปรแกรมบริหารหอพักและรีสอร์ท พร้อมบริการจดทะเบียนบริษัทครบวงจร ดูแลตั้งแต่เริ่มต้นจนธุรกิจเติบโต",
  },
  en: {
    name: "SST INNOVATION Co., Ltd.",
    alternateName: "บริษัท เอสเอสที อินโนเวชั่น จำกัด",
    description:
      "SST INNOVATION provides professional website development, dormitory and resort management systems, and complete company registration services to support your business growth.",
  },
};

export default function StructuredData({
  locale,
  includeGlobal = false,
  breadcrumbs,
  faqs,
  service,
}: StructuredDataProps) {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const info = companyInfo[locale];
  const graph: Record<string, unknown>[] = [];

  if (includeGlobal) {
    graph.push(
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: info.name,
        alternateName: info.alternateName,
        url: `${baseUrl}/`,
        description: info.description,
        email: "sstaminno@gmail.com",
        telephone: "0843374982",
        sameAs: ["https://line.me/R/ti/p/@974qhtym"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "0843374982",
            contactType: "customer support",
            email: "sstaminno@gmail.com",
            availableLanguage: ["th", "en"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: info.name,
        alternateName: info.alternateName,
        url: `${baseUrl}/`,
        description: info.description,
        telephone: "0843374982",
        email: "sstaminno@gmail.com",
        sameAs: ["https://line.me/R/ti/p/@974qhtym"],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "หมู่บ้านนันทนาการ์เด้นท์ 139/32 139 32 ตำบล บ้านกลาง อำเภอเมือง ปทุมธานี 12000",
          addressCountry: "TH",
        },
      }
    );
  }

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${service.url}#service`,
      name: service.name,
      description: service.description,
      serviceType: service.serviceType,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "TH",
      url: service.url,
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    });
  }

  if (!graph.length) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
