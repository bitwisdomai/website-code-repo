import { createTransport } from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return createTransport({
    service: 'gmail', // You can change this to other services
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
    connectionTimeout: 5000, // 5 seconds connection timeout
    greetingTimeout: 5000, // 5 seconds greeting timeout
    socketTimeout: 10000, // 10 seconds socket timeout
  });
};

// Send contact form notification email
export const sendContactFormEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"BitWisdom Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL, // Owner's email address
      subject: `New Contact Form Submission - ${contactData.subject || 'No Subject'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00f0ff 0%, #0080ff 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0080ff; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #00f0ff; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${contactData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${contactData.email}</div>
              </div>
              ${contactData.organization ? `
              <div class="field">
                <div class="label">Organization:</div>
                <div class="value">${contactData.organization}</div>
              </div>
              ` : ''}
              ${contactData.subject ? `
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${contactData.subject}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${contactData.message}</div>
              </div>
              <div class="field">
                <div class="label">Submitted At:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw error;
  }
};

// Send qualifying application notification email
export const sendQualifyingApplicationEmail = async (applicationData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"BitWisdom Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL, // Owner's email address
      subject: `New Qualifying Customer Application - ${applicationData.businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00f0ff 0%, #0080ff 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #0080ff; margin-bottom: 10px; border-bottom: 2px solid #00f0ff; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-top: 3px; padding: 8px; background: white; border-left: 3px solid #00f0ff; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Qualifying Customer Application</h2>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Business Information</div>
                <div class="field">
                  <div class="label">Business Name:</div>
                  <div class="value">${applicationData.businessName}</div>
                </div>
                <div class="field">
                  <div class="label">Business Address:</div>
                  <div class="value">${applicationData.businessAddress}</div>
                </div>
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value">${applicationData.phoneNumber}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${applicationData.emailAddress}</div>
                </div>
                <div class="field">
                  <div class="label">Business Type:</div>
                  <div class="value">${applicationData.businessType}</div>
                </div>
                <div class="field">
                  <div class="label">Registration Number:</div>
                  <div class="value">${applicationData.registrationNumber}</div>
                </div>
                <div class="field">
                  <div class="label">Registration Jurisdiction:</div>
                  <div class="value">${applicationData.registrationJurisdiction}</div>
                </div>
                <div class="field">
                  <div class="label">Tax ID:</div>
                  <div class="value">${applicationData.taxId}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Ownership Information</div>
                <div class="field">
                  <div class="label">Beneficial Owners:</div>
                  <div class="value">${applicationData.beneficialOwners}</div>
                </div>
                <div class="field">
                  <div class="label">Nationality:</div>
                  <div class="value">${applicationData.nationality}</div>
                </div>
                <div class="field">
                  <div class="label">Corporate Structure:</div>
                  <div class="value">${applicationData.corporateStructure}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Financial Information</div>
                <div class="field">
                  <div class="label">Source of Funds:</div>
                  <div class="value">${applicationData.sourceOfFunds}</div>
                </div>
                <div class="field">
                  <div class="label">Intended Use:</div>
                  <div class="value">${applicationData.intendedUse}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Submitted Documents</div>
                <div class="field">
                  <div class="value">
                    ✓ Government ID<br>
                    ✓ Articles of Incorporation<br>
                    ✓ Certificate of Incorporation<br>
                    ✓ Proof of Address
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="label">Submitted At:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Qualifying application email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending qualifying application email:', error);
    throw error;
  }
};

// Send waitlist notification email
export const sendWaitlistEmail = async (waitlistData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"BitWisdom Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Waitlist Signup - ${waitlistData.waitlistType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00f0ff 0%, #0080ff 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0080ff; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #00f0ff; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Waitlist Signup</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Waitlist Type:</div>
                <div class="value">${waitlistData.waitlistType}</div>
              </div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${waitlistData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${waitlistData.email}</div>
              </div>
              <div class="field">
                <div class="label">Submitted At:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Waitlist email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending waitlist email:', error);
    throw error;
  }
};

// Generic email sender (for future use)
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"BitWisdom" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
