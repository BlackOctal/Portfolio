// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './Experience.module.css';

// const Experience = ({ data }) => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Experience</h2>
//         <div className={styles.experienceGrid}>
//           {data.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={styles.experienceCard}
//             >
//               <div className={styles.cardHeader}>
//                 <span className={styles.yearBadge}>{exp.year}</span>
//               </div>
//               <h3 className={styles.jobTitle}>{exp.title}</h3>
//               <p className={styles.company}>{exp.company}</p>
//               <p className={styles.jobDescription}>{exp.description}</p>
//               <div className={styles.cardDecoration}></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './Experience.module.css';

// const Experience = ({ data }) => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Experience</h2>
//         <div className={styles.experienceStack}>
//           {data.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               whileHover={{ scale: 1.02 }}
//               className={styles.experienceCard}
//             >
//               <div className={styles.cardNumber}>0{index + 1}</div>
//               <div className={styles.cardContent}>
//                 <div className={styles.leftSection}>
//                   <span className={styles.year}>{exp.year}</span>
//                   <h3 className={styles.company}>{exp.company}</h3>
//                 </div>
//                 <div className={styles.rightSection}>
//                   <h3 className={styles.jobTitle}>{exp.title}</h3>
//                   <p className={styles.jobDescription}>{exp.description}</p>
//                 </div>
//               </div>
//               <div className={styles.progressBar}>
//                 <motion.div
//                   className={styles.progressFill}
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '100%' }}
//                   transition={{ duration: 1, delay: index * 0.2 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



// Experience.js - Minimalist Design
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