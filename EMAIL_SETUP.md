# Hawksee Email Integration Setup

This setup allows the contact form to send emails through a Node.js backend server.

## Backend Setup

### 1. Install Dependencies
`ash
npm install express nodemailer cors dotenv
npm install -D nodemon
`

### 2. Configure Email Settings
1. Create a .env file in the root directory
2. Add your Gmail credentials:
`
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
`

### 3. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for this application
4. Use the App Password (not your regular password) in the EMAIL_PASS field

### 4. Start the Server
`ash
# Development mode
npm run dev

# Production mode
npm start
`

The server will run on http://localhost:5000

## Frontend Integration

The React form has been updated to:
- Send form data to the backend API
- Show loading states during submission
- Display success/error messages
- Handle network errors gracefully

## API Endpoints

- POST /api/send-email - Handles form submissions
- GET /api/health - Health check endpoint

## Email Templates

The system sends two emails:
1. **Admin Notification** - Sent to info@hawksee.in with form details
2. **Client Confirmation** - Sent to the client with confirmation and contact info

## Testing

1. Start the backend server
2. Start the React development server
3. Fill out the contact form and submit
4. Check both admin and client email inboxes

## Deployment

For production deployment:
1. Set up environment variables on your hosting platform
2. Update the API URL in the React app to point to your production server
3. Ensure your hosting platform allows outgoing SMTP connections
