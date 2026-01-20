import "server-only";

import nodemailer from "nodemailer";

type LeadEmailPayload = {
  name: string;
  phone?: string | null;
  email?: string | null;
  message: string;
  locale: "th" | "en";
};

const getMailerConfig = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM;
  const admin = process.env.ADMIN_NOTIFY_EMAIL;

  if (!host || !user || !pass || !from || !admin) {
    return {
      ok: false as const,
      error: "Email notification is not configured.",
    };
  }

  return {
    ok: true as const,
    config: {
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      from,
      admin,
    },
  };
};

export const sendLeadNotification = async (payload: LeadEmailPayload) => {
  const mailer = getMailerConfig();

  if (!mailer.ok) {
    return mailer;
  }

  const { config } = mailer;
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  const subject =
    payload.locale === "th"
      ? `มีผู้ติดต่อใหม่จาก WebCraft Pro: ${payload.name}`
      : `New WebCraft Pro lead: ${payload.name}`;

  const text = [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone || "-"}`,
    `Email: ${payload.email || "-"}`,
    `Locale: ${payload.locale}`,
    `Message: ${payload.message}`,
  ].join("\n");

  const html = `
    <h2>New Lead</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${payload.name}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${payload.phone || "-"}</td></tr>
      <tr><td><strong>Email</strong></td><td>${payload.email || "-"}</td></tr>
      <tr><td><strong>Locale</strong></td><td>${payload.locale}</td></tr>
      <tr><td><strong>Message</strong></td><td>${payload.message}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: config.from,
    to: config.admin,
    subject,
    text,
    html,
  });

  return { ok: true as const };
};
