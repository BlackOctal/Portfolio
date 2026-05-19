const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <contact@janiduwelarathna.online>',
      to: ['janiduhwelarathna@gmail.com'],
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
          <p style="color: #e5e7eb; line-height: 1.7; white-space: pre-wrap;">${name} wrote:<br/><br/>${message}</p>

          <hr style="border: none; border-top: 1px solid rgba(139,92,246,0.2); margin: 1.5rem 0;" />
          <p style="font-size: 0.75rem; color: #4b5563;">Sent from janiduwelarathna.online portfolio contact form</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};