import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ theme }: { theme?: string }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const textVariants = {
        hidden: { opacity: 1 },
        visible: {
            transition: {
                staggerChildren: 0.05,
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0, y: 10, display: "none" },
        visible: { opacity: 1, y: 0, display: "inline-block" }
    };

    return (
        <section id="home" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left', // Aligned left matching the screenshot
            paddingTop: '6rem',
            paddingBottom: '0'
        }}>
            <motion.div
                className="container hero-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: '3rem',
                    justifyContent: 'space-between'
                }}
            >
                <div className="hero-text-content" style={{ flex: '1 1 0%', minWidth: '300px' }}>

                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            lineHeight: 1.1,
                            marginBottom: '0.5rem',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            color: 'var(--text-primary)'
                        }}
                    >
                        DHANUSH KODI PALANISAMY
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                            color: '#00bcd4',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            fontFamily: "'Montserrat', sans-serif",
                        }}
                    >
                        Senior Fullstack Developer
                    </motion.h2>

                    <motion.div variants={itemVariants}>
                        <p style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            fontWeight: 400,
                            lineHeight: 1.7,
                            maxWidth: '700px'
                        }}>
                            Senior Full-Stack Developer with 4+ years of experience designing and delivering scalable enterprise applications in the Banking and FinTech domain. Proficient in Java, Spring Boot, React, and cloud-native integration technologies including AWS S3, Azure Event Hub, Apache Kafka, and ActiveMQ. Experienced in building end-to-end transport-layer integrations, mentoring development teams, and driving UI architecture using Nx Monorepo. Strong background in Agile methodologies, reusable component design, and workflow-driven banking platforms.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-actions"
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                {
                                    name: 'Email',
                                    url: 'mailto:kodidhanush1402@gmail.com',
                                    color: '#EA4335', // Google Red
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                },
                                {
                                    name: 'LinkedIn',
                                    url: 'https://www.linkedin.com/in/dhanush-kodi1402',
                                    color: '#0A66C2', // LinkedIn Blue
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                },
                                {
                                    name: 'WhatsApp',
                                    url: 'https://wa.me/919566365706',
                                    color: '#25D366', // WhatsApp Green
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                },
                                {
                                    name: 'GitHub',
                                    url: 'https://github.com/Dhanushkodi143',
                                    color: theme === 'light' ? '#0f172a' : '#ffffff', // Slate-900 in light, White in dark
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                }
                            ].map((social, idx) => (
                                <div key={social.name} style={{ position: 'relative' }} className="social-icon-wrapper">
                                    <a href={social.url} target={social.url.startsWith('mailto:') ? "_self" : "_blank"} rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            color: social.color,
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: `1px solid ${social.color}66`, 
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            boxShadow: `0 4px 10px ${social.color}1a`
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}4d`;
                                            e.currentTarget.style.borderColor = social.color;
                                            e.currentTarget.style.background = `rgba(255,255,255,0.08)`;
                                            e.currentTarget.nextElementSibling.style.opacity = '1';
                                            e.currentTarget.nextElementSibling.style.transform = 'translate(-50%, -10px)';
                                            e.currentTarget.nextElementSibling.style.visibility = 'visible';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 4px 10px ${social.color}1a`;
                                            e.currentTarget.style.borderColor = `${social.color}66`;
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.nextElementSibling.style.opacity = '0';
                                            e.currentTarget.nextElementSibling.style.transform = 'translate(-50%, 0)';
                                            e.currentTarget.nextElementSibling.style.visibility = 'hidden';
                                        }}>
                                        {social.icon}
                                    </a>
                                    {/* Custom Tooltip */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '100%',
                                        left: '50%',
                                        transform: 'translate(-50%, 0)', // Starts slightly lower
                                        opacity: 0,
                                        visibility: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        marginBottom: '12px', // Gap between icon and tooltip
                                        padding: '6px 14px',
                                        background: social.color,
                                        color: social.name === 'GitHub' && theme === 'light' ? '#fff' : (social.color === '#ffffff' ? '#000' : '#fff'),
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.05em',
                                        borderRadius: '8px',
                                        whiteSpace: 'nowrap',
                                        boxShadow: `0 5px 15px ${social.color}66`,
                                        pointerEvents: 'none', // Don't interrupt hover on icon
                                        zIndex: 10
                                    }}>
                                        {social.name}
                                        {/* Tooltip triangle pointer */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            borderWidth: '5px',
                                            borderStyle: 'solid',
                                            borderColor: `${social.color} transparent transparent transparent`,
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Download Resume Button */}
                        <motion.a
                            href="./resume.pdf"
                            download="Dhanush_Kodi_Resume.pdf"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#2dd4bf',
                            }}
                            style={{
                                padding: '0.7rem 1.5rem',
                                borderRadius: '2rem',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: '#ffffff',
                                background: '#45c8b7', // Teal color matching screenshot
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: 'none',
                                boxShadow: '0 4px 14px rgba(69, 200, 183, 0.3)'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span>Download Resume</span>
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="hero-image-wrapper"
                    style={{ flex: '0 0 auto', width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '300px',
                        aspectRatio: '1/1',
                        borderRadius: '2rem',
                        padding: '6px', // Space for the glowing border
                        background: 'var(--bg-primary)',
                        border: '2px solid var(--accent-color)',
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.4), inset 0 0 20px rgba(45, 212, 191, 0.1)',
                        margin: '0 auto'
                    }}>
                        {/* Inner container to hold image and ensure border-radius matches */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '1.6rem', // Slightly smaller to fit inside padding
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <img
                                src="./profile.jpg"
                                alt="Dhanush Kodi Palanisamy Portrait"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'all 0.5s ease',
                                    filter: 'grayscale(0%)'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                }}
                            />
                            {/* Overlay gradient for premium feel */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, var(--bg-primary), transparent 40%)',
                                opacity: 0.6,
                                pointerEvents: 'none',
                            }}></div>
                        </div>
                    </div>

                    {/* Floating Code Snippet */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{
                            position: 'relative',
                            background: '#0d1117', // GitHub Dark like background
                            borderRadius: '12px',
                            padding: '1.2rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            zIndex: 10,
                            width: '100%',
                            maxWidth: '300px',
                            fontSize: '0.85rem',
                            fontFamily: "'Fira Code', 'Courier New', monospace",
                            textAlign: 'left',
                            backdropFilter: 'blur(10px)',
                            margin: '0 auto'
                        }}
                        className="floating-code-snippet"
                    >
                        {/* macOS dots */}
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                            <span style={{ marginLeft: '10px', color: '#8b949e', fontSize: '0.75rem', fontFamily: 'var(--font-main)', fontWeight: 600 }}>PortfolioController.java</span>
                        </div>
                        {/* Code */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.8,
                                    }
                                }
                            }}
                            style={{ color: '#c9d1d9', lineHeight: 1.6 }}
                        >
                            {[
                                <div><span style={{ color: '#d2a8ff' }}>@RestController</span></div>,
                                <div><span style={{ color: '#ff7b72' }}>public class</span> <span style={{ color: '#79c0ff' }}>Portfolio</span> {'{'}</div>,
                                <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#ff7b72' }}>String</span> name = <span style={{ color: '#a5d6ff' }}>"Dhanush kodi.P"</span>;</div>,
                                <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#ff7b72' }}>double</span> year = <span style={{ color: '#79c0ff' }}>4.2</span>;</div>,
                                <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#ff7b72' }}>String</span>[] stack = {'{'}</div>,
                                <div style={{ paddingLeft: '3rem', color: '#a5d6ff' }}>"Java", "React.js", "Spring Boot", "Microservices"</div>,
                                <div style={{ paddingLeft: '1.5rem' }}>{'}'};</div>,
                                <div>{'}'}</div>
                            ].map((line, i) => (
                                <motion.div 
                                    key={i} 
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <style>{`
                    @media (max-width: 900px) {
                        .hero-container {
                            flex-direction: column-reverse !important;
                            align-items: center !important;
                            text-align: center !important;
                            gap: 8rem !important;
                            padding-top: 0 !important;
                        }
                        .hero-image-wrapper {
                            margin-top: 0 !important;
                        }
                        .hero-text-content {
                            padding-left: 0 !important;
                            text-align: center !important;
                        }
                        .hero-text-content h1, 
                        .hero-text-content h2, 
                        .hero-text-content p {
                            text-align: center !important;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .hero-buttons {
                            justify-content: center !important;
                        }
                        .hero-socials {
                            justify-content: center !important;
                        }
                        .floating-code-snippet {
                            position: relative !important;
                            left: auto !important;
                            transform: none !important;
                            bottom: auto !important;
                            width: 100% !important;
                            max-width: 300px !important;
                        }
                    }

                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                        100% { transform: translateY(0px); }
                    }
                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    .perspective-grid {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        perspective: 1000px;
                        overflow: hidden;
                    }

                    .perspective-grid::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background-image:
                            linear-gradient(to right, transparent 1px, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
                            linear-gradient(to bottom, transparent 1px, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0.05) 2px, transparent 2px);
                        background-size: 50px 50px;
                        transform: rotateX(70deg) translateY(50%) scale(1.5);
                        transform-origin: bottom center;
                        animation: grid-move 30s linear infinite;
                        opacity: 0.3;
                    }

                    @keyframes grid-move {
                        0% { background-position: 0 0; }
                        100% { background-position: 0 500px; } /* Adjust based on grid size */
                    }
                `}</style>

            </motion.div>
        </section>
    );
};

export default Hero;
