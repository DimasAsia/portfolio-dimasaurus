export async function sendContactMessage(payload: {
  name: string;
  email: string;
  message_text: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Failed to send message");
  }

  return res.json();
}
