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

    const name = "DHANUSHKODI";
    const heading = "Turning Ideas into Powerful Web Applications";

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
            textAlign: 'center',
            paddingTop: '4rem'
        }}>
            <motion.div
                className="container hero-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="hero-text-content">

                    <motion.h1
                        variants={textVariants}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900
                        }}
                    >
                        {heading.split(" ").map((word, wordIndex, array) => (
                            <React.Fragment key={wordIndex}>
                                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={`char-${wordIndex}-${charIndex}`}
                                            variants={charVariants}
                                            className={word === "Ideas" || word === "Web" ? "gradient-text" : ""}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                                {wordIndex < array.length - 1 && (
                                    <motion.span
                                        key={`space-${wordIndex}`}
                                        variants={charVariants}
                                        style={{ display: 'inline-block', whiteSpace: 'pre' }}
                                    >
                                        {" "}
                                    </motion.span>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.h1>

                    <motion.div variants={itemVariants}>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            fontWeight: 500
                        }}>
                            Hi, I'm{" "}
                            <motion.span
                                variants={textVariants}
                                style={{ color: 'var(--text-primary)', fontWeight: 800 }}
                            >
                                {name.split("").map((char, index) => (
                                    <motion.span key={index} variants={charVariants}>{char}</motion.span>
                                ))}
                            </motion.span>
                            . A creative developer focused on building high-end, visual, and user-centric web applications.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-buttons"
                    >
                        <motion.a
                            href="#projects"
                            className="btn-primary"
                            whileHover="hover"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                textDecoration: 'none'
                            }}
                        >
                            <span style={{ fontWeight: 700 }}>View Projects</span>
                            <motion.svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                variants={{ hover: { x: 5 } }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <path d="M5 6 L11 12 L5 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5 L17 12 L10 19 L14 19 L21 12 L14 5 Z" fill="currentColor" />
                            </motion.svg>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="glass"
                            whileHover="hover"
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: 'var(--radius-pill)',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                textTransform: 'uppercase',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'var(--text-primary)',
                                textShadow: '0 0 10px rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <span>Contact Me</span>
                            <motion.svg
                                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </motion.svg>
                        </motion.a>

                        <motion.a
                            href="./resume.pdf"
                            download="Dhanush_Kodi_Resume.pdf"
                            className="glass"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                borderColor: '#6366f1'
                            }}
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: 'var(--radius-pill)',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                textTransform: 'uppercase',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: '#6366f1',
                                border: '1px solid rgba(99, 102, 241, 0.4)',
                                background: 'transparent',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <span>Download Resume</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-socials"
                    >
                        {/* Social Links with Tooltips */}
                        {[
                            {
                                name: 'Email',
                                url: 'mailto:kodidhanush1402@gmail.com',
                                color: '#EA4335', // Google Red
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            },
                            {
                                name: 'LinkedIn',
                                url: 'https://www.linkedin.com/in/dhanush-kodi1402',
                                color: '#0A66C2', // LinkedIn Blue
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            },
                            {
                                name: 'WhatsApp',
                                url: 'https://wa.me/919566365706',
                                color: '#25D366', // WhatsApp Green
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            },
                            {
                                name: 'Naukri',
                                url: 'https://www.naukri.com/mnjuser/homepage',
                                color: '#265DF5', // Naukri Blue
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V2h4l8 12.5V2h4v20h-4L8 9.5V22H4z"></path></svg>
                            },
                            {
                                name: 'GitHub',
                                url: 'https://github.com/Dhanushkodi143',
                                color: theme === 'light' ? '#0f172a' : '#ffffff', // Slate-900 in light, White in dark
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            }
                        ].map((social, idx) => (
                            <div key={social.name} style={{ position: 'relative' }} className="social-icon-wrapper">
                                <a href={social.url} target={social.url.startsWith('mailto:') ? "_self" : "_blank"} rel="noopener noreferrer"
                                    className="social-icon"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        color: social.color, // Always colored
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: `1px solid ${social.color}66`, // Colored border 40% opacity
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: `0 4px 10px ${social.color}1a` // Subtle default glow
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}4d`; // 30% opacity on hover
                                        e.currentTarget.style.borderColor = social.color;
                                        // Show tooltip
                                        e.currentTarget.nextElementSibling.style.opacity = '1';
                                        e.currentTarget.nextElementSibling.style.transform = 'translate(-50%, -10px)';
                                        e.currentTarget.nextElementSibling.style.visibility = 'visible';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `0 4px 10px ${social.color}1a`;
                                        e.currentTarget.style.borderColor = `${social.color}66`;
                                        // Hide tooltip
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
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="hero-image-wrapper"
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '400px',
                        aspectRatio: '1/1',
                        borderRadius: '2rem',
                        padding: '6px', // Space for the glowing border
                        background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, var(--accent-color), #8b5cf6, #ec4899) border-box',
                        border: '2px solid transparent',
                        animation: 'float 6s ease-in-out infinite, gradient-shift 10s ease infinite',
                        backgroundSize: '200% 200%',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)',
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
                                alt="Dhanushkodi Portrait"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
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
                </motion.div>

                <style>{`
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
