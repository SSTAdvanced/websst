import "server-only";
import { createClient } from "@supabase/supabase-js";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function requireServiceRoleKeyLooksValid(key: string) {
  // Supabase anon/service_role keys are JWTs (header.payload.signature)
  if (key.split(".").length < 3) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY does not look like a JWT. Paste the service_role key from Supabase Project Settings -> API."
    );
  }
}

// Create Supabase client only when called (does not break during build/import)
export function getSupabaseAdmin() {
  try {
    const supabaseUrl = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
    const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
    requireServiceRoleKeyLooksValid(serviceRoleKey);
    return createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
  } catch (error) {
    console.error("Error creating Supabase client:", error);
    throw error; // Re-throw the error after logging
  }
}
