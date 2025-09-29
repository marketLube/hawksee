@echo off
echo Installing backend dependencies...
npm install express nodemailer cors dotenv
npm install -D nodemon
echo.
echo Dependencies installed successfully!
echo.
echo Next steps:
echo 1. Update the .env file with your email credentials
echo 2. Run: npm run dev
echo 3. Test the form submission
pause
