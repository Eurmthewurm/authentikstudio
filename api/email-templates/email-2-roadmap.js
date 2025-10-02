// Email 2 - 3-Step Roadmap Template
// Trigger: 24 hours after Email 1

export const email2RoadmapTemplate = (data) => {
  const {
    first_name = 'there',
    archetype_name = 'Founder',
    strategy_call_link = 'https://calendly.com/ermo/discoverycall'
  } = data;

  return {
    subject: `${archetype_name}: Your 3-Step Implementation Roadmap`,
    html: `
      <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">Your 3-Step Roadmap</h1>
          <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-family: 'Work Sans', sans-serif;">Hi ${first_name},</p>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            Here's a quick 3-step roadmap straight from your workbook:
          </p>
          
          <div style="background-color: rgba(212, 179, 122, 0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <ol style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px; font-family: 'Work Sans', sans-serif;">
              <li style="margin-bottom: 15px;">
                <strong>Step 1:</strong> Complete Chapter 1: Archetype Clarity Workshop for instant clarity.
              </li>
              <li style="margin-bottom: 15px;">
                <strong>Step 2:</strong> Use Chapter 2–3 to pinpoint your top emotional hooks and repair blind spots.
              </li>
              <li style="margin-bottom: 15px;">
                <strong>Step 3:</strong> Build a 30-sec pitch with Chapter 4's Signature Story Blueprint and test it tomorrow.
              </li>
            </ol>
          </div>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            Need a guided walkthrough? 
            <a href="${strategy_call_link}" style="color: #D4B37A; text-decoration: none; font-weight: 500;">
              Book a strategy call
            </a>
          </p>
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
