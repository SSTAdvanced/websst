import type { Metadata } from "next";
import { Noto_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const headingFont = Noto_Serif_Thai({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SST INNOVATION | WebCraft Pro",
  description:
    "โซลูชันเว็บไซต์องค์กรระดับพรีเมียมโดย SST INNOVATION / Premium enterprise website solutions by SST INNOVATION.",
  openGraph: {
    title: "SST INNOVATION | WebCraft Pro",
    description:
      "โซลูชันเว็บไซต์องค์กรระดับพรีเมียมโดย SST INNOVATION / Premium enterprise website solutions by SST INNOVATION.",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
