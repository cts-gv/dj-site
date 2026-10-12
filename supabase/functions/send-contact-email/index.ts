import { createClient } from "npm:@supabase/supabase-js@2.57.4";
import Resend from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, eventType, eventDate, message } = await req.json();

    if (!name || !email || !eventType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Save submission to database
    const { data: insertData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        event_type: eventType,
        event_date: eventDate || null,
        message: message || null,
      })
      .select()
      .maybeSingle();

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Email to the client (confirmation)
      await resend.emails.send({
        from: "DJ-You <booking@dj-you.com>",
        to: email,
        subject: "We received your booking request!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; padding: 40px; color: #f5f5f5;">
            <h1 style="color: #f97316; font-size: 28px; margin-bottom: 24px;">DJ-You</h1>
            <h2 style="color: #ffffff; font-size: 22px;">Hey ${name}, thanks for reaching out!</h2>
            <p style="color: #d4d4d4; font-size: 16px; line-height: 1.6;">
              We've received your booking request and we're excited to help make your event unforgettable.
              Here's what you submitted:
            </p>
            <ul style="color: #d4d4d4; font-size: 16px; line-height: 1.8;">
              <li><strong>Event Type:</strong> ${eventType}</li>
              <li><strong>Date:</strong> ${eventDate || "To be determined"}</li>
              <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
              ${message ? `<li><strong>Details:</strong> ${message}</li>` : ""}
            </ul>
            <p style="color: #d4d4d4; font-size: 16px; line-height: 1.6;">
              We'll get back to you within 24 hours to discuss your event in detail.
              In the meantime, feel free to reach us at any time.
            </p>
            <p style="color: #f97316; font-size: 16px; margin-top: 32px;">Let's make it a party!<br/>— DJ-You</p>
          </div>
        `,
      });

      // Email to the DJ (notification)
      await resend.emails.send({
        from: "DJ-You <booking@dj-you.com>",
        to: "booking@dj-you.com",
        subject: `New booking request: ${name} — ${eventType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; padding: 40px; color: #f5f5f5;">
            <h1 style="color: #f97316; font-size: 28px;">New Booking Request</h1>
            <ul style="color: #d4d4d4; font-size: 16px; line-height: 1.8;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone || "N/A"}</li>
              <li><strong>Event Type:</strong> ${eventType}</li>
              <li><strong>Date:</strong> ${eventDate || "TBD"}</li>
              <li><strong>Message:</strong> ${message || "None"}</li>
            </ul>
          </div>
        `,
      });
    }

    return new Response(
      JSON.stringify({ success: true, id: insertData?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
