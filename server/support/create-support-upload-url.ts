import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

export async function createSupportUploadUrl(ticketReference: string, extension: string) {
  const config = getSupportSupabaseConfig();
  const client = createClient(config.url, config.serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
  const storagePath = `${ticketReference}/${randomUUID()}.${extension}`;
  const { data, error } = await client.storage
    .from("support-attachments")
    .createSignedUploadUrl(storagePath);

  if (error) {
    throw new Error("Attachment upload could not be authorized");
  }

  return { storagePath, token: data.token };
}
