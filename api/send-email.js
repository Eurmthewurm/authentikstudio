// Serverless function to send emails via Resend
import { Resend } from 'resend';
import { EmailSequenceManager } from './email-sequence/sequence-manager.js';
import { email1DeliveryTemplate, archetypeMicroTips } from './email-templates/email-1-delivery.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, score, result, name, type, ebook_request, consent, archetype_name, signal_score, signal_level, is_hybrid, secondary_archetype, confidence, needs_retake, original_primary } = req.body;
    
    // Initialize Resend with API key from environment
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending email to:', email);
    console.log('Email type:', type || 'quiz_results');
    console.log('Using API key:', process.env.RESEND_API_KEY ? 'Found' : 'Not found');
    console.log('API key length:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0);
    console.log('API key preview:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'No key');

    // Determine email content based on type
    let emailContent;
    let subject;
    
    if (type === 'ebook_request') {
      subject = `Premium Ebook Request: ${name}`;
      emailContent = `
        <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
          <h2 style="color: #111111; font-family: 'Playfair Display', serif;">New Premium Ebook Request</h2>
          <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Request:</strong> ${ebook_request}</p>
            <p><strong>Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #D4B37A;">
            <p style="color: #666666; font-size: 14px; margin: 0; font-family: 'Work Sans', sans-serif;">
              Authentik Studio • Signal in the Noise
            </p>
          </div>
        </div>
      `;
    } else {
      // Start the 5-email drip campaign
      const userData = {
        email,
        first_name: name || 'there',
        archetype_name: archetype_name || result.title,
        signal_score: signal_score || score,
        signal_level: signal_level || (score >= 18 ? 'Signal Champion' : score >= 12 ? 'Strong Signal' : 'Signal Building'),
        micro_tip: archetypeMicroTips[archetype_name || result.title] || archetypeMicroTips['Default'],
        download_link: 'https://www.authentikstudio.com/quiz#download',
        strategy_call_link: 'https://calendly.com/ermo/discoverycall',
        // New archetype data
        is_hybrid: is_hybrid || false,
        secondary_archetype: secondary_archetype || '',
        confidence: confidence || 0,
        needs_retake: needs_retake || false,
        original_primary: original_primary || ''
      };

      // Start the email sequence
      const sequenceId = await EmailSequenceManager.startSequence(userData);
      
      console.log(`✅ Email sequence started for ${email}: ${sequenceId}`);

      return res.status(200).json({ 
        success: true, 
        messageId: sequenceId,
        message: 'Email sequence started successfully',
        sequenceStarted: true
      });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      details: error 
    });
  }
}