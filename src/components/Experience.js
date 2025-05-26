import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.experienceList}>
          {data.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.experienceItem}
            >
              <div className={styles.timeline}>
                <div className={styles.dot}></div>
                {index < data.length - 1 && <div className={styles.line}></div>}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.titleCompany}>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.year}>{exp.year}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;