// About.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.grid}
        >
          <img
            src={data.photo}
            alt="Profile"
            className={styles.image}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              {data.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;