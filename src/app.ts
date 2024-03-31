import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const app: Application = express();

// parsers
app.use(express.json());

app.use(cors());

// Use your router for API routes
app.use('/api', router);

// Configuration for Mailgun
const auth = {
  auth: {
    api_key: process.env.EMAIL_PRIVATE_KEY,
    domain: process.env.EMAIL_DOMAIN,
  }
}

const transporter = nodemailer.createTransport(mg(auth as any));

// Define a basic route handler for the root path
app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a.toString());
});

// Define route for sending emails
app.post('/api/send-email', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, message,email } = req.body;

    // Check if required fields are present
    if (!firstName || !lastName || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Construct email content
    const mailOptions = {
      from: email, // Sender address
      to: 'mahmudulmoon123@gmail.com', // Receiver address
      subject: 'New Message from Your Website',
      text: `Name: ${firstName} ${lastName}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default app;
