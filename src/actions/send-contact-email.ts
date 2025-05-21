
'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

// Schema for validating form data on the server
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message must not exceed 500 characters." }),
});

export interface ContactFormSubmissionState {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[]; // For general form errors
  };
  submittedData?: { // To repopulate form on validation error
    name: string;
    email: string;
    message: string;
  }
}

const initialState: ContactFormSubmissionState = {
  message: '',
  status: 'idle',
  errors: {},
  submittedData: undefined,
};

export async function sendContactEmailAction(
  prevState: ContactFormSubmissionState,
  formData: FormData
): Promise<ContactFormSubmissionState> {
  const rawFormData = {
    name: formData.get('name') as string || '',
    email: formData.get('email') as string || '',
    message: formData.get('message') as string || '',
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your inputs.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      submittedData: rawFormData,
    };
  }

  const { name, email, message } = validatedFields.data;
  const recipientEmail = 'sebastien.degrandpre@infonuagix.ai';

  console.log('Contact form submission details:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log(`This email would be sent to: ${recipientEmail}`);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'), // Default SMTP port
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      to: recipientEmail,
      from: process.env.EMAIL_FROM, // Use the environment variable for the 'from' address
      subject: `New message from ${name} via Infonuagix Contact Form`,
      html: `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `, // Use <pre> for message to preserve formatting
    });
    console.log('Email sent successfully.');
  } catch (e) {
    console.error('Failed to send email:', e);
    return {
      message: 'Sorry, there was an issue sending your message. Please try again later.',
      status: 'error',
      errors: { _form: ['Failed to send email.'] },
      submittedData: validatedFields.data,
    };
  }

  // Simulate network delay for the email sending process
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay for simulation

  return {
    message: 'Message Sent Successfully! Thank you for reaching out. We\'ll get back to you as soon as possible.',
    status: 'success',
    submittedData: undefined, // Clear form data on success
  };
}
