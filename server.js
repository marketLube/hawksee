import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// API endpoint to handle form submission
app.post('/api/send-email', async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const transporter = createTransporter();

    // Modern email template for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@hawksee.in',
      subject: `New Consultation Request: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                ✨ New Consultation Request
              </h1>
              <p style="margin: 8px 0 0 0; color: #e0e7ff; font-size: 16px; opacity: 0.9;">
                Someone wants to connect with you
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Information Card -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #667eea;">
                <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                  👤 Contact Details
                </h2>
                
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 8px 0;">
                    <span style="width: 80px; color: #64748b; font-weight: 500; font-size: 14px;">Name:</span>
                    <span style="color: #1e293b; font-weight: 600;">${fullName}</span>
                  </div>
                  
                  <div style="display: flex; align-items: center; padding: 8px 0;">
                    <span style="width: 80px; color: #64748b; font-weight: 500; font-size: 14px;">Email:</span>
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500; border-bottom: 1px solid transparent; transition: border-bottom 0.2s;">
                      ${email}
                    </a>
                  </div>
                  
                  <div style="display: flex; align-items: center; padding: 8px 0;">
                    <span style="width: 80px; color: #64748b; font-weight: 500; font-size: 14px;">Phone:</span>
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none; font-weight: 500;">
                      ${phone}
                    </a>
                  </div>
                  
                  <div style="display: flex; align-items: center; padding: 8px 0;">
                    <span style="width: 80px; color: #64748b; font-weight: 500; font-size: 14px;">Subject:</span>
                    <span style="color: #1e293b; font-weight: 600;">${subject}</span>
                  </div>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; border-left: 4px solid #10b981;">
                <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                  💬 Message
                </h2>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; line-height: 1.6; color: #374151; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Action Buttons -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 12px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                  📧 Reply via Email
                </a>
                <a href="tel:${phone}" style="display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                  📞 Call Now
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 13px; line-height: 1.5;">
                🌐 This consultation request was sent from your website<br>
                <span style="color: #94a3b8;">Received on ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email only to admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent to admin successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});