import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Projects = () => {
    const projectList = [
        {
            title: 'E-Commerce Platform',
            desc: 'A premium, fully responsive shopping experience with a focus on high-end visual aesthetics and smooth motion.',
            tags: ['React', 'Stripe', 'Framer Motion'],
            category: 'Web App',
            image: './assets/projects/ecommerce.png'
        },
        {
            title: 'Analytics Dashboard',
            desc: 'Modern data visualization dashboard for tracking real-time metrics with custom interactive charts.',
            tags: ['D3.js', 'Next.js', 'Tailwind'],
            category: 'FinTech',
            image: './assets/projects/analytics.png'
        },
        {
            title: 'Creative Agency Site',
            desc: 'Award-winning portfolio concept for a global creative agency featuring advanced CSS animations.',
            tags: ['Three.js', 'GSAP', 'Vite'],
            category: 'Creative',
            image: './assets/projects/creative.png'
        }
    ];

    return (
        <section id="projects" style={{ padding: '0', margin: '0' }}>
            <div className="container">
                <SectionHeading title="Featured Work" subtitle="portfolio" />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -15 }}
                            style={{ padding: '0' }}
                        >
                            <div style={{
                                height: '240px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(2, 6, 23, 0.8) 0%, transparent 60%)',
                                    pointerEvents: 'none'
                                }}></div>
                                <span className="pill" style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.6)',
                                    color: '#fff',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {project.category}
                                </span>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
