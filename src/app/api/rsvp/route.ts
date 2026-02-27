import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createEmailTemplate } from '@/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, attendance, guests, dietary, message } = body;

    // Validate required fields
    if (!name || !email || !attendance) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Create email template
    const emailHtml = createEmailTemplate({
      name,
      email,
      attendance,
      guests,
      dietary,
      message,
    });

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@resend.dev';

    // Send email to both guest and admin
    const [guestEmail, adminEmailResponse] = await Promise.all([
      // Send to guest
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `Confirmación RSVP - Boda María José & Pablo José`,
        html: emailHtml,
      }),
      // Send to admin
      resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: `Nueva confirmación RSVP de ${name}`,
        html: emailHtml,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Confirmación enviada exitosamente',
      guestEmailId: guestEmail.data?.id,
      adminEmailId: adminEmailResponse.data?.id,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar la confirmación. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
