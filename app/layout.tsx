import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebCraft Pro - สร้างเว็บไซต์ระดับมืออาชีพ",
  description: "ออกแบบเว็บไซต์สำเร็จรูป รองรับมือถือ ด้วยแพลตฟอร์มอันดับ 1 ในเมืองไทย"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

