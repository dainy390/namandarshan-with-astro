const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
require('dotenv').config();

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const NOREPLY_EMAIL = 'noreply@namandarshan.com'; // Update with your verified domain
const NOREPLY_NAME = 'No Reply <noreply@namandarshan.com>';

const sendEmail = async (toEmail, subject, htmlContent) => {
  const params = {
    Source: NOREPLY_NAME,
    Destination: {
      ToAddresses: [toEmail],
    },
    ReplyToAddresses: [NOREPLY_EMAIL],
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${subject}</title>
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
      © 2026 Naman Darshan. All rights reserved.
    </p>
  </div>
</body>
</html>`,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log('SES Email sent:', result.MessageId);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    console.error('SES SendEmail error:', error);
    throw error;
  }
};

module.exports = { sendEmail };
