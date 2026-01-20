import { NextResponse } from "next/server";

import { sendLeadNotification } from "@/lib/email";
import { getSupabaseServer } from "@/lib/supabase/server";

type LeadPayload = {
  name: string;
  phone?: string;
  email?: string;
  message: string;
  locale?: "th" | "en";
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!payload) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email format." },
      { status: 400 }
    );
  }

  if (!message || message.length < 5) {
    return NextResponse.json(
      { ok: false, error: "Message must be at least 5 characters." },
      { status: 400 }
    );
  }

  const supabaseServer = getSupabaseServer();
  const locale = payload.locale ?? "th";

  const { error } = await supabaseServer.from("leads").insert({
    name,
    phone: payload.phone?.trim() || null,
    email: email || null,
    message,
    locale,
  });

  if (error) {
    const isColumnError =
      error.code === "PGRST204" || /column/i.test(error.message || "");

    if (isColumnError) {
      const { error: fallbackError } = await supabaseServer.from("leads").insert({
        "ชื่อ-นามสกุล": name,
        เบอร์ติดต่อ: payload.phone?.trim() || null,
        อีเมล์: email || null,
        รายละเอียดที่ต้องการ: message,
      });

      if (fallbackError) {
        return NextResponse.json({ ok: false, error: "Unable to save lead." }, { status: 500 });
      }
    } else {
      return NextResponse.json({ ok: false, error: "Unable to save lead." }, { status: 500 });
    }
  }

  const emailResult = await sendLeadNotification({
    name,
    phone: payload.phone?.trim() || null,
    email: email || null,
    message,
    locale,
  });

  if (!emailResult.ok) {
    return NextResponse.json(
      { ok: false, error: emailResult.error ?? "Email notification failed." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
