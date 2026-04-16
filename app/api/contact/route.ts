import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { resend, GYM_OWNER_EMAIL } from '@/lib/resend';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/),
  message: z.string().max(1000).optional(),
});

// Email template
function generateEmailTemplate(data: z.infer<typeof contactSchema>) {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #FF6200; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; margin-top: 5px; }
    .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${data.phone}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message || 'No message provided'}</div>
      </div>
      <div class="field">
        <div class="label">Submitted:</div>
        <div class="value">${new Date().toLocaleString()}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your gym website contact form.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'FitForge Gym <onboarding@resend.dev>',
      to: GYM_OWNER_EMAIL,
      subject: `New Contact Form Submission - ${validatedData.name}`,
      html: generateEmailTemplate(validatedData),
    });

    console.log('Email sent successfully:', result);

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll contact you within 24 hours.",
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.issues.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Contact form error:', error);

    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please try again or contact us via WhatsApp.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
