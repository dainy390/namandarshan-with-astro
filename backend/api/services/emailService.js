const path = require('path');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const nodemailer = require('nodemailer');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

let sesClient;
let smtpTransporter;

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function noReplyEmail() {
  return (
    process.env.NOREPLY_EMAIL ||
    process.env.SES_FROM_EMAIL ||
    process.env.SMTP_FROM_EMAIL ||
    'noreply@namandarshan.com'
  );
}

function fromAddress() {
  return (
    process.env.EMAIL_FROM ||
    process.env.SMTP_FROM ||
    process.env.SES_FROM ||
    `No Reply <${noReplyEmail()}>`
  );
}

function wrapEmail(subject, htmlContent) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto;">
    ${htmlContent}
    <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;">
    <p style="color: #666; font-size: 12px;">
      <strong>This is an automated email from Naman Darshan CRM.</strong><br>
      Please do not reply to this email.
    </p>
    <p style="color: #999; font-size: 11px;">
      &copy; 2026 Naman Darshan. All rights reserved.
    </p>
  </div>
</body>
</html>`;
}

function selectedEmailProvider() {
  const configuredProvider = String(process.env.EMAIL_PROVIDER || '').trim().toLowerCase();

  if (configuredProvider === 'smtp' && process.env.SMTP_HOST) return 'smtp';
  if (configuredProvider === 'ses') return 'ses';
  if (process.env.SMTP_HOST) return 'smtp';
  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return 'ses';
  if (process.env.SES_ENABLED === 'true') return 'ses';

  return null;
}

function getSesClient() {
  if (sesClient) return sesClient;

  const config = {
    region: process.env.AWS_REGION || process.env.SES_REGION || 'ap-south-1',
  };

  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };

    if (process.env.AWS_SESSION_TOKEN) {
      config.credentials.sessionToken = process.env.AWS_SESSION_TOKEN;
    }
  }

  sesClient = new SESClient(config);
  return sesClient;
}

function getSmtpTransporter() {
  if (smtpTransporter) return smtpTransporter;

  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' ||
    port === 465;
  const auth =
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined;

  smtpTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth,
  });

  return smtpTransporter;
}

function assertEmailProviderConfigured(provider) {
  if (provider) return;

  const error = new Error(
    'Email provider is not configured. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS or AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY in backend/.env.'
  );
  error.code = 'EMAIL_PROVIDER_NOT_CONFIGURED';
  throw error;
}

const sendEmail = async (toEmail, subject, htmlContent) => {
  const email = String(toEmail || '').trim();
  if (!email || !email.includes('@')) {
    const error = new Error(`Invalid email recipient: ${email || '(empty)'}`);
    error.code = 'EMAIL_RECIPIENT_INVALID';
    throw error;
  }

  const provider = selectedEmailProvider();
  assertEmailProviderConfigured(provider);

  const html = wrapEmail(subject, htmlContent);

  if (provider === 'smtp') {
    try {
      const result = await getSmtpTransporter().sendMail({
        from: fromAddress(),
        to: email,
        replyTo: noReplyEmail(),
        subject,
        html,
      });
      console.log('SMTP email sent:', result.messageId);
      return { success: true, messageId: result.messageId, provider };
    } catch (error) {
      console.error('SMTP email send error:', error);
      throw error;
    }
  }

  const params = {
    Source: fromAddress(),
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [noReplyEmail()],
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: html,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await getSesClient().send(command);
    console.log('SES Email sent:', result.MessageId);
    return { success: true, messageId: result.MessageId, provider };
  } catch (error) {
    console.error('SES SendEmail error:', error);
    throw error;
  }
};

module.exports = { sendEmail };
