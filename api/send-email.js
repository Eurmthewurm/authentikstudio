// Serverless function to send emails via Resend
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, score, result } = req.body;
    
    // Initialize Resend with API key from environment
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending email to:', email);
    console.log('Using API key:', process.env.RESEND_API_KEY ? 'Found' : 'Not found');
    console.log('API key length:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0);
    console.log('API key preview:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'No key');

    // Send email
    const emailResult = await resend.emails.send({
      from: 'Authentik Studio <hello@authentikstudio.com>',
      to: [email],
      subject: `Your Signal DNA Report: ${result.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #fafafa;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #fbbf24; font-size: 28px; margin-bottom: 10px;">Your Signal DNA Report</h1>
            <div style="width: 60px; height: 3px; background: linear-gradient(to right, #fbbf24, #f59e0b); margin: 0 auto;"></div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
            <h2 style="color: #fbbf24; font-size: 24px; margin-bottom: 15px;">${result.title}</h2>
            <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">${result.message}</p>
            
            <div style="background-color: #fbbf24; color: #0a0a0a; padding: 15px; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">Your Score: ${score}/24</h3>
              <p style="margin: 0; font-weight: 500;">${result.recommendation}</p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; padding: 15px; background-color: #2a2a2a; border-radius: 8px; border-left: 4px solid #fbbf24;">
              <img src="https://via.placeholder.com/60x60/333/fff?text=JG" alt="J-Griff" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
              <div>
                <p style="color: #e5e5e5; font-size: 16px; margin: 0 0 8px 0; font-style: italic;">
                  "Signal DNA transformed how I connect with my conscious entrepreneur audience."
                </p>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="color: #fbbf24; font-weight: 600;">— J-Griff</span>
                  <span style="background-color: #22c55e; color: #fff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                    €6M Revenue Growth
                  </span>
                </div>
              </div>
            </div>
            
            <h3 style="color: #fbbf24; font-size: 20px; margin-bottom: 15px;">🎯 Your Next Step</h3>
            <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Ready to apply your Signal DNA to your next investor meeting? Let's discuss how your archetype can transform your communication in a free 15-minute clarity call.
            </p>
            <a href="https://calendly.com/ermo/discoverycall" 
               style="display: inline-block; background: linear-gradient(to right, #fbbf24, #f59e0b); color: #0a0a0a; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Book Free 15-Min Clarity Call
            </a>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              Sent by Authentik Studio • Signal in the Noise<br>
              <a href="mailto:hello@authentikstudio.com" style="color: #fbbf24;">hello@authentikstudio.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', emailResult);
    console.log('Email result data:', JSON.stringify(emailResult, null, 2));

    return res.status(200).json({ 
      success: true, 
      messageId: emailResult.data?.id,
      message: 'Email sent successfully',
      fullResult: emailResult
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      details: error 
    });
  }
}
