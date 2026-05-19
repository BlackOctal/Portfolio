import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFlask } from 'react-icons/fa';
import styles from './Research.module.css';

const Research = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Research Publications</h2>
        <p className={styles.subtitle}>
          Peer-reviewed work at the intersection of AI, NLP, and mental health
        </p>
        <div className={styles.publicationList}>
          {data.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className={styles.publicationCard}
            >
              <div className={styles.cardLeft}>
                <div className={styles.iconWrap}>
                  <FaFlask className={styles.icon} />
                </div>
                <span className={styles.year}>{pub.year}</span>
              </div>
              <div className={styles.cardBody}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paperTitle}
                >
                  {pub.title}
                  <FaExternalLinkAlt className={styles.extIcon} />
                </a>
                <p className={styles.venue}>{pub.venue}</p>
                <div className={styles.tags}>
                  <span className={styles.publisher}>{pub.publisher}</span>
                  {pub.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;