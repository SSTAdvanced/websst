import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

type FooterProps = {
  company: string;
  address: string;
  phone: string;
  email: string;
  line: string;
  note: string;
};

export default function Footer({
  company,
  address,
  phone,
  email,
  line,
  note,
}: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[var(--font-heading)] text-2xl font-semibold text-white">
            {company}
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-400">{note}</p>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-slate-400" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-400" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-slate-400" />
            <span>{line}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        2026 SST INNOVATION. All rights reserved.
      </div>
    </footer>
  );
}
