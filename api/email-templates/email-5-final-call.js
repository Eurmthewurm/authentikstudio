// Email 5 - Final Call Template
// Trigger: 7 days after Email 1

export const email5FinalCallTemplate = (data) => {
  const {
    first_name = 'there',
    archetype_name = 'Founder',
    strategy_call_link = 'https://calendly.com/ermo/discoverycall'
  } = data;

  return {
    subject: 'Last Chance: Your Signal DNA Strategy Session',
    html: `
      <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">Final Call</h1>
          <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-family: 'Work Sans', sans-serif;">Hi ${first_name},</p>
          
          <div style="background-color: rgba(255, 87, 34, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #FF5722;">
            <h3 style="color: #A67C52; font-family: 'Playfair Display', serif; font-size: 18px; margin: 0 0 10px 0;">⚡ Limited Availability</h3>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; font-family: 'Work Sans', sans-serif;">
              Only a few strategy calls left this month—here's what you'll gain:
            </p>
          </div>
          
          <div style="background-color: rgba(212, 179, 122, 0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <ul style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px; font-family: 'Work Sans', sans-serif;">
              <li style="margin-bottom: 10px;">
                A custom pitch structure for your <strong>${archetype_name}</strong>
              </li>
              <li style="margin-bottom: 10px;">
                A 3-point story arc to close deals faster
              </li>
              <li style="margin-bottom: 10px;">
                Clarity on your Hybrid & Shadow elements
              </li>
            </ul>
          </div>
          
          <div style="background-color: rgba(212, 179, 122, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; font-family: 'Work Sans', sans-serif; font-style: italic;">
              "J-Griff closed €6M after our call—here's how we did it…"
            </p>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${strategy_call_link}" style="display: inline-block; background-color: #D4B37A; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; font-family: 'Work Sans', sans-serif;">
              Claim Your Strategy Session
            </a>
          </div>
          
          <p style="color: #333333; font-size: 14px; line-height: 1.6; margin-bottom: 0; font-family: 'Work Sans', sans-serif;">
            P.S. If you've already booked, reply to this email with your questions.
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
