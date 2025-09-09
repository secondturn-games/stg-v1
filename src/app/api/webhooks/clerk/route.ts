import { Webhook } from "svix";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const body = await req.text();
  const hdrs = await headers();
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: { type: string; data: Record<string, unknown> };
  try {
    evt = wh.verify(body, {
      "svix-id": hdrs.get("svix-id")!,
      "svix-timestamp": hdrs.get("svix-timestamp")!,
      "svix-signature": hdrs.get("svix-signature")!,
    });
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const supabase = await createClient();

  switch (evt.type) {
    case "user.created":
      await supabase.from("profiles").insert({
        id: evt.data.id,
        email: evt.data.email_addresses[0].email_address,
        first_name: evt.data.first_name ?? null,
        last_name: evt.data.last_name ?? null,
        country: evt.data.unsafe_metadata?.country ?? "OTHER",
        avatar_url: evt.data.image_url,
      });
      break;

    case "user.updated":
      await supabase.from("profiles").update({
        first_name: evt.data.first_name ?? null,
        last_name: evt.data.last_name ?? null,
        country: evt.data.unsafe_metadata?.country ?? "OTHER",
        avatar_url: evt.data.image_url,
      }).eq("id", evt.data.id);
      break;
  }

  return new Response("Webhook processed", { status: 200 });
}
