import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExpand, FaTimes } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modalOverlay}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDescription}>{project.description}</p>
          <div className={styles.techStack}>
            {project.tech.map(tech => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
          <div className={styles.modalLinks}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          Recent work spanning AI/ML, full stack engineering, and research applications
        </p>

        <div className={styles.projectsGrid}>
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={styles.projectCard}
              layout
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>0{project.id}</div>
                <button
                  className={styles.expandButton}
                  onClick={() => setSelectedProject(project)}
                  aria-label="View details"
                >
                  <FaExpand />
                </button>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;