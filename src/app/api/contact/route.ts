import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

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

  const locale = payload.locale ?? "th";

  const { error } = await supabaseAdmin.from("leads").insert({
    name,
    phone: payload.phone?.trim() || null,
    email: email || null,
    message,
    locale,
    source: "contact_form",
  });

  if (error) {
    console.error("Failed to insert lead", {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    });
    return NextResponse.json(
      { ok: false, error: "Unable to save lead.", details: error },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
