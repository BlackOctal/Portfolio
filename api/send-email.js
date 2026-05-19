// api/send-email.js
// Place this file at: /api/send-email.js in your project root (for Vercel deployment)
// Set RESEND_API_KEY and CONTACT_TO_EMAIL in your Vercel environment variables

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <contact@yourdomain.com>', // ← replace with your verified Resend domain
      to: [process.env.CONTACT_TO_EMAIL || 'janiduhwelarathna@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #0f0f17; color: #e5e7eb; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 1.5rem; font-size: 1.5rem;">New Portfolio Message</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.6rem 0; color: #9ca3af; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 0.6rem 0; color: #f3f4f6; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem 0; color: #9ca3af; vertical-align: top;">Email</td>
              <td style="padding: 0.6rem 0;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 0.6rem 0; color: #9ca3af; vertical-align: top;">Phone</td>
              <td style="padding: 0.6rem 0; color: #f3f4f6;">${phone}</td>
            </tr>` : ''}
          </table>

          <hr style="border: none; border-top: 1px solid rgba(139,92,246,0.2); margin: 1.5rem 0;" />

          <h3 style="color: #9ca3af; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Message</h3>
          <p style="color: #e5e7eb; line-height: 1.7; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid rgba(139,92,246,0.2); margin: 1.5rem 0;" />
          <p style="font-size: 0.75rem; color: #4b5563;">Sent from janiduhwelarathna.dev portfolio contact form</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}