// Serverless function to send emails via Resend
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, score, result, name, type, ebook_request, consent } = req.body;
    
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
      // Default quiz results email
      subject = `Your Signal DNA Report: ${result.title}`;
      emailContent = `
        <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">Your Signal DNA Report</h1>
            <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
          </div>
          
          <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
            <h2 style="color: #D4B37A; font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 15px;">${result.title}</h2>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">${result.message}</p>
            
            <div style="background-color: #D4B37A; color: #FFFFFF; padding: 15px; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px; font-family: 'Work Sans', sans-serif;">Your Score: ${score}/24</h3>
              <p style="margin: 0; font-weight: 500; font-family: 'Work Sans', sans-serif;">${result.recommendation}</p>
            </div>
          </div>
          
          <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
            <h3 style="color: #A67C52; font-family: 'Playfair Display', serif; font-size: 20px; margin-bottom: 15px;">📚 Your Exclusive Signal DNA Presentation</h3>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
              Access your exclusive Signal DNA presentation with detailed archetype breakdowns, real examples, and actionable frameworks. This comprehensive guide takes you beyond surface-level awareness into deep archetype mastery.
            </p>
            <div style="background-color: rgba(212, 179, 122, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
              <h4 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 18px; margin: 0 0 10px 0;">What's Inside:</h4>
              <ul style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px; font-family: 'Work Sans', sans-serif;">
                <li>Archetype Clarity Workshop</li>
                <li>Strengths Amplification Lab</li>
                <li>Blind Spot Diagnosis & Repair</li>
                <li>Hybrid Profile Mastery</li>
                <li>Shadow Archetype Integration</li>
                <li>Signature Story Blueprint</li>
              </ul>
            </div>
            <a href="https://elite-edition-k8fgc36.gamma.site/?utm_source=email&utm_medium=quiz_report&utm_campaign=signal_dna" 
               style="display: inline-block; background-color: #D4B37A; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; font-family: 'Work Sans', sans-serif; transition: background-color 0.2s; margin-bottom: 20px;">
              Access Your Signal DNA Presentation
            </a>
            
            <div style="background-color: rgba(212, 179, 122, 0.05); padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #A67C52;">
              <h4 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 16px; margin: 0 0 10px 0;">🎥 Bonus: Video Testimonial</h4>
              <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0; font-family: 'Work Sans', sans-serif;">
                Watch J-Griff's full testimonial video inside the workbook to see the complete transformation story and learn from his experience.
              </p>
              <a href="https://vimeo.com/1112128628?utm_source=email&utm_medium=quiz_report&utm_campaign=testimonial" 
                 style="color: #A67C52; text-decoration: none; font-size: 14px; font-weight: 500; font-family: 'Work Sans', sans-serif;">
                Watch Video Testimonial →
              </a>
            </div>
          </div>

          <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
            <div style="margin-bottom: 20px; padding: 20px; background-color: rgba(212, 179, 122, 0.05); border-radius: 8px; border-left: 4px solid #D4B37A;">
              <p style="color: #333333; font-size: 16px; margin: 0 0 15px 0; font-style: italic; font-family: 'Work Sans', sans-serif;">
                "Ermo is a master at creating long-form video content—content that humanizes you, builds trust with your audience, and breaks down the invisible walls that usually prevent people from buying from strangers on the internet. He helped us grow from €2M to €6M in revenue within 18 months."
              </p>
              <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 60px; height: 60px; background-color: #D4B37A; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px; font-family: 'Work Sans', sans-serif; border: 3px solid #A67C52;">
                  JG
                </div>
                <div>
                  <span style="color: #D4B37A; font-weight: 600; font-family: 'Work Sans', sans-serif; font-size: 16px;">— J-Griff</span>
                  <span style="background-color: #A67C52; color: #fff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; font-family: 'Work Sans', sans-serif; margin-left: 10px;">
                    €6M Revenue Growth
                  </span>
                </div>
              </div>
            </div>
            
            <h3 style="color: #A67C52; font-family: 'Playfair Display', serif; font-size: 20px; margin-bottom: 15px;">🎯 Your Next Step</h3>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
              Ready to apply your Signal DNA to your next investor meeting? Let's discuss how your archetype can transform your communication in a free 15-minute clarity call.
            </p>
            <a href="https://calendly.com/ermo/discoverycall?utm_source=email&utm_medium=quiz_report&utm_campaign=clarity_call" 
               style="display: inline-block; background-color: #D4B37A; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; font-family: 'Work Sans', sans-serif; transition: background-color 0.2s;">
              Book Free 15-Min Clarity Call
            </a>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #D4B37A;">
            <p style="color: #666666; font-size: 14px; margin: 0; font-family: 'Work Sans', sans-serif;">
              Sent by Authentik Studio • Signal in the Noise<br>
              <a href="mailto:hello@authentikstudio.com" style="color: #D4B37A; text-decoration: none;">hello@authentikstudio.com</a>
            </p>
          </div>
        </div>
      `;
    }

    // Send email
    const emailResult = await resend.emails.send({
      from: 'Authentik Studio <hello@authentikstudio.com>',
      to: [email],
      subject: subject,
      html: emailContent
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