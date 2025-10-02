// Webhook handler for Calendly bookings
// Pauses email sequences when users book strategy calls

import { EmailSequenceManager } from './email-sequence/sequence-manager.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { event, payload } = req.body;
    
    // Handle Calendly webhook events
    if (event === 'invitee.created') {
      const email = payload.email;
      const eventName = payload.event_name;
      
      console.log(`📅 Calendly booking: ${email} - ${eventName}`);
      
      // Pause email sequence when strategy call is booked
      if (eventName.toLowerCase().includes('strategy') || 
          eventName.toLowerCase().includes('discovery') ||
          eventName.toLowerCase().includes('clarity')) {
        
        const sequenceId = EmailSequenceManager.pauseSequence(email, 'strategy_call_booked');
        
        if (sequenceId) {
          console.log(`✅ Paused email sequence for ${email}: ${sequenceId}`);
          return res.status(200).json({ 
            success: true, 
            message: 'Email sequence paused',
            sequenceId 
          });
        } else {
          console.log(`ℹ️ No active sequence found for ${email}`);
          return res.status(200).json({ 
            success: true, 
            message: 'No active sequence found' 
          });
        }
      }
    }
    
    return res.status(200).json({ success: true, message: 'Webhook processed' });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
