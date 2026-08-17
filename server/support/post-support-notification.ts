export async function postSupportNotification(event: string, payload: Record<string, unknown>) {
  const webhookUrl = process.env.N8N_SUPPORT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    body: JSON.stringify({ ...payload, event }),
    headers: {
      "Content-Type": "application/json",
      "X-Support-Webhook-Secret": process.env.N8N_SUPPORT_WEBHOOK_SECRET ?? ""
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  return response.ok;
}
