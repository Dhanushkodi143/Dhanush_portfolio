import React from 'react';
import { motion } from 'framer-motion';

const resumeData = {
    name: "DHANUSH KODI PALANISAMY",
    title: "Senior Full-Stack Developer",
    contact: "Chennai, Tamil Nadu | kodidhanush1402@gmail.com | +91 9566365706",
    objective: "Senior Full-Stack Developer with 4+ years of experience designing and delivering scalable enterprise applications in the Banking and FinTech domain. Proficient in Java, Spring Boot, React, and cloud-native integration technologies including AWS S3, Azure Event Hub, Apache Kafka, and ActiveMQ. Experienced in building end-to-end transport-layer integrations, mentoring development teams, and driving UI architecture using Nx Monorepo. Strong background in Agile methodologies, reusable component design, CI/CD pipelines, and workflow-driven banking platforms.",
    experience: [
        {
            title: "Consultant – Product Engineer",
            company: "Intellect Design Arena",
            location: "Chennai, India",
            project: "iTurmeric / Enterprise Integrations",
            period: "Jun 2025 - Present",
            details: [
                "Architected and owned end-to-end backend integration endpoints using Java and Spring Boot across AWS S3, Azure Event Hub, Apache Kafka, SFTP, IBM MQ, and ActiveMQ — processing high-throughput financial data pipelines with zero downtime across 3+ production environments.",
                "Led the development of a reusable React component library with built-in event-handling abstractions, reducing boilerplate code by ~40% and cutting UI feature delivery time across cross-functional teams.",
                "Drove full-stack feature delivery on the iTurmeric enterprise banking platform, owning REST API design and transport-layer integration from requirement to production release.",
                "Mentored 3 junior developers on Spring Boot microservices architecture and React component design best practices, improving code review pass rates and reducing rework cycles.",
                "Collaborated with cross-functional Agile teams to deliver features meeting enterprise banking quality standards, consistently meeting sprint commitments across quarterly release cycles."
            ]
        },
        {
            title: "Associate Consultant – Product Engineer",
            company: "Intellect Design Arena",
            location: "Chennai, India",
            project: "Banking Workflows",
            period: "Jun 2024 - Jun 2025",
            details: [
                "Implemented transport-layer connectivity using Spring Boot integrating AWS S3, Azure Service Bus, Apache Kafka, SFTP, FTP, IBM MQ, and ActiveMQ — enabling reliable enterprise banking workflows across distributed systems.",
                "Delivered scalable backend REST APIs and frontend React components, contributing to a 25% reduction in API response latency through optimized data handling and connection pooling.",
                "Enhanced the banking UI using React and Bootstrap, building event-driven components that streamlined 5+ critical user workflows and improved task completion rates for banking operations teams.",
                "Maintained code quality through structured peer reviews, unit testing, and documentation — achieving consistent adherence to enterprise development standards across all delivered modules."
            ]
        },
        {
            title: "Associate Software Developer",
            company: "Techriffs Info Systems",
            location: "Chennai, India",
            project: "Full-Stack Banking Solution",
            period: "Nov 2022 - Jun 2024",
            details: [
                "Built a comprehensive full-stack banking solution covering 8 modules: Account Creation, Customer Information Management, Transaction Processing, Loan Management, Accounting & Finance, Risk Management, Online Banking, and CRM — delivered on schedule across all milestones.",
                "Developed backend REST APIs using Java and Spring Boot, implementing business logic for loan processing, transaction management, and financial accounting modules used by 200+ concurrent users, backed by SQL/MySQL data models.",
                "Designed and implemented a role-based access control (RBAC) system supporting Customer, Admin, and Manager profiles with dynamic, configurable permission management — reducing unauthorized access incidents to zero post-launch.",
                "Built responsive frontend interfaces using React and Bootstrap, achieving consistent cross-browser compatibility and reducing UI-related support tickets by 30% post-deployment.",
                "Translated business requirements into technical solutions end-to-end, collaborating with stakeholders to deliver all modules within agreed timelines and scope."
            ]
        }
    ],
    skills: {
        frontend: ["React.js", "Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
        backend: ["Java", "Core Java", "Spring Boot", "Node.js", "REST APIs", "Microservices", "SQL/MySQL", "PostgreSQL"],
        tools: ["Nx Monorepo", "Git", "Agile/Scrum", "Jenkins", "Docker", "Kafka", "ActiveMQ"]
    },
    education: "Bachelor of Engineering – Mechanical Engineering | Velalar College of Engineering (May 2022)"
};

const RibbonHeader = ({ text, color, darkColor, lightColor }) => (
    <div style={{ position: 'relative', marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
            background: `linear-gradient(135deg, ${color}, ${darkColor})`,
            color: '#fff',
            padding: '1rem 3.5rem',
            fontSize: '1.4rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            transform: 'skewX(-15deg)',
            zIndex: 2,
            position: 'relative',
            border: '2px solid rgba(255,255,255,0.1)'
        }}>
            <span style={{ transform: 'skewX(15deg)', display: 'inline-block' }}>{text}</span>
        </div>
        {/* Ribbon Fold (Left) */}
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 180px)',
            bottom: '-12px',
            width: '40px',
            height: '40px',
            background: darkColor,
            transform: 'skewY(45deg)',
            zIndex: 1
        }} />
        {/* Ribbon Fold (Right) */}
        <div style={{
            position: 'absolute',
            right: 'calc(50% - 180px)',
            bottom: '-12px',
            width: '40px',
            height: '40px',
            background: darkColor,
            transform: 'skewY(-45deg)',
            zIndex: 1
        }} />
    </div>
);

const Resume = () => {
    return (
        <div className="resume-section-wrapper">
            <section id="resume-content" style={{ padding: '4rem 0', background: '#fff', color: '#000' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem', borderBottom: '2px solid #eee', paddingBottom: '2rem' }}>
                        <h1 style={{ fontSize: '3.5rem', margin: 0, color: '#000' }}>{resumeData.name}</h1>
                        <p style={{ fontSize: '1.5rem', color: '#666', fontWeight: 600 }}>{resumeData.title}</p>
                        <p style={{ color: '#888' }}>{resumeData.contact}</p>
                    </div>

                    {/* OBJECTIVE */}
                    <RibbonHeader text="Career Objective" color="#3b82f6" darkColor="#1e3a8a" lightColor="#60a5fa" />
                    <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic', color: '#334155' }}>
                            "{resumeData.objective}"
                        </p>
                    </div>

                    {/* EXPERIENCE */}
                    <RibbonHeader text="Professional Experience" color="#10b981" darkColor="#065f46" lightColor="#34d399" />
                    {resumeData.experience.map((exp, idx) => (
                        <div key={idx} style={{ padding: '2rem', borderLeft: '6px solid #10b981', background: '#f0fdf4', borderRadius: '0 1rem 1rem 0', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>{exp.title}</h3>
                                <span style={{ fontWeight: 700, color: '#10b981' }}>{exp.period}</span>
                            </div>
                            <h4 style={{ color: '#666', marginBottom: '1rem' }}>{exp.company} | {exp.location}</h4>
                            <p><strong>Project: {exp.project}</strong></p>
                            <ul style={{ lineHeight: 1.8 }}>
                                {exp.details.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}

                    {/* SKILLS */}
                    <RibbonHeader text="Technical Skills" color="#f59e0b" darkColor="#92400e" lightColor="#fbbf24" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#b45309' }}>Frontend</h4>
                            {resumeData.skills.frontend.join(', ')}
                        </div>
                        <div style={{ padding: '1.5rem', background: '#f0f9ff', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#0369a1' }}>Backend & DB</h4>
                            {resumeData.skills.backend.join(', ')}
                        </div>
                        <div style={{ padding: '1.5rem', background: '#f5f3ff', borderRadius: '1rem' }}>
                            <h4 style={{ color: '#6d28d9' }}>Tools</h4>
                            {resumeData.skills.tools.join(', ')}
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <RibbonHeader text="Education" color="#6366f1" darkColor="#3730a3" lightColor="#818cf8" />
                    <div style={{ textAlign: 'center', padding: '2rem', background: '#e0e7ff', borderRadius: '1rem' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{resumeData.education}</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Resume;
