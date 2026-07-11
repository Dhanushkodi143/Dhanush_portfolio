import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const Education = () => {
    return (
        <section id="education" style={{ padding: '2rem 0', background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <SectionHeading title="Education" subtitle="academic background" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: '1.5rem',
                        padding: '2.5rem',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: 'var(--glass-shadow)',
                        position: 'relative',
                        overflow: 'hidden',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(165, 214, 255, 0.05) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}></div>

                    <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ 
                            background: 'rgba(165, 214, 255, 0.15)', 
                            padding: '1rem', 
                            borderRadius: '12px',
                            display: 'inline-flex',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(165, 214, 255, 0.3)'
                        }}>
                            <FaGraduationCap size={32} color="#a5d6ff" />
                        </div>

                        <h3 style={{ 
                            color: 'var(--text-primary)', 
                            fontSize: '2rem', 
                            fontWeight: 800, 
                            margin: '0 0 1rem 0' 
                        }}>
                            Bachelor of Engineering – Mechanical Engineering
                        </h3>
                        
                        <p style={{ 
                            color: 'var(--text-secondary)', 
                            fontSize: '1.1rem', 
                            lineHeight: 1.6, 
                            margin: '0 0 1.5rem 0',
                            maxWidth: '600px'
                        }}>
                            Velalar College of Engineering (Anna University) | Erode, India
                        </p>
                        
                        <div style={{ 
                            color: '#a5d6ff',
                            fontSize: '1.1rem', 
                            fontWeight: 700, 
                            marginBottom: '1rem' 
                        }}>
                            May 2022
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
