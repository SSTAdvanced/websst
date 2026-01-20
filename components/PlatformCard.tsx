import { Globe, LayoutGrid, ShoppingBag, Sparkles, Square } from "lucide-react";
import type { ElementType } from "react";
import type { Platform } from "@/lib/constants";

const iconMap: Record<string, ElementType> = {
  wordpress: Globe,
  wix: Sparkles,
  squarespace: Square,
  shopify: ShoppingBag,
  weebly: LayoutGrid
};

export default function PlatformCard({
  platform,
  icon,
  color,
  years,
  users,
  websites,
  awards,
  clients,
  suitable
}: Platform) {
  const Icon = iconMap[icon] ?? Globe;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className={`${color} text-white p-3 rounded-lg`}>
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-bold">{platform}</h3>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <p><span className="font-semibold">อายุแพลตฟอร์ม:</span> {years}</p>
        <p><span className="font-semibold">ผู้ใช้:</span> {users}</p>
        <p><span className="font-semibold">เว็บไซต์:</span> {websites}</p>
        <p><span className="font-semibold">รางวัล:</span> {awards}</p>
        <p><span className="font-semibold">ลูกค้าชั้นนำ:</span> {clients}</p>
        <p><span className="font-semibold">เหมาะกับ:</span> {suitable}</p>
      </div>
    </div>
  );
}

