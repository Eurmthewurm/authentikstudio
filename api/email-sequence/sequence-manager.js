// Email Sequence Manager
// Handles 5-email drip campaign automation

import { Resend } from 'resend';
import { email1DeliveryTemplate, archetypeMicroTips } from '../email-templates/email-1-delivery.js';
import { email2RoadmapTemplate } from '../email-templates/email-2-roadmap.js';
import { email3CaseStudyTemplate } from '../email-templates/email-3-case-study.js';
import { email4BlindSpotTemplate } from '../email-templates/email-4-blind-spot.js';
import { email5FinalCallTemplate } from '../email-templates/email-5-final-call.js';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory store for demo (use database in production)
const emailSequences = new Map();
const pausedSequences = new Set();

export class EmailSequenceManager {
  
  // Start the 5-email drip campaign
  static async startSequence(userData) {
    const {
      email,
      first_name,
      archetype_name,
      signal_score,
      signal_level
    } = userData;

    const sequenceId = `${email}_${Date.now()}`;
    const startTime = Date.now();

    // Schedule all emails
    const schedule = [
      { delay: 0, template: 'email1', name: 'Immediate Delivery' },
      { delay: 24 * 60 * 60 * 1000, template: 'email2', name: '3-Step Roadmap' }, // 24 hours
      { delay: 3 * 24 * 60 * 60 * 1000, template: 'email3', name: 'Case Study' }, // 3 days
      { delay: 5 * 24 * 60 * 60 * 1000, template: 'email4', name: 'Blind Spot Reveal' }, // 5 days
      { delay: 7 * 24 * 60 * 60 * 1000, template: 'email5', name: 'Final Call' } // 7 days
    ];

    // Store sequence data
    emailSequences.set(sequenceId, {
      email,
      first_name,
      archetype_name,
      signal_score,
      signal_level,
      micro_tip: archetypeMicroTips[archetype_name] || archetypeMicroTips['Default'],
      schedule,
      startTime,
      sentEmails: [],
      paused: false
    });

    // Send Email 1 immediately
    await this.sendEmail1(userData, sequenceId);

    // Schedule remaining emails
    schedule.slice(1).forEach(emailSchedule => {
      setTimeout(() => {
        this.sendScheduledEmail(sequenceId, emailSchedule);
      }, emailSchedule.delay);
    });

    return sequenceId;
  }

  // Send Email 1 immediately
  static async sendEmail1(userData, sequenceId) {
    const emailTemplate = email1DeliveryTemplate(userData);
    
    try {
      const result = await resend.emails.send({
        from: 'Authentik Studio <hello@authentikstudio.com>',
        to: [userData.email],
        subject: emailTemplate.subject,
        html: emailTemplate.html
      });

      console.log(`✅ Email 1 sent to ${userData.email}:`, result.data?.id);
      
      // Mark as sent
      const sequence = emailSequences.get(sequenceId);
      if (sequence) {
        sequence.sentEmails.push('email1');
      }

      return result;
    } catch (error) {
      console.error(`❌ Failed to send Email 1 to ${userData.email}:`, error);
      throw error;
    }
  }

  // Send scheduled emails
  static async sendScheduledEmail(sequenceId, emailSchedule) {
    const sequence = emailSequences.get(sequenceId);
    
    if (!sequence || sequence.paused || pausedSequences.has(sequenceId)) {
      console.log(`⏸️ Sequence ${sequenceId} is paused, skipping ${emailSchedule.name}`);
      return;
    }

    const userData = {
      email: sequence.email,
      first_name: sequence.first_name,
      archetype_name: sequence.archetype_name,
      signal_score: sequence.signal_score,
      signal_level: sequence.signal_level,
      micro_tip: sequence.micro_tip,
      download_link: 'https://www.authentikstudio.com/quiz#download',
      strategy_call_link: 'https://calendly.com/ermo/discoverycall'
    };

    let emailTemplate;
    
    switch (emailSchedule.template) {
      case 'email2':
        emailTemplate = email2RoadmapTemplate(userData);
        break;
      case 'email3':
        emailTemplate = email3CaseStudyTemplate(userData);
        break;
      case 'email4':
        emailTemplate = email4BlindSpotTemplate(userData);
        break;
      case 'email5':
        emailTemplate = email5FinalCallTemplate(userData);
        break;
      default:
        console.error(`Unknown email template: ${emailSchedule.template}`);
        return;
    }

    try {
      const result = await resend.emails.send({
        from: 'Authentik Studio <hello@authentikstudio.com>',
        to: [sequence.email],
        subject: emailTemplate.subject,
        html: emailTemplate.html
      });

      console.log(`✅ ${emailSchedule.name} sent to ${sequence.email}:`, result.data?.id);
      
      // Mark as sent
      sequence.sentEmails.push(emailSchedule.template);

      return result;
    } catch (error) {
      console.error(`❌ Failed to send ${emailSchedule.name} to ${sequence.email}:`, error);
    }
  }

  // Pause sequence when user books a call
  static pauseSequence(email, reason = 'strategy_call_booked') {
    // Find sequence by email
    for (const [sequenceId, sequence] of emailSequences.entries()) {
      if (sequence.email === email) {
        sequence.paused = true;
        pausedSequences.add(sequenceId);
        console.log(`⏸️ Paused sequence for ${email} - Reason: ${reason}`);
        return sequenceId;
      }
    }
    return null;
  }

  // Resume sequence (if needed)
  static resumeSequence(sequenceId) {
    const sequence = emailSequences.get(sequenceId);
    if (sequence) {
      sequence.paused = false;
      pausedSequences.delete(sequenceId);
      console.log(`▶️ Resumed sequence ${sequenceId}`);
    }
  }

  // Get sequence status
  static getSequenceStatus(email) {
    for (const [sequenceId, sequence] of emailSequences.entries()) {
      if (sequence.email === email) {
        return {
          sequenceId,
          email: sequence.email,
          archetype: sequence.archetype_name,
          sentEmails: sequence.sentEmails,
          paused: sequence.paused,
          startTime: sequence.startTime
        };
      }
    }
    return null;
  }

  // Clean up old sequences (run periodically)
  static cleanupOldSequences() {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    for (const [sequenceId, sequence] of emailSequences.entries()) {
      if (sequence.startTime < oneWeekAgo) {
        emailSequences.delete(sequenceId);
        pausedSequences.delete(sequenceId);
      }
    }
  }
}

// Auto-cleanup every hour
setInterval(() => {
  EmailSequenceManager.cleanupOldSequences();
}, 60 * 60 * 1000);
