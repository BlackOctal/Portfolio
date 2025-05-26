import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaExpand } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // Get unique tech tags for filtering
  const allTechs = [...new Set(data.flatMap(project => project.tech))];
  const filters = ['All', ...allTechs];

  // Filter projects based on selected technology
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.tech.includes(filter));

  // Modal component for project details
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>×</button>
          {/* Image commented out for later
          <img
            src={project.image}
            alt={project.title}
            className={styles.modalImage}
          /> */}
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDescription}>{project.description}</p>
          {project.detailedDescription && (
            <p className={styles.detailedDescription}>{project.detailedDescription}</p>
          )}
          <div className={styles.techStack}>
            {project.tech.map(tech => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.modalLinks}>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              <FaGithub /> View Code
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
        
        {/* Filter buttons */}
        <div className={styles.filterContainer}>
          {filters.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`${styles.filterButton} ${filter === tech ? styles.active : ''}`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.projectCard}
              layout
            >
              {/* Image container commented out for later
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}>
                  <button
                    className={styles.expandButton}
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaExpand /> View Details
                  </button>
                </div>
              </div> */}
              
              {/* Placeholder div for image - can be styled as needed */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageOverlay}>
                  <button
                    className={styles.expandButton}
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaExpand /> View Details
                  </button>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map(tech => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {/* <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a> */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
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