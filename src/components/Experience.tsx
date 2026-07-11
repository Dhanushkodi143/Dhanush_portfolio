import React from 'react';
import { motion } from 'framer-motion';
import { FaRegBuilding, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '2rem 0', background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <SectionHeading title="Experience" subtitle="my journey" />

                {/* Bento Grid Layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    {/* Top Full Width Card (Intellect) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg-secondary)', // deep dark, mimicking the screenshot
                            borderRadius: '1.5rem',
                            padding: '2.5rem',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '3rem',
                            boxShadow: 'var(--glass-shadow)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="bento-intellect"
                    >
                        {/* Subtle background glow mimicking the right-side glow in screenshot */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 0
                        }}></div>

                        {/* Left Side Info */}
                        <div style={{ flex: '1 1 min(100%, 300px)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ 
                                background: 'rgba(46, 160, 67, 0.15)', 
                                padding: '1rem', 
                                borderRadius: '12px',
                                display: 'inline-flex',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(46, 160, 67, 0.3)'
                            }}>
                                <FaRegBuilding size={28} color="#2ea043" />
                            </div>

                            <p style={{ 
                                color: '#2ea043', 
                                fontSize: '0.85rem', 
                                fontWeight: 800, 
                                letterSpacing: '0.1em', 
                                textTransform: 'uppercase', 
                                margin: '0 0 0.5rem 0' 
                            }}>
                                Intellect Design Arena Pvt Ltd
                            </p>
                            
                            <h3 style={{ 
                                color: 'var(--text-primary)', 
                                fontSize: '2rem', 
                                fontWeight: 800, 
                                margin: '0 0 1rem 0' 
                            }}>
                                Fullstack Developer
                            </h3>
                            
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '1rem', 
                                lineHeight: 1.6, 
                                margin: '0 0 1.5rem 0' 
                            }}>
                                Developer of iTurmeric — a cloud-native, low-code, API-first integration platform for the BFSI sector. Handles payment processing, loan origination, and mobile banking services.
                            </p>
                            
                            <div style={{ 
                                color: '#2ea043', // Specific bright green from the screenshot
                                fontSize: '1.1rem', 
                                fontWeight: 700, 
                                marginBottom: '1.5rem' 
                            }}>
                                2024 – 2026
                            </div>
                            
                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {['Java', 'Apache Camel', 'Kubernetes', 'OpenShift', 'ISO 8583'].map(tag => (
                                    <span key={tag} style={{
                                        background: 'var(--bg-primary)',
                                        color: 'var(--text-secondary)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Stats Grid */}
                        <div style={{ 
                            flex: '1 1 min(100%, 300px)', 
                            zIndex: 1,
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                            gap: '1rem',
                            alignContent: 'center'
                        }}>
                            {[
                                { val: '4+', label: 'Yrs exp' },
                                { val: 'BFSI', label: 'Domain' },
                                { val: 'K8s', label: 'Cloud' },
                                { val: '15+', label: 'Projects' }
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-primary)',
                                    borderRadius: '1rem',
                                    padding: '2rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <span style={{ 
                                        color: '#2ea043', 
                                        fontSize: '2.5rem', 
                                        fontWeight: 900,
                                        marginBottom: '0.2rem'
                                    }}>
                                        {stat.val}
                                    </span>
                                    <span style={{ 
                                        color: 'var(--text-secondary)', 
                                        fontSize: '0.9rem', 
                                        fontWeight: 500 
                                    }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom Row: 2 Columns */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        
                        {/* Cognizant Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Subtle background glow */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '-20%',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>

                            <div style={{ zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ 
                                    background: 'rgba(56, 189, 248, 0.15)', padding: '1rem', borderRadius: '12px',
                                    display: 'inline-flex', marginBottom: '1.5rem', alignSelf: 'flex-start',
                                    border: '1px solid rgba(56, 189, 248, 0.3)'
                                }}>
                                    <FaGraduationCap size={28} color="#38bdf8" />
                                </div>

                                <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>
                                    Cognizant (CTS)
                                </p>
                                
                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 1rem 0' }}>
                                    Internship
                                </h3>
                                
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.5rem 0', flex: 1 }}>
                                    Pixel-perfect UI development with UI/UX designers using React and modern CSS animations.
                                </p>
                                
                                <div style={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                                    2022 · 6 months
                                </div>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {['React', 'CSS', 'Figma'].map(tag => (
                                        <span key={tag} style={{
                                            background: 'var(--bg-primary)', color: 'var(--text-secondary)', padding: '6px 14px',
                                            borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600,
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Tech Reffis Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                             {/* Subtle background glow */}
                             <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '-20%',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>

                            <div style={{ zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ 
                                    background: 'rgba(251, 146, 60, 0.15)', padding: '1rem', borderRadius: '12px',
                                    display: 'inline-flex', marginBottom: '1.5rem', alignSelf: 'flex-start',
                                    border: '1px solid rgba(251, 146, 60, 0.3)'
                                }}>
                                    <FaBriefcase size={28} color="#fb923c" />
                                </div>

                                <p style={{ color: '#fb923c', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>
                                    Tech Reffis.
                                </p>
                                
                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 1rem 0' }}>
                                    Fullstack Developer
                                </h3>
                                
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.5rem 0', flex: 1 }}>
                                    High-traffic web application development with fullstack ownership — React frontend + Node.js backend.
                                </p>
                                
                                <div style={{ color: '#fb923c', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                                    2022–2024 · 2 yrs
                                </div>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {['React', 'Node.js', 'MongoDB'].map(tag => (
                                        <span key={tag} style={{
                                            background: 'var(--bg-primary)', color: 'var(--text-secondary)', padding: '6px 14px',
                                            borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600,
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Inject media query for mobile responsiveness of the Bento Grid */}
            <style>{`
                @media (max-width: 900px) {
                    .bento-intellect {
                        flex-direction: column !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
