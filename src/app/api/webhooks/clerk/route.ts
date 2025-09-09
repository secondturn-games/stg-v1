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
    }) as { type: string; data: Record<string, unknown> };
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const supabase = await createClient();

  switch (evt.type) {
    case "user.created":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userData = evt.data as any;
      await supabase.from("profiles").insert({
        id: userData.id,
        email: userData.email_addresses[0].email_address,
        first_name: userData.first_name ?? null,
        last_name: userData.last_name ?? null,
        country: userData.unsafe_metadata?.country ?? "OTHER",
        avatar_url: userData.image_url,
      });
      break;

    case "user.updated":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateData = evt.data as any;
      await supabase.from("profiles").update({
        first_name: updateData.first_name ?? null,
        last_name: updateData.last_name ?? null,
        country: updateData.unsafe_metadata?.country ?? "OTHER",
        avatar_url: updateData.image_url,
      }).eq("id", updateData.id);
      break;
  }

  return new Response("Webhook processed", { status: 200 });
}
