import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const Education = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.educationList}>
          {data.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={styles.educationItem}
            >
              <div className={styles.timeline}>
                <div className={styles.dot} />
                {index < data.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.titleInstitution}>
                    <h3 className={styles.degree}>{edu.title}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    {edu.grade && (
                      <span className={styles.grade}>{edu.grade}</span>
                    )}
                  </div>
                  <span className={styles.year}>{edu.year}</span>
                </div>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;