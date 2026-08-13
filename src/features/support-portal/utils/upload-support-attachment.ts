import { supportSupabaseClient } from "@/lib/support-supabase-client";

export async function uploadSupportAttachment(file: File) {
  if (!supportSupabaseClient) {
    throw new Error("Attachment storage is unavailable");
  }

  const authorization = await fetch("/api/support-attachment-upload", {
    body: JSON.stringify({ fileName: file.name, mimeType: file.type, sizeBytes: file.size }),
    headers: { "Content-Type": "application/json" },
    method: "POST"
  });

  if (!authorization.ok) {
    throw new Error("Attachment is not allowed");
  }

  const upload = (await authorization.json()) as { storagePath: string; token: string };
  const { error } = await supportSupabaseClient.storage
    .from("support-attachments")
    .uploadToSignedUrl(upload.storagePath, upload.token, file);

  if (error) {
    throw new Error("Attachment upload failed");
  }

  const confirmation = await fetch("/api/support-attachment-confirm", {
    body: JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      sizeBytes: file.size,
      storagePath: upload.storagePath
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST"
  });

  if (!confirmation.ok) {
    throw new Error("Attachment confirmation failed");
  }
}
