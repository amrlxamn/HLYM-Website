export async function notifySupportAccessLink(
  email: string,
  ticketReference: string,
  token: string
) {
  const webhookUrl = process.env.N8N_SUPPORT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const publicBaseUrl = process.env.SUPPORT_PUBLIC_BASE_URL ?? "http://localhost:5173";
  const response = await fetch(webhookUrl, {
    body: JSON.stringify({
      email,
      event: "support.access.requested",
      magicLink: `${publicBaseUrl}/support/access?token=${encodeURIComponent(token)}`,
      ticketReference
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Support-Webhook-Secret": process.env.N8N_SUPPORT_WEBHOOK_SECRET ?? ""
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  return response.ok;
}
