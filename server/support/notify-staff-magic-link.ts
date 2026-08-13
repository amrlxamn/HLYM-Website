export async function notifyStaffMagicLink(email: string, magicLink: string) {
  const webhookUrl = process.env.N8N_SUPPORT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    body: JSON.stringify({ email, event: "support.staff.magic-link", magicLink }),
    headers: {
      "Content-Type": "application/json",
      "X-Support-Webhook-Secret": process.env.N8N_SUPPORT_WEBHOOK_SECRET ?? ""
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  return response.ok;
}
