import { CheckCircle } from "lucide-react";
import type { Package } from "@/lib/constants";

export default function PackageCard({
  title,
  price,
  original,
  discount,
  features,
  highlight
}: Package) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 relative">
      {highlight ? (
        <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {highlight}
        </span>
      ) : null}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl font-bold text-blue-600">{price}</span>
        <span className="text-sm text-gray-500 line-through">{original}</span>
      </div>
      <p className="text-sm text-green-600 font-semibold mb-4">ลด {discount}</p>
      <ul className="space-y-2 text-gray-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle size={18} className="text-green-600 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

