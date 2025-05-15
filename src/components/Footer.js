import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socialLinks}>
            <a href="https://github.com/BlackOctal" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/janidu-welarathna-101611238/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:janiduhwelarathna@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className={styles.copyright}>
            © {currentYear} Janidu Himansa Welarathna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;