// Email 1 - Immediate Delivery Template
// Trigger: Immediately after quiz form submission

export const email1DeliveryTemplate = (data) => {
  const {
    first_name = 'there',
    archetype_name = 'Founder',
    signal_score = 0,
    signal_level = 'ROOM TO GROW',
    micro_tip = 'focus on emotional connection with data',
    download_link = 'https://www.authentikstudio.com/quiz#download',
    strategy_call_link = 'https://calendly.com/ermo/discoverycall',
    is_hybrid = false,
    secondary_archetype = '',
    confidence = 0,
    needs_retake = false
  } = data;

  return {
    subject: 'Your Signal DNA Report & Deep-Dive Workbook (€97 Value) Are Here!',
    html: `
      <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">Your Signal DNA Report</h1>
          <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-family: 'Work Sans', sans-serif;">Hi ${first_name},</p>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            You're a <strong>${archetype_name}</strong>${is_hybrid && secondary_archetype ? ` with strong ${secondary_archetype} traits` : ''}. Here's your Signal Score: ${signal_score}/24 (${signal_level}).
          </p>
          
          ${confidence > 0 ? `
          <div style="background-color: rgba(212, 179, 122, 0.1); padding: 10px; border-radius: 6px; margin-bottom: 15px; border-left: 3px solid #D4B37A;">
            <p style="color: #333333; font-size: 14px; margin: 0; font-family: 'Work Sans', sans-serif;">
              <strong>Result Confidence:</strong> ${confidence}%${needs_retake ? ' (Consider retaking for more accuracy)' : ''}
            </p>
          </div>
          ` : ''}
          
          <div style="background-color: rgba(212, 179, 122, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; font-family: 'Work Sans', sans-serif;">
              <strong>Quick tip for ${archetype_name} founders:</strong> ${micro_tip}
            </p>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${download_link}" style="display: inline-block; background-color: #D4B37A; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; font-family: 'Work Sans', sans-serif;">
              Download Your Workbook
            </a>
          </div>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            Inside you'll find six chapters, plus bonus Hybrid & Shadow deep dives.
          </p>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${strategy_call_link}" style="color: #D4B37A; text-decoration: none; font-size: 16px; font-weight: 500; font-family: 'Work Sans', sans-serif;">
              Book Your Free 15-Min Strategy Call
            </a>
          </div>
        </div>
        
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #D4B37A;">
          <p style="color: #666666; font-size: 14px; margin: 0; font-family: 'Work Sans', sans-serif;">
            Sent by Authentik Studio • Signal in the Noise<br>
            <a href="mailto:hello@authentikstudio.com" style="color: #D4B37A; text-decoration: none;">hello@authentikstudio.com</a>
          </p>
        </div>
      </div>
    `
  };
};

// Micro tips for each archetype
export const archetypeMicroTips = {
  'Visionary': 'Focus on painting a vivid picture of the future, but ground it with tangible first steps.',
  'Builder': 'Showcase your execution prowess, but remember to connect it to the bigger \'why\' for emotional resonance.',
  'Strategist': 'Your logical approach is powerful, but don\'t forget to weave in personal stories to build trust.',
  'Connector': 'Leverage your network, but ensure your core message is clear and not diluted by too many connections.',
  'Guardian': 'Your stability and reliability are assets, but balance them with innovation to show you\'re not stuck in the past.',
  'Trailblazer': 'Your disruptive ideas are compelling, but balance them with a clear path to adoption and impact.',
  'Default': 'Focus on clarity and connection in every message you send.'
};
