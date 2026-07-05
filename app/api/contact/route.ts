import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullName, companyName, email, phone, projectType, engagementType, projectDescription } =
    await req.json();

  if (!fullName || !email || !projectType || !engagementType || !projectDescription) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        to: [process.env.CONTACT_TO],
        sender: process.env.CONTACT_FROM || "DJ2 Services <noreply@dj2-services.vercel.app>",
        replyto: [email],
        subject: `New project inquiry from ${fullName} — DJ2 Services`,
        text_body: `Full Name: ${fullName}
Company: ${companyName || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Project Type: ${projectType}
Engagement Type: ${engagementType}

Project Description:
${projectDescription}`,
        html_body: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f8f5;">
            <div style="background: #0D0F14; padding: 24px; margin-bottom: 24px;">
              <p style="color: #C9A96E; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">DJ2 Services</p>
              <h1 style="color: white; font-size: 20px; margin: 0;">New Project Inquiry</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${companyName || "Not provided"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;"><a href="mailto:${email}" style="color: #0D0F14;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Project Type</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${projectType}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Engagement Type</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${engagementType}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Project Description</p>
              <p style="color: #0C1B2E; line-height: 1.7; white-space: pre-wrap;">${projectDescription}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();
    if (!res.ok || data.data?.failures?.length > 0) {
      console.error("SMTP2GO error:", data);
      return NextResponse.json({ error: JSON.stringify(data) }, { status: 500 });
    }
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
