import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
                borderLeft: '6px solid var(--accent-color)', 
                paddingLeft: '1.5rem',
                marginBottom: '4rem',
                textAlign: 'left'
            }}
        >
            <div style={{
                display: 'inline-block',
                background: 'var(--bg-accent)', 
                color: 'var(--accent-color)', 
                padding: '0.4rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1rem',
                textTransform: 'lowercase'
            }}>
                {subtitle}
            </div>
            
            <h2 style={{ 
                fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', 
                fontWeight: 800, 
                margin: 0, 
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                lineHeight: 1.1
            }}>
                {title}
                <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    style={{
                        display: 'inline-block',
                        width: '0.5em',
                        height: '1em',
                        background: 'var(--accent-color)',
                        marginLeft: '0.2em'
                    }}
                />
            </h2>
            
            {description && (
                <p style={{ 
                    marginTop: '0.75rem', 
                    color: 'var(--text-muted)', 
                    fontSize: '1rem',
                    fontWeight: 500
                }}>
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
