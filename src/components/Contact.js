// Contact.js - Enhanced phone input with formatting
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = ({ webFormAccessKey }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '' 
  });
  const [status, setStatus] = useState('');
  
  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };
  
  const handlePhoneChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedNumber });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: webFormAccessKey,
          ...formData
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={styles.input}
              maxLength="14"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={styles.textarea}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={styles.submitButton}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className={`${styles.statusMessage} ${styles.successMessage}`}>
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.statusMessage} ${styles.errorMessage}`}>
              Error sending message. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;