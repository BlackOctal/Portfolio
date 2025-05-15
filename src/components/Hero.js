// Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp, FaGoogle, FaDownload } from 'react-icons/fa';
import TextDecrypt from './TextDecrypt';
import styles from './Hero.module.css';

const Hero = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.socialLinks}>
        {Object.entries(data.social).map(([platform, link]) => (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            {platform === 'github' && <FaGithub />}
            {platform === 'linkedin' && <FaLinkedin />}
            {platform === 'medium' && <FaMedium />}
            {platform === 'whatsapp' && <FaWhatsapp />}
            {platform === 'google' && <FaGoogle />}
          </a>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          <TextDecrypt text={data.personal.name} />
        </h1>
        <p className={styles.subtitle}>
          <TextDecrypt text={data.personal.position} />
        </p>
        <a
          href={data.personal.resumeLink}
          download
          className={styles.resumeButton}
        >
          <FaDownload /> Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;