import React from 'react';

const About = () => {
    return (
        <section id="about" className="glass" style={{ margin: '2rem 0', borderRadius: '24px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About <span className="gradient-text">Me</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        I am a creative developer based on the cutting edge of web technology. I specialize in building highly interactive and visually stunning web applications that focus on user experience and clean aesthetics.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['React', 'JavaScript', 'Vite', 'UI/UX Design', 'Modern CSS'].map(skill => (
                            <span key={skill} style={{
                                padding: '0.5rem 1.2rem',
                                background: 'var(--bg-accent)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                border: '1px solid var(--glass-border)'
                            }}>{skill}</span>
                        ))}
                    </div>
                </div>
                <div style={{
                    height: '400px',
                    background: 'var(--bg-accent)',
                    borderRadius: '24px',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Placeholder for an image or dynamic element */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                        <p style={{ color: 'var(--text-muted)' }}>Interactive Element</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
