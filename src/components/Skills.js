import React from 'react';
import Marquee from 'react-fast-marquee';
import { skillsData } from '../utils/data/skills';
import { skillsImage } from '../utils/skill-image';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Skills</div>
      
      <div className={styles.marqueeWrapper}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div 
              className={styles.skillItem}
              key={id}
            >
              <div className={styles.skillCard}>
                <div className={styles.skillCardTop}>
                  <div className={styles.skillCardTopInner}>
                    <div className={styles.skillCardGradient} />
                  </div>
                </div>
                <div className={styles.skillCardContent}>
                  <div className={styles.imageContainer}>
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className={styles.skillIcon}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/40/40';
                      }}
                    />
                  </div>
                  <p className={styles.skillText}>
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;