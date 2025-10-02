// Email 4 - Blind Spot Reveal Template
// Trigger: 5 days after Email 1

export const email4BlindSpotTemplate = (data) => {
  const {
    first_name = 'there',
    archetype_name = 'Founder',
    strategy_call_link = 'https://calendly.com/ermo/discoverycall'
  } = data;

  // Blind spot descriptions for each archetype
  const blindSpotDescriptions = {
    'Visionary': 'they get lost in the big picture and fail to articulate immediate value',
    'Builder': 'they focus too much on the \'how\' and not enough on the \'why\' or emotional impact',
    'Strategist': 'their logical, data-driven approach can come across as cold or impersonal',
    'Connector': 'they prioritize networking over a clear, concise message, diluting their core offering',
    'Guardian': 'they emphasize stability so much that they appear resistant to innovation or change',
    'Trailblazer': 'their disruptive stance can alienate traditional investors or customers who prefer incremental change',
    'Default': 'they struggle to articulate their unique value proposition clearly'
  };

  const blind_spot_description = blindSpotDescriptions[archetype_name] || blindSpotDescriptions['Default'];

  return {
    subject: `The ${archetype_name} Blind Spot Costing You Deals`,
    html: `
      <div style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5; color: #333333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 10px;">Your Blind Spot Revealed</h1>
          <div style="width: 60px; height: 3px; background-color: #D4B37A; margin: 0 auto;"></div>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #D4B37A;">
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-family: 'Work Sans', sans-serif;">Hi ${first_name},</p>
          
          <div style="background-color: rgba(255, 193, 7, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #FFC107;">
            <h3 style="color: #A67C52; font-family: 'Playfair Display', serif; font-size: 18px; margin: 0 0 10px 0;">🚨 Critical Insight</h3>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; font-family: 'Work Sans', sans-serif;">
              Most <strong>${archetype_name}</strong> founders struggle because <strong>${blind_spot_description}</strong>—leaving prospects unsure of the next step.
            </p>
          </div>
          
          <p style="color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-family: 'Work Sans', sans-serif;">
            Discover your <strong>Shadow Archetype Integration</strong> in Chapter 6 to turn vulnerability into trust.
          </p>
          
          <div style="background-color: rgba(212, 179, 122, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #D4B37A;">
            <h4 style="color: #111111; font-family: 'Playfair Display', serif; font-size: 16px; margin: 0 0 10px 0;">The Fix:</h4>
            <ul style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px; font-family: 'Work Sans', sans-serif;">
              <li>Identify your shadow patterns</li>
              <li>Transform weaknesses into strengths</li>
              <li>Build authentic trust with investors</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${strategy_call_link}" style="color: #D4B37A; text-decoration: none; font-size: 16px; font-weight: 500; font-family: 'Work Sans', sans-serif;">
              Unlock your full potential—book a call.
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
