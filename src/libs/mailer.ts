import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { MAILING_ID, MAILING_SECRET, MAILING_REFRESH, MAILING_ACCESS } =
  process.env;
// Create OAuth2 client using credentials and access token
const oAuth2Client = new google.auth.OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH
);

export const sendEmail = async (email: string, name: string, url: string) => {
  // Create a transporter object with Gmail SMTP transport and OAuth2 authentication

  oAuth2Client.setCredentials({
    refresh_token: MAILING_REFRESH,
  });

  const accessToken = oAuth2Client.getAccessToken() as unknown as string;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'daravix1500@gmail.com',
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });

  // Define message options
  const mailOptions = {
    from: 'daravix1500@gmail.com',
    to: 'fococi2267@saeoil.com',
    subject: 'Test Email',
    html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        Verification
      </body>
    </html>
`,
  };

  // Send email using transporter object
  const data = await transporter.sendMail(mailOptions);
};
