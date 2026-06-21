import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        setStatus('submitting');

        // Web3Forms native background submission using FormData
        const formPayload = new FormData(e.target);
        formPayload.append("access_key", "613927ad-4175-4f37-91f1-a0fbd36f003c");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formPayload
            });
            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });

                setTimeout(() => {
                    setStatus('idle');
                }, 4000);
            } else {
                setStatus('error');
                alert("Web3Forms Error: " + data.message);
                console.error("Web3Forms error response:", data);
            }
        } catch (error: any) {
            console.error("Network or parsing error:", error);
            setStatus('error');
            alert("Submission failed: " + error.message);
        }
    };
    const contactInfo = [
        {
            label: "Email Me",
            value: "kodidhanush1402@gmail.com",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            )
        },
        {
            label: "Call Me",
            value: "+91 9566365706",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        },
        {
            label: "Location",
            value: "Chennai, India",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            )
        }
    ];

    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'var(--bg-primary)', transition: 'background-color 0.3s ease' }}>
            <div className="contact-blob-1"></div>
            <div className="contact-blob-2"></div>

            <div className="container">
                {/* Section Header */}
                <SectionHeading title="Get In Touch" subtitle="contact me" description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', alignItems: 'center' }}>

                    {/* LEFT SIDE: INFO CARDS WRAPPER */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{ marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Let's build something amazing.</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Reach out via email or directly over the phone.</p>
                        </div>
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10, scale: 1.02 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    padding: '1.5rem 2rem',
                                    borderRadius: '1rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderLeft: '4px solid var(--accent-color)',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(45, 212, 191, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-color)',
                                }}>
                                    {info.icon}
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.15em' }}>
                                        {info.label}
                                    </p>
                                    <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                                        {info.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* RIGHT SIDE: FORM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            padding: '2.5rem',
                            borderRadius: '1rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem'
                        }}>
                            Send a message
                        </h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--glass-border)',
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--glass-border)',
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--glass-border)',
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        resize: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                ></textarea>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem',
                                    marginTop: '0.5rem',
                                    borderRadius: '2rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                    background: status === 'success' ? '#10b981' : '#1a1a1a',
                                    border: 'none',
                                    cursor: status === 'submitting' || status === 'success' ? 'not-allowed' : 'pointer',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                {status === 'idle' && (
                                    <>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="9" y1="21" x2="9" y2="9"></line>
                                        </svg>
                                        Send message
                                    </>
                                )}
                                {status === 'submitting' && (
                                    <span>Sending...</span>
                                )}
                                {status === 'success' && (
                                    <span>✓ Message Sent</span>
                                )}
                                {status === 'error' && (
                                    <span style={{ color: '#ff4b4b' }}>Error Sending</span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
