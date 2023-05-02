import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

const oAuth2Client = new google.auth.OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH
);

/**
 * @param {string} to Recipient
 * @param {string} subject Email Title
 * @param {string} htmlContent Email Html Content
 */
export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string
) => {
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
    to: to,
    subject,
    html: htmlContent,
  };

  // Send email using transporter object
  try {
    const data = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
