// Email 3 - Case Study Template
// Trigger: 3 days after Email 1

export const email3CaseStudyTemplate = (data) => {
  const {
    first_name = 'there',
    archetype_name = 'Founder',
    strategy_call_link = 'https://calendly.com/ermo/discoverycall'
  } = data;

  return {
    subject: `How a ${archetype_name} Founder Raised €2.3M Using Signal DNA`,
    html: `
      <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">€2.3M Success Story</h1>
          <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-family: 'Work Sans', sans-serif;">Hi ${first_name},</p>
          
          <div style="background-color: rgba(212, 179, 122, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <p style="color: #333333; font-size: 18px; line-height: 1.6; margin: 0 0 15px 0; font-family: 'Work Sans', sans-serif; font-style: italic;">
              "Before: [Founder's pitch felt like a spreadsheet]. After: Investors were on the edge of their seats."
            </p>
          </div>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            As a <strong>${archetype_name}</strong>, you can blend data + narrative just like Camille did in Chapter 2's framework.
          </p>
          
          <div style="background-color: rgba(166, 124, 82, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #A67C52; font-family: 'Playfair Display', serif; font-size: 18px; margin: 0 0 10px 0;">The Transformation:</h3>
            <ul style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px; font-family: 'Work Sans', sans-serif;">
              <li>From data-dumping to story-driven presentations</li>
              <li>From generic pitches to personalized archetype messaging</li>
              <li>From investor skepticism to €2.3M raised</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${strategy_call_link}" style="color: #D4B37A; text-decoration: none; font-size: 16px; font-weight: 500; font-family: 'Work Sans', sans-serif;">
              Want similar results? Let's talk strategy.
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
