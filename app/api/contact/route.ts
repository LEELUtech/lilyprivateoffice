import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function getZohoAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
  });

  const res = await fetch(
    "https://accounts.zoho.com/oauth/v2/token",
    { method: "POST", body: params }
  );

  const data = await res.json();
  if (!data.access_token) throw new Error("Failed to get Zoho access token");
  return data.access_token;
}

async function createZohoContact(fields: {
  name: string;
  email: string;
  organization: string;
  objective: string;
  pointOfContact: string;
  encryptedContact: string;
}) {
  const token = await getZohoAccessToken();

  const [firstName, ...rest] = fields.name.trim().split(" ");
  const lastName = rest.join(" ") || "-";

  const res = await fetch(
    "https://www.zohoapis.com/crm/v2/Contacts",
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: firstName,
            Last_Name: lastName,
            Email: fields.email,
            Account_Name: fields.organization || undefined,
            Description: `Objective: ${fields.objective}\nPoint of Contact: ${fields.pointOfContact}\nEncrypted Contact: ${fields.encryptedContact}`,
          },
        ],
        trigger: [],
      }),
    }
  );

  const result = await res.json();
  console.log("Zoho response:", JSON.stringify(result));

  if (!res.ok) {
    throw new Error(`Zoho API error: ${JSON.stringify(result)}`);
  }
}

async function sendEmail(fields: {
  name: string;
  email: string;
  organization: string;
  objective: string;
  pointOfContact: string;
  encryptedContact: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"The Private Office" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL_TO,
    subject: `New inquiry from ${fields.name}`,
    text: [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Organization: ${fields.organization || "—"}`,
      `Objective: ${fields.objective}`,
      `Point of Contact: ${fields.pointOfContact || "—"}`,
      `Encrypted Contact: ${fields.encryptedContact || "—"}`,
    ].join("\n"),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, objective, pointOfContact, encryptedContact } = body;

    if (!name || !email || !objective) {
      return NextResponse.json(
        { error: "Name, email and objective are required" },
        { status: 400 }
      );
    }

    const fields = { name, email, organization: organization ?? "", objective, pointOfContact: pointOfContact ?? "", encryptedContact: encryptedContact ?? "" };

    await Promise.all([
      sendEmail(fields),
      createZohoContact(fields),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
