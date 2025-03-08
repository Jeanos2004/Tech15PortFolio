import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    console.log('Données du formulaire reçues:', { name, email, phone, company, service, message });
    
    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true' ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email envoyé à l'administrateur du site (vous)
    const adminMailOptions = {
      from: `"Tech 15 Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name} - Tech 15`,
      replyTo: email, // L'email de l'utilisateur est défini comme adresse de réponse
      text: `
        Nouveau message de contact reçu:
        
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone || 'Non renseigné'}
        Entreprise: ${company || 'Non renseigné'}
        Service: ${service || 'Non renseigné'}
        Message: ${message}
      `,
      html: `
        <h2>Nouveau message de contact - Tech 15</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
        <p><strong>Service:</strong> ${service || 'Non renseigné'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email de confirmation envoyé à l'utilisateur
    const userMailOptions = {
      from: `"Tech 15" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Confirmation de votre message - Tech 15`,
      text: `
        Bonjour ${name},
        
        Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.
        
        Notre équipe va étudier votre demande et vous répondra dans les plus brefs délais.
        
        Voici un récapitulatif de votre message :
        
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone || 'Non renseigné'}
        Entreprise: ${company || 'Non renseigné'}
        Service: ${service || 'Non renseigné'}
        Message: ${message}
        
        Cordialement,
        L'équipe Tech 15
      `,
      html: `
        <h2>Confirmation de votre message</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
        <p>Notre équipe va étudier votre demande et vous répondra dans les plus brefs délais.</p>
        
        <h3>Récapitulatif de votre message :</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
        <p><strong>Service:</strong> ${service || 'Non renseigné'}</p>
        <p><strong>Message:</strong> ${message}</p>
        
        <p>Cordialement,<br>L'équipe Tech 15</p>
      `,
    };

    try {
      // Envoi de l'email à l'administrateur
      await transporter.sendMail(adminMailOptions);
      
      // Envoi de l'email de confirmation à l'utilisateur
       await transporter.sendMail(userMailOptions);

      
      return NextResponse.json(
        { message: 'Emails envoyés avec succès' },
        { status: 200 }
      );
    } catch (emailError) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi des emails', details: emailError },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la requête' },
      { status: 500 }
    );
  }
}
