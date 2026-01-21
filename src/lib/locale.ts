import { cookies, headers } from "next/headers";

export type Locale = "th" | "en";

const DEFAULT_LOCALE: Locale = "th";

function getLocaleFromCookie(value?: string): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  return normalized === "th" || normalized === "en" ? normalized : null;
}

function getLocaleFromHeader(value: string | null): Locale {
  if (!value) return DEFAULT_LOCALE;
  return value.toLowerCase().startsWith("en") ? "en" : "th";
}

export async function getRequestedLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const fromCookie = getLocaleFromCookie(cookieLang);
  if (fromCookie) return fromCookie;
  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  return getLocaleFromHeader(acceptLanguage);
}
